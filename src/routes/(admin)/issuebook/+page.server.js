import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {
    async function getBookID(){
        const res = await locals.pb.collection('books').getFullList({
            filter: 'status = "Available"'
        });

        return res;
    }

    async function getUserID() {
        const res = await locals.pb.collection('users').getFullList();

        return res;
    }

    return {
        books: getBookID(),
        users: getUserID()
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request, locals}) => {
        const form = await request.formData();
        const bookID = form.get('bookID');
        const userID = form.get('userID');
        const returnDate = form.get('returnDate');

        try {
            await locals.pb.collection('books_transaction').create({
                book: bookID,
                user: userID,
                return_date: new Date(returnDate)
            })

            await locals.pb.collection('books').update(bookID,{
                status: "Borrowed"
            })
        } catch (error) {
            return {
                err: error.message
            }
        }

        throw redirect(303,'/dashboard');
    }
};