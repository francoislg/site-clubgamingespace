<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import { sButton } from './styles/button';
	import { sInput } from './styles/input';

	let { votedFor } = $props<{
		votedFor?: string;
	}>();

	let value = $state<string>();
</script>

<div class="flex gap-2">
	{#if votedFor}
		<div in:fade>Vous avez suggéré: {votedFor}</div>
	{:else}
		<form out:fade class="flex-1 flex flex-col text-center gap-2" method="POST" use:enhance>
			<input class="hidden" name="voteFor" value="suggestion" />
			<input class="w-full {sInput()}" type="text" name="choice" required bind:value />
			<button class="w-full {sButton()}" formaction="?/vote" disabled={!value}> 🗳️ Envoyer </button>
		</form>
	{/if}
</div>
