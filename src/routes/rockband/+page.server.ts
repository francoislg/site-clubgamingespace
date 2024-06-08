import { fail } from '@sveltejs/kit';
import { vote } from '../api/vote/vote.js';

export async function load({ fetch }) {
	const data = await fetch('/tounes.tsv');
	const text = await data.text();

	const [_header, ...rows] = text.split('\n').map((row) => row.split('\t'));

	return {
		tounes: rows
	};
}

export const actions = {
	vote: async ({ request }) => {
		const data = await request.formData();
		const voteFor = 'Rock Band';
		const choice = data.get('choice');
		const name = data.get('name');

		if (!voteFor || !choice || !name) {
			return fail(412, {});
		}

		try {
			await vote(voteFor as string, choice as string, name as string);
		} catch (e) {
			return fail(400, {});
		}

		return { choice, name };
	}
};
