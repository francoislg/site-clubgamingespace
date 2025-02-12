<script lang="ts">
	import { enhance } from '$app/forms';
	import { exactementLeJour } from '$lib/date.js';
	import Section from '$lib/Section.svelte';
	import { sButton } from '$lib/styles/button';
	import { sCheckbox } from '$lib/styles/checkbox.js';
	import { sSectionContainer } from '$lib/styles/container.js';
	import { sHeaders } from '$lib/styles/headers';
	import { sInput } from '$lib/styles/input';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	const { data, form } = $props();

	let filter = $state('');
	let lowerFilter = $derived(filter.toLocaleLowerCase());
	let qc = $state(false);
	let hasFilters = $derived(!!qc || !!filter);

	function reset() {
		filter = '';
		qc = false;
	}

	let toRender = $derived(
		data.tounes
			.filter(([titre, artiste, quebec]) => {
				if (!titre) return false;
				if (qc && quebec !== 'Oui' && quebec !== 'Nouvelle') {
					return false;
				}
				if (
					!!lowerFilter &&
					!titre.toLocaleLowerCase().includes(lowerFilter) &&
					!artiste.toLocaleLowerCase().includes(lowerFilter)
				) {
					return false;
				}

				return true;
			})
			.sort(([aTitre, aArtiste], [bTitre, bArtiste]) => {
				if (aArtiste === bArtiste) return aTitre < bTitre ? -1 : 1;
				return aArtiste < bArtiste ? -1 : 1;
			})
	);

	let choix = $state('');
	let nom = $state(form?.name || '');
	let formLoading = $state(false);

	let scrollable: HTMLElement;
	function scrollToTop() {
		scrollable.scrollTo({ top: 0 });
	}
</script>

<svelte:head>
	<title>Liste de chansons pour Rock Band</title>
	<meta property="og:title" content="Liste de chansons pour Rock Band" />
	<meta
		property="og:description"
		content="Liste de chansons pour l'activité Rock Band au Coureur des Bois, organisé par le Club de Gaming de L'Espace"
	/>
	<meta property="og:image" content="{$page.url.origin}/banniere.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<div class="flex flex-col gap-2 sm:gap-8 h-full">
	<Section class="flex-0">
		{#snippet title()}
			Artiste ou Chanson:
		{/snippet}
		<label class="flex flex-wrap items-center gap-4">
			<input class="{sInput()} w-full" type="text" bind:value={filter} placeholder="Chercher" />
		</label>
		<div class="flex items-center justify-between flex-wrap gap-2">
			<label class="{sCheckbox()} flex-1 sm:whitespace-nowrap">
				Québécois?
				<input type="checkbox" bind:checked={qc} />
			</label>
			<button class="{sButton()} flex-1" disabled={!hasFilters} onclick={reset}> Effacer </button>
		</div>
	</Section>

	<div class="flex flex-col flex-1 h-full gap-4 overflow-hidden relative {sSectionContainer()}">
		<h3 class="{sHeaders.h3()} text-center">Chansons ({toRender.length})</h3>
		<div class="flex-1 flex flex-col gap-1 relative overflow-y-auto" bind:this={scrollable}>
			{#each toRender as [chanson, artiste, quebec] (artiste + chanson)}
				{@const choixLabel = `${chanson} (${artiste})`}
				<button
					class="{sButton()} w-full flex justify-between gap-2"
					class:bg-green-400={choix === choixLabel}
					onclick={() => (choix = choixLabel)}
				>
					<div class="font-bold text-left flex gap-1">
						<div>
							{chanson}
						</div>
						{#if quebec === 'Nouvelle'}
							<div class="text-green-900/80 text-sm">(nouvelle !)</div>
						{/if}
					</div>
					<div class="text-left text-sm">{artiste}</div>
				</button>
			{/each}
		</div>
		<button
			class="absolute bottom-8 right-12 size-2 rounded-full bg-green-900 text-white p-4 flex items-center justify-center"
			onclick={scrollToTop}>⬆</button
		>
	</div>

	{#if exactementLeJour(new Date('2025-03-14 00:00:00'))}
		<div class={sSectionContainer()}>
			<form
				class="flex-1 text-center flex flex-col gap-2"
				method="POST"
				use:enhance={() => {
					formLoading = true;
					return async ({ update }) => {
						formLoading = false;
						choix = '';
						update({ reset: false });
					};
				}}
			>
				{#if form}
					<div in:fade>Vous avez voté pour: {form?.choice}</div>
				{/if}
				<input class="hidden" name="voteFor" value="Rock Band" />
				<input class="hidden" name="choice" value={choix} />
				<input
					class="{sInput()} w-full sm:w-auto"
					class:hidden={!!form}
					name="name"
					bind:value={nom}
					placeholder="Entrez votre nom"
				/>

				<button
					class="w-full h-full {sButton()}"
					disabled={formLoading || !choix || !nom}
					formaction="?/vote"
				>
					{#if formLoading}
						🗳️ Envoi en cours...
					{:else if !choix}
						🗳️ Aucune chanson choisie
					{:else}
						<span class="truncate">🗳️ {choix}</span>
					{/if}
				</button>
			</form>
		</div>
	{/if}
</div>
