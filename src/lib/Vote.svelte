<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import { sButton } from './styles/button';

	let { disabled, voteFor, choices, votedFor } = $props<{
		disabled?: boolean;
		voteFor: string;
		choices: string[];
		votedFor?: string;
	}>();
</script>

<div class="flex gap-2">
	{#if votedFor}
		<div in:fade>Vous avez voté pour: {votedFor}</div>
	{:else}
		{#each choices as choice}
			<form out:fade class="flex-1 text-center" method="POST" use:enhance>
				<input class="hidden" name="voteFor" value={voteFor} />
				<input class="hidden" name="choice" value={choice} />
				<button class="w-full h-full {sButton()}" {disabled} formaction="?/vote">
					🗳️ {choice}
				</button>
			</form>
		{/each}
	{/if}
</div>
