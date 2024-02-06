const UN_JOUR = 60 * 1000 * 60 * 24;
export const maintenant = new Date();

const dansTroisJours = new Date(maintenant.valueOf() - UN_JOUR * 3);
export function avantTroisJours(dateLimite: Date) {
	return dateLimite > dansTroisJours;
}

const leJourMeme = new Date(maintenant.valueOf() - UN_JOUR);
export function avantLeJourMeme(dateLimite: Date) {
	return dateLimite > leJourMeme;
}
