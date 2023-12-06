/** @type {import('./$types').PageLoad} */
export async function load({locals}) {
    async function getAllBooks(){
        const res = await locals.pb.collection('books').getFullList();

        return res;
    }

    return {
        books: getAllBooks()
    }
}