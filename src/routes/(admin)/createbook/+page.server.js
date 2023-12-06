import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request, locals}) => {
        const form = await request.formData();
        const title = form.get('title');
        const author = form.get('author');
        const genre = form.get('genre');

        try {
            await locals.pb.collection('books').create(
                {
                    title: title,
                    author: author,
                    genre: genre,
                    status: "Available"
                }
            )
        } catch (error) {
            return {
                err: error.message
            }
        }
        throw redirect(303,'/dashboard');
    }
};