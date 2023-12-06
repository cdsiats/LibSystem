import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {
    if(!locals.pb.authStore.isValid){
        throw redirect(303, '/login');
    }
    if(locals.user.role !== "Student"){
        throw redirect(303, '/dashboard');
    }

    async function getBorrowedBooks(){
        const res = await locals.pb.collection('books_transaction').getFullList({
            filter: `user = "${locals.user.id}"`,
            expand: 'book'
        });

        return res;
    }

    return {
        borrowedBooks: getBorrowedBooks()
    }
}