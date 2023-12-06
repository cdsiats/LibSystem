/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
	async function getAllBooks() {
		const res = await locals.pb.collection('books').getFullList({
			sort: '-created'
		});

		return res;
	}

	return {
		books: getAllBooks()
	};
}
