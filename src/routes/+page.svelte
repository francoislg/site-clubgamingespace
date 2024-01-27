<script lang="ts">
	import Calendrier from '$lib/Calendrier.svelte';
	import { sHeaders } from '../lib/styles/headers.js';
	import Inscription from '../lib/Inscription.svelte';
	import Footer from './Footer.svelte';
	import Link from '$lib/Link.svelte';
	import { page } from '$app/stores';
	import WarningBanner from '$lib/WarningBanner.svelte';
	import Vote from '$lib/Vote.svelte';
	import type { ActionData } from './$types.js';
	import { URLs } from '$lib/urls.js';

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

	<WarningBanner>
		{#snippet warning()}
			L'activité de réalité virtuelle du 13 janvier a été reportée au 27 janvier dû à la tempête
		{/snippet}
	</WarningBanner>

	<div
		class="flex-flex-col justify-center border-2 rounded-lg border-green-200 p-4 bg-white/90 w-full"
	>
		<h3 class="{sHeaders.h3()} p-4 text-center">Information</h3>
		<div class="flex flex-col gap-2">
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
		</div>
	</div>

	<div
		class="flex-flex-col justify-center border-2 rounded-lg border-green-200 p-4 bg-white/90 w-full"
	>
		<h3 class="{sHeaders.h3()} p-4 text-center">Soirée de Gaming</h3>
		<div class="flex flex-col gap-2">
			<p>La prochaine soirée sera le <strong>jeudi 1 février</strong>, de 19h à 21h.</p>
			<p>L'activité sera: <u> Rocket League, en 1v1 ou 2v2</u> ⚽🏎️</p>
			<p>
				Il y aura une Steam Deck et une Nintendo Switch pour jouer en écran partagé. Vous pouvez
				amenez votre équipement.
			</p>
			<p class="text-sm">
				📅 À noter que l'activité aura lieu 1 semaine sur 2, le jeudi, de 19h à 21h.
			</p>
		</div>
	</div>

	<div
		class="flex-flex-col justify-center border-2 rounded-lg border-green-200 p-4 bg-white/90 w-full"
	>
		<h3 class="{sHeaders.h3()} p-4 text-center">Soirée de Gaming à venir</h3>
		<div class="flex flex-col gap-2">
			<p>Vous pouvez voter pour la prochaine activité du <strong>15 février</strong> ici</p>
			<Vote
				voteFor="15fev"
				choices={['Mario Kart 8', 'Super Smash Bros Ultimate Compétitif 1v1']}
				votedFor={form?.votedFor?.toString()}
			></Vote>
		</div>
	</div>

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
					Ce sondage a pour but de récolter de l'information sur les participants. C'est ici que
					vous pouvez suggérer des activités, et aussi pour recevoir des communications par le club.
				{/snippet}
			</Inscription>
			<Inscription
				dateLimite={new Date('2024-01-27 12:00:00')}
				lien="https://forms.gle/fsg7ZkeFXg64HwHs9"
			>
				{#snippet title()}
					Introduction à la réalité virtuelle
				{/snippet}
				{#snippet warning()}
					L'activité a été reportée au 27 janvier dû à la tempête
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
				<span class="whitespace-nowrap"> 175 4e Av, </span>
				<span class="whitespace-nowrap"> Dolbeau-Mistassini, </span>
				<span class="whitespace-nowrap"> QC G8L 1W6 </span>
			</Link>
		</div>
		<img class="inline-block" src="/bibli.png" alt="carte" />
	</div>
	<Footer />
</div>
