<script lang="ts">
	import Calendrier from '$lib/Calendrier.svelte';
	import { sHeaders } from '../lib/styles/headers.js';
	import Inscription from '../lib/Inscription.svelte';
	import Footer from './Footer.svelte';
	import Link from '$lib/Link.svelte';
</script>

<svelte:head>
	<title>Club de Gaming de L'Espace</title>
	<meta property="og:title" content="Club de Gaming de L'Espace" />
	<meta
		property="og:description"
		content="Site d'information pour Club de Gaming de L'Espace, à la bibliothèque de Dolbeau"
	/>
	<meta property="og:image" content="/favicon.png" />
</svelte:head>

<div class="flex flex-col items-center gap-4">
	<h1 class="text-center {sHeaders.h1()}">Club de Gaming de L'Espace</h1>

	<div
		class="flex-flex-col justify-center border-2 rounded-lg border-green-200 p-4 bg-white/90 w-full"
	>
		<h3 class="{sHeaders.h3()} p-4 text-center">Inscriptions</h3>
		<div class="flex flex-col w-full items-center gap-2">
			<Inscription lien="https://forms.gle/umPSqusmS3XmeMwy5">
				{#snippet title()}
					Sondage de direction pour le club
				{/snippet}
				{#snippet texte()}
					Ce sondage a pour but de récolter de l'information sur les participants. Inscrivez-vous
					ici pour recevoir des communications lorsque l'activité récurrente commencera.
				{/snippet}
			</Inscription>
			<Inscription
				dateLimite={new Date('2024-01-12 12:00:00')}
				lien="https://forms.gle/fsg7ZkeFXg64HwHs9"
			>
				{#snippet title()}
					Introduction à la réalité virtuelle
				{/snippet}
				{#snippet texte()}
					Cette activité vous permettra de vous familiariser avec la réalité virtuelle.
					Inscrivez-vous pour avoir une séance de 30 minutes et essayer différents jeux.
				{/snippet}
			</Inscription>
		</div>
	</div>
	<Calendrier />
	<div class="text-center flex flex-col items-center gap-2">
		<img class="inline-block" src="/map.png" width={64} height={64} alt="carte" />
		<div>
			Situé à la Bibliothère de Dolbeau, au
			<Link href="https://maps.app.goo.gl/K7TyigiHTsHwM2xd7">
				175 4e Av, Dolbeau-Mistassini, QC G8L 1W6
			</Link>
		</div>
		<img class="inline-block" src="/bibli.png" alt="carte" />
	</div>
	<Footer />
</div>
