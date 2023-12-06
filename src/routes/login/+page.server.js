import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {
    
}
/** @type {import('./$types').Actions} */
export const actions = {
    default: async({request, locals}) => {
        const form = await request.formData();
        const username = form.get('username');
        const password = form.get('password');

        const res = await locals.pb.collection('users').authWithPassword(username, password);
    
        if(res.record.role === "Admin"){
            throw redirect(303, '/dashboard');
        } else {
             throw redirect(303, '/studentDashboard');
        }
    }
};