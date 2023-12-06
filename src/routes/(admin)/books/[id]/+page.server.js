import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals, params}) {
    async function getBook(){
        const book = await locals.pb.collection('books').getOne(params.id);
        return book;
    }

    return {
        book: getBook()
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({locals, request, params}) => {
        const form = await request.formData();
        const title = form.get('title');
        const author = form.get('author');
        const genre = form.get('genre');

        try {
            const data = {
                title: title,
                author: author,
                genre: genre
            }
            await locals.pb.collection('books').update(params.id, data);

        } catch (error) {
            return {
                err: error.message
            }
        }
        throw redirect(303, '/dashboard');
    }
};