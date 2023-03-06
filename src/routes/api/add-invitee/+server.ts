import type { RequestEvent } from '@sveltejs/kit';
import { API_HOST } from '$env/static/private';

export async function POST({ request }: RequestEvent) {
	const invitation = await request.json();
	try {
		const response = await fetch(`${API_HOST}appointment/addEventee`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: request.headers.get('Authorization') || ''
			},
			body: JSON.stringify(invitation)
		});
		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: data.statusCode
		});
	} catch (error: unknown) {
		console.log(error);
	}
}
