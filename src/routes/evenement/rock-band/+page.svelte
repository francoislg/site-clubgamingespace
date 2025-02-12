<script>
	import { page } from '$app/stores';
	import RockBand from '$lib/activites/RockBand.svelte';
</script>

<svelte:head>
	<title>Rock Band au Coureur des Bois</title>
	<meta property="og:title" content="Rock Band au Coureur des Bois" />
	<meta
		property="og:description"
		content="Information sur l'activité Rock Band au Coureur des Bois, organisé par le Club de Gaming de L'Espace"
	/>
	<meta property="og:image" content="{$page.url.origin}/banniere.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<div class="flex flex-col gap-2 sm:gap-8">
	<RockBand />
</div>
