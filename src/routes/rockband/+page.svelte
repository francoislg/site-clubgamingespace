<script lang="ts">
	import Section from '$lib/Section.svelte';
	import { sButton } from '$lib/styles/button';
	import { sCheckbox } from '$lib/styles/checkbox.js';
	import { sInput } from '$lib/styles/input';

	const { data } = $props();

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
</script>

<div class="flex flex-col gap-8">
	<Section>
		{#snippet title()}
			Filtres
		{/snippet}
		<label class="flex flex-wrap items-center gap-4">
			Trouver un artiste ou une chanson?
			<input class="{sInput()} w-full sm:w-auto" type="text" bind:value={filter} />
		</label>
        <div class="flex items-center justify-between flex-wrap gap-2">
            <label class="{sCheckbox()} flex-1 sm:whitespace-nowrap">
                Seulement les chansons Québécoises?
                <input type="checkbox" bind:checked={qc} />
            </label>
            <button class="{sButton()} flex-1" disabled={!hasFilters} onclick={reset}>Remettre à 0</button>
        </div>
	</Section>

	<Section>
        {#snippet title()}
			Chansons
		{/snippet}
		{#each toRender as [artiste, chanson] (artiste + chanson)}
			<div class="flex gap-2">
				<div class="font-bold">{artiste}</div>
				-
				<div>{chanson}</div>
			</div>
		{/each}
	</Section>
    
    <button class="fixed bottom-4 right-4 size-4 rounded-full bg-green-700 p-4 flex items-center justify-center" onclick={() => window.scrollTo({top: 0})}>⬆️</button>
</div>
