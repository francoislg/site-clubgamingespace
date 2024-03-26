<script lang="ts">
	import Calendrier from '$lib/Calendrier.svelte';
	import { sHeaders } from '../lib/styles/headers.js';
	import Inscription from '../lib/Inscription.svelte';
	import Footer from './Footer.svelte';
	import Link from '$lib/Link.svelte';
	import { page } from '$app/stores';
	import Vote from '$lib/Vote.svelte';
	import type { ActionData } from './$types.js';
	import { URLs } from '$lib/urls.js';
	import Section from '$lib/Section.svelte';
	import WarningBanner from '$lib/WarningBanner.svelte';
	import { avantLeJourMeme } from '$lib/date.js';
	import Suggestion from '$lib/Suggestion.svelte';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Club de Gaming de L'Espace</title>
	<meta property="og:title" content="Site du Club de Gaming de L'Espace" />
	<meta
		property="og:description"
		content="Site d'information pour Club de Gaming de L'Espace, à la bibliothèque de Dolbeau"
	/>
	<meta property="og:image" content="{$page.url.origin}/banniere.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<div class="flex flex-col items-center gap-4">
	<h1 class="text-center {sHeaders.h1()}">Club de Gaming de L'Espace</h1>

	<!-- <WarningBanner>
		{#snippet warning()}
			{#if avantLeJourMeme(new Date('2024-02-29 00:00:00'))}
				L'activité du 29 février aura lieu exceptionnellement le *27 février*. Aussi, il n'y aura
				pas de soirée le 14 mars.
			{:else}
				Il n'y aura exceptionnellement pas de soirée le 14 mars.
			{/if}
		{/snippet}
	</WarningBanner> -->

	<Section>
		{#snippet title()}
			Information
		{/snippet}
		{#snippet children()}
			<p>
				Le Club de Gaming de L'Espace a pour but regrouper les gamers de Dolbeau-Mistassini autour
				d'activités de gaming. Il organisera:
			</p>
			<ul class="list-disc list-inside">
				<li>
					Des soirées récurrentes «portes ouvertes» dont l'activité changera de semaine en semaine.
				</li>
				<li>
					Des activités spéciales qui demanderont une inscription (comme l'atelier d'Introduction à
					la Réalité Virtuelle), à l'occasion.
				</li>
			</ul>
			<p>
				Le club est ouvert aux 13 ans et plus. Suivez le <a class="underline" href="#calendrier"
					>calendrier</a
				> pour voir ce qui vous intéresse.
			</p>
			<p>
				Si vous avez des idées ou voulez organiser une activité à ajouter au calendrier, vous pouvez <Link
					href="mailto:clubgamingespace@gmail.com"
					icon="email">contacter le club ici</Link
				>.
			</p>
			<p>
				<a class="text-green-900" href={URLs.discord()}>
					<i class="fa-discord fa-brands fa-2xl"></i>
				</a>
				Rejoignez aussi le
				<a class="underline" href={URLs.discord()}>serveur Discord</a>
				pour discuter des prochaines activités, ou juste jouer en groupe.
			</p>
		{/snippet}
	</Section>

	<Section>
		{#snippet title()}
			Soirée de Gaming
		{/snippet}
		{#snippet children()}
			<p>La prochaine soirée sera le <strong>jeudi 4 avril</strong>, de 18h30 à 21h.</p>
			<p>Vous pouvez suggérer une activité, ou venir sur place pour décider</p>
			<p>
				Dans tous les cas, il y aura une Steam Deck et une Nintendo Switch. Vous pouvez amener votre
				équipement
			</p>
			<p class="text-sm">
				📅 À noter que l'activité aura lieu 1 semaine sur 2, le jeudi, de 18h30 à 21h.
			</p>
			<Suggestion votedFor={form?.votedFor?.['suggestion'].toString()} />
		{/snippet}
	</Section>
	<!-- 
	<Section>
		{#snippet title()}
			Soirée de Gaming à venir
		{/snippet}
		{#snippet children()}
			<p>Vous pouvez suggérer une activité pour la prochaine activité</p>
			<Suggestion votedFor={form?.votedFor?.['suggestion'].toString()} />
		{/snippet}
	</Section> -->

	<Section>
		{#snippet title()}
			Inscriptions
		{/snippet}
		{#snippet children()}
			<Inscription lien="https://forms.gle/umPSqusmS3XmeMwy5">
				{#snippet title()}
					Sondage de direction pour le club
				{/snippet}
				{#snippet texte()}
					Ce sondage a pour but de récolter de l'information sur les participants. C'est ici que
					vous pouvez suggérer des activités, et aussi pour recevoir des communications par le club.
				{/snippet}
			</Inscription>
		{/snippet}
	</Section>

	<Calendrier />

	<div class="text-center flex flex-col items-center gap-2">
		<img class="inline-block" src="/map.png" width={64} height={64} alt="carte" />
		<div>
			Situé à la Bibliothère de Dolbeau, au
			<Link href="https://maps.app.goo.gl/K7TyigiHTsHwM2xd7">
				<span class="whitespace-nowrap"> 175 4e Av, </span>
				<span class="whitespace-nowrap"> Dolbeau-Mistassini, </span>
				<span class="whitespace-nowrap"> QC G8L 1W6 </span>
			</Link>
		</div>
		<img class="inline-block" src="/bibli.png" alt="carte" />
	</div>
	<Footer />
</div>
