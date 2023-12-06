import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {
    async function getTransactions(){
        const res = await locals.pb.collection('books_transaction').getFullList({
            expand: "book, user"
        })

        return res;
    }

    return {
        transactions: getTransactions()
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({locals, request}) => {
        const form = await request.formData();
        const transacID = form.get('transac_id');
        const bookID = form.get('book_id');


        try {
            await locals.pb.collection('books_transaction').delete(transacID);
            await locals.pb.collection('books').update(bookID, {
                status: "Available"
            });
        } catch (error) {
            return {
                err: error.message
            }
        }

        throw redirect(303,'/dashboard')
    }
};