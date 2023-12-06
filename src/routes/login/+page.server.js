import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		let res;
		try {
			res = await locals.pb.collection('users').authWithPassword(username, password);
		} catch (error) {
			return {
				status: error.status,
				message: error.message
			};
		}

		if (res.record.role === 'Admin') throw redirect(303, '/dashboard');
		if (res.record.role === 'Student') throw redirect(303, '/studentDashboard');
	}
};
