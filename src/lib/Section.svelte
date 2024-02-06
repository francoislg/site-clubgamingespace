<script lang="ts">
	import type { Snippet } from 'svelte';
	import { sHeaders } from './styles/headers';

	let { children, title } = $props<{ children: Snippet; title: Snippet }>();
</script>

<div
	class="flex-flex-col justify-center border-2 rounded-lg border-green-200 p-4 bg-white/90 w-full"
>
	<h3 class="{sHeaders.h3()} p-4 text-center">
		{@render title()}
	</h3>
	<div class="flex flex-col w-full gap-2">
		{@render children()}
	</div>
</div>
