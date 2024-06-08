import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function vote(voteFor: string, choice: string, name?: string) {
	const serviceAccountAuth = new JWT({
		email: import.meta.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL || '',
		key: import.meta.env.VITE_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') || '',
		scopes: ['https://www.googleapis.com/auth/spreadsheets']
	});
	const doc = new GoogleSpreadsheet(
		'1mSPBBM9i5mhFJy4cuC0rxIcEDrMZ31y5tCfFNd4uxuw',
		serviceAccountAuth
	);
	await doc.loadInfo();

	const sheet = doc.sheetsByTitle[voteFor];
	if (!sheet) {
		throw new Error(`Aucun vote pour ${voteFor}`);
	}

	await sheet.addRow([new Date(), choice, name || '']);

	return true;
}
