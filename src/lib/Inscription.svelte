<script lang="ts">
	import { sHeaders } from './styles/headers';
	import { sButton } from './styles/button';
	import type { Snippet } from 'svelte';
	import Icon from './Icon.svelte';

	let { lien, dateLimite, texte, title } = $props<{
		lien: string;
		dateLimite?: Date;
		texte: Snippet;
		title: Snippet;
	}>();

	const maintenant = new Date();
	const unJour = 60 * 1000 * 60 * 24;
	const plusTard = new Date(Date.now() + unJour * 3);

	let hidden = $state(true);

	function toggleHidden() {
		hidden = !hidden;
	}
</script>

{#if !dateLimite || dateLimite > plusTard}
	<div class="flex flex-col gap-2 bg-green-300/50 rounded-lg p-4 w-full">
		<h4 class={sHeaders.h4()}>- {@render title()}</h4>
		<button class="inline sm:hidden {sButton()}" on:click={toggleHidden}>
			{hidden ? 'Voir' : 'Cacher'} les détails</button
		>
		<div class:hidden class="sm:block">
			{@render texte()}
		</div>
		<div>
			{#if !dateLimite || dateLimite > maintenant}
				<a class={sButton()} href={lien} target="_blank">Inscription ici <Icon name="external" /></a
				>
			{:else}
				<div class="text-center">Inscription terminée</div>
			{/if}
		</div>
	</div>
{/if}
