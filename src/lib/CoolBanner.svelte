<script lang="ts">
	import type { Snippet } from 'svelte';

	let { text } = $props<{
		text?: Snippet;
	}>();
</script>

{#if text}
	<div class="bg-green-100 border-green-300 border rounded-lg px-8 py-4 font-bold">
		🏆 {@render text()} 🏆
	</div>
{/if}
