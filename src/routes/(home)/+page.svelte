<script lang="ts">
	import Calendrier from '$lib/Calendrier.svelte';
	import { sHeaders } from '$lib/styles/headers.js';
	import Inscription from '$lib/Inscription.svelte';
	import Footer from './Footer.svelte';
	import Link from '$lib/Link.svelte';
	import { page } from '$app/stores';
	import type { ActionData } from './$types.js';
	import { URLs } from '$lib/urls.js';
	import Section from '$lib/Section.svelte';
	import CoolBanner from '$lib/CoolBanner.svelte';
	import { avantLeJourMeme } from '$lib/date.js';
	import Suggestion from '$lib/Suggestion.svelte';
	import FlagQcInline from '$lib/FlagQCInline.svelte';

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

	<CoolBanner>
		{#snippet text()}
			<p>🏃‍♂️ Tu es un <b>SPEEDRUNNER</b> de jeux? 🏃‍♂️</p>
			<p>Le club prévoit un marathon de Speedrun et récolte des noms de participants</p>
			<p>
				<Link href="https://forms.gle/RLWgXA1JdBZGmr8g9">Inscrivez-vous ici</Link>
			</p>
		{/snippet}
	</CoolBanner>

	{#if avantLeJourMeme(new Date('2024-06-09'))}
		<CoolBanner>
			{#snippet text()}
				<p>🎸 Avis aux amateurs de <b>ROCK BAND</b> et <b>GUITAR HERO</b> 🥁</p>
				<p>
					Le club organise <Link href="https://www.facebook.com/events/1127629601782697"
						>une journée Rock Band</Link
					> au <Link href="https://www.facebook.com/microbrasserielecoureurdesbois"
						>Coureur des Bois</Link
					> ce 8 juin 🤘
				</p>
				<p>
					<FlagQcInline /> PLUS DE 15 CHANSONS QUÉBÉCOISES DISPONIBLES ! <FlagQcInline />
				</p>
				<p>
					Vous êtes déjà sur les lieux? <Link href="/rockband">Cliquez ici</Link>
				</p>
				<p>Voir plus bas pour les détails</p>
			{/snippet}
		</CoolBanner>
	{/if}

	<Section>
		{#snippet title()}
			Information
		{/snippet}
		{#snippet children()}
			<p>
				Le Club de Gaming de L'Espace a pour but regrouper les gamers de Dolbeau-Mistassini autour
				d'activités de gaming. Il s'occupe:
			</p>
			<ul class="list-disc list-inside">
				<li>De chapeauter les activités libres, sur demande, en soir de semaine.</li>
				<li>
					D'organiser des activités (par exemple, l'atelier d'Introduction à la Réalité Virtuelle,
					ou les tournois).
				</li>
				<li>D'offrir de l'aide pour l'organisation d'activités reliées au Gaming</li>
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
			Journée Rock Band du 8 juin
		{/snippet}
		{#snippet children()}
			<p>
				Le 8 juin, en après-midi jusqu'en soirée, au deuxième étage de la <Link
					href="https://www.facebook.com/microbrasserielecoureurdesbois"
					>Microbrasserie le Coureur des bois
				</Link>, aura lieu une journée Rock Band avec les instruments suivants, pour un total de 7
				joueurs:
			</p>
			<ul class="list-disc list-inside">
				<li>🎸 2 guitares</li>
				<li>🥁 Un drum</li>
				<li>🎹 Un clavier "keytar"</li>
				<li>🎤 3 micros pour du Karaoké avec harmonies</li>
			</ul>
			<p>
				Pas de réservations, il suffit de venir sur place et prendre un instrument qui vous plaît.
			</p>
			<p>
				<FlagQcInline /> Il y aura une grande sélection de chansons connues, et notamment, plus de 15
				classiques Québécois créés pour le jeu par la communauté, incluant:
			</p>
			<ul class="list-disc list-inside">
				<li>Bobépine - Plume Latraverse</li>
				<li>Hawaïenne - Les Trois Accords</li>
				<li>Les Chats Sauvages - Marjo</li>
				<li>Le générique de Dans Une Galaxie Près de Chez Vous (vous avez bien lu !)</li>
			</ul>
			<p>Ouvert aux débutants et experts de toutes sortes !</p>
			<p>🎸🥁🎹🎤 Venez ROCKER en groupe ce 8 juin 🤘</p>
			<p>
				<Link href="https://www.facebook.com/events/1127629601782697"
					>Cliquez ici pour voir l'évenement</Link
				>
			</p>
		{/snippet}
		{#snippet image()}
			<img
				class="overflow-hidden rounded-lg"
				src="/Rock Band 3 Deluxe Cover.jpg"
				alt="Couverture de Rock Band 3"
			/>
		{/snippet}
	</Section>

	<Section>
		{#snippet title()}
			Soirée de Gaming (sur demande)
		{/snippet}
		{#snippet children()}
			<p>
				Il est possible d'utiliser les locaux de l'Espace en soir de semaine pour jouer à des jeux
				vidéos sur la télévision commune, ou à des jeux de société.
			</p>
			<p>
				Il suffit de demander dans la chaîne <a
					class="text-green-900 underline"
					href="https://discord.com/channels/1199055808223248384/1199058061214617722">#soirées</a
				> et nous trouverons un soir convenable, selon les disponibilités des organisateurs
			</p>
			<p>
				Une Steam Deck et une Nintendo Switch sont à la disposition, selon l'organisateur présent.
				Vous pouvez aussi amener votre matériel.
			</p>
			<p>Pour suggérer une activité en soirée, remplir la boîte suivante:</p>
			<Suggestion votedFor={form?.votedFor?.['suggestion'].toString()} />
		{/snippet}
	</Section>

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
			<Inscription lien="https://forms.gle/RLWgXA1JdBZGmr8g9">
				{#snippet title()}
					Speedrunners de la région
				{/snippet}
				{#snippet texte()}
					<p>Le club aimerait organiser un Marathon de Speedrunning à l'Espace.</p>
					<p>
						Pour déterminer si l'activité est possible, il nous faut assez de volontaires pour
						participer à l'événement.
					</p>
					<p>Voir le formulaire pour plus de détails</p>
				{/snippet}
			</Inscription>
		{/snippet}
	</Section>

	<Calendrier />

	<div class="text-center flex flex-col items-center gap-2">
		<img class="inline-block" src="/map.png" width={64} height={64} alt="carte" />
		<div>
			Situé à la Bibliothèque de Dolbeau, au
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
