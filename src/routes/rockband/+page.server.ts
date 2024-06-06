export async function load({ fetch }) {
	const data = await fetch('/tounes.tsv');
	const text = await data.text();

	const [_header, ...rows] = text.split('\n').map((row) => row.split('\t'));

	return {
		tounes: rows
	};
}
