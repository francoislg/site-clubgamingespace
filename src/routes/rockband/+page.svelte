<script lang="ts">
	import { enhance } from '$app/forms';
	import Section from '$lib/Section.svelte';
	import { sButton } from '$lib/styles/button';
	import { sCheckbox } from '$lib/styles/checkbox.js';
	import { sSectionContainer } from '$lib/styles/container.js';
	import { sHeaders } from '$lib/styles/headers';
	import { sInput } from '$lib/styles/input';
	import { fade } from 'svelte/transition';

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
				if (qc && quebec !== 'Oui') {
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

<div class="flex flex-col gap-2 sm:gap-8 h-full">
	<Section class="flex-0">
		{#snippet title()}
			Artiste ou Chanson:
		{/snippet}
		<label class="flex flex-wrap items-center gap-4">
			<input class="{sInput()} w-full" type="text" bind:value={filter} />
		</label>
		<div class="flex items-center justify-between flex-wrap gap-2">
			<label class="{sCheckbox()} flex-1 sm:whitespace-nowrap">
				Québécois?
				<input type="checkbox" bind:checked={qc} />
			</label>
			<button class="{sButton()} flex-1" disabled={!hasFilters} onclick={reset}>
				Remettre à 0
			</button>
		</div>
	</Section>

	<div class="flex flex-col flex-1 h-full gap-4 overflow-hidden relative {sSectionContainer()}">
		<h3 class="{sHeaders.h3()} text-center">Chansons ({toRender.length})</h3>
		<div class="flex-1 flex flex-col gap-1 relative overflow-y-auto" bind:this={scrollable}>
			{#each toRender as [artiste, chanson] (artiste + chanson)}
				{@const choixLabel = `${chanson} - ${artiste}`}
				<button
					class="{sButton()} w-full flex gap-2"
					class:bg-green-500={choix === choixLabel}
					onclick={() => (choix = choixLabel)}
				>
					<div class="font-bold">{artiste}</div>
					-
					<div>{chanson}</div>
				</button>
			{/each}
		</div>
		<button
			class="absolute bottom-8 right-12 size-2 rounded-full text-xs bg-green-700 p-4 flex items-center justify-center"
			onclick={scrollToTop}>⬆️</button
		>
	</div>

	<div class={sSectionContainer()}>
		{#if form}
			<div in:fade>Vous avez voté pour: {form?.choice}</div>
		{/if}
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
			<input class="hidden" name="voteFor" value="Rock Band" />
			<input class="hidden" name="choice" value={choix} />
			<label class="flex flex-wrap items-center gap-4" class:hidden={!!form}>
				Entrez votre nom:
				<input class="{sInput()} w-full sm:w-auto" name="name" bind:value={nom} />
			</label>

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
					🗳️ {choix}
				{/if}
			</button>
		</form>
	</div>
</div>
