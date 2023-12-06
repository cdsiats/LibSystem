import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {
    if(!locals.pb.authStore.isValid){
        throw redirect(303, '/login');
    }
    if(locals.user.role !== "Admin"){
        throw redirect(303, '/studentDashboard');
    }

    async function getBooks(){
        const res = await locals.pb.collection('books').getFullList({
            sort: '-created'
        });

        return res;
    }

    return {
        books: getBooks()
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({locals, request}) => {
        const form = await request.formData();
        const id = form.get('id');

        try {
            await locals.pb.collection('books').delete(id);
            
        } catch (error) {
            return {
                err: error.message
            }
        }
    }
};