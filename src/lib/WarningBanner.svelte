<script lang="ts">
	import type { Snippet } from 'svelte';

	let { warning } = $props<{
		warning?: Snippet;
	}>();
</script>

{#if warning}
	<div class="bg-yellow-100 border-yellow-500 border rounded-lg px-8 py-4 font-bold">
		⚠️ {@render warning()} ⚠️
	</div>
{/if}
