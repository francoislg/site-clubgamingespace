<script lang="ts">
	import { sHeaders } from './styles/headers';
	import { sButton } from './styles/button';
	import type { Snippet } from 'svelte';
	import Link from './Link.svelte';
	import { maintenant } from './date';

	let { lien, dateLimite, texte, title, warning } = $props<{
		lien: string;
		dateLimite?: Date;
		texte: Snippet;
		title: Snippet;
		warning?: Snippet;
	}>();

	let hidden = $state(true);

	function toggleHidden() {
		hidden = !hidden;
	}

	function formatDate(date: Date) {
		const mois = [
			'janvier',
			'février',
			'mars',
			'avril',
			'mai',
			'juin',
			'juillet',
			'août',
			'septembre',
			'octobre',
			'novembre',
			'décembre'
		];
		return `${date.getDate()} ${mois[date.getMonth()]}`;
	}

	let shouldDisplay = $derived(!dateLimite || avantTroisJours(dateLimite));

	function avantTroisJours(dateLimite: Date): any {
		throw new Error('Function not implemented.');
	}
</script>

{#if shouldDisplay}
	<div class="flex flex-col gap-2 bg-green-100 rounded-lg p-4 w-full">
		<div class="flex justify-between">
			<h4 class={sHeaders.h4()}>{@render title()}</h4>
			{#if dateLimite}
				<div class="hidden sm:block">Limite: {formatDate(dateLimite)}</div>
			{/if}
		</div>
		{#if warning}
			<div class="text-center font-bold">⚠️ {@render warning()} ⚠️</div>
		{/if}
		<button class="inline sm:hidden {sButton()}" on:click={toggleHidden}>
			{hidden ? 'Voir' : 'Cacher'} les détails</button
		>
		<div class:hidden class="sm:block flex flex-col">
			{#if dateLimite}
				<div class="inline sm:hidden">Limite: {formatDate(dateLimite)}</div>
			{/if}
			<div>
				{@render texte()}
			</div>
		</div>
		<div class="text-center">
			{#if !dateLimite || maintenant < dateLimite}
				<Link href={lien}>Inscription ici</Link>
			{:else}
				<div class="text-center">Inscription terminée</div>
			{/if}
		</div>
	</div>
{/if}
