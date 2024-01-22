import { error, json } from '@sveltejs/kit';
import { vote } from './vote';

export async function POST({ request }) {
	if (!request.body) {
		throw error(400, 'Missing body');
	}
	const { voteFor, choice } = await request.json();

	if (!voteFor || !choice) {
		throw error(412, 'Missing body params');
	}

	try {
		await vote(voteFor, choice);
		return json({ success: true });
	} catch (e) {
		if (e instanceof Error) {
			throw error(400, e.message);
		}
	}
}
