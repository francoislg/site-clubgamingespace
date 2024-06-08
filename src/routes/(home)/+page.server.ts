import { fail } from '@sveltejs/kit';
import { vote } from '../api/vote/vote.js';

export const actions = {
	vote: async ({ request }) => {
		const data = await request.formData();
		const voteFor = data.get('voteFor');
		const choice = data.get('choice');

		if (!voteFor || !choice) {
			return fail(412, {});
		}

		try {
			await vote(voteFor as string, choice as string);
		} catch (e) {
			return fail(400, {});
		}

		return { votedFor: { [voteFor as string]: choice } };
	}
};
