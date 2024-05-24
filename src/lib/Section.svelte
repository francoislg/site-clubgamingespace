<script lang="ts">
	import type { Snippet } from 'svelte';
	import { sHeaders } from './styles/headers';

	let { children, image, title } = $props<{ children: Snippet; image?: Snippet; title: Snippet }>();
</script>

<div
	class="flex flex-col justify-center border-2 rounded-lg border-green-200 p-4 bg-white/90 w-full"
>
	<h3 class="{sHeaders.h3()} p-4 text-center">
		{@render title()}
	</h3>
	<div class="flex w-full justify-between gap-8 flex-wrap sm:flex-nowrap">
		<div class="flex flex-col gap-2">
			{@render children()}
		</div>
		{#if image}
			<div class="flex justify-center items-center shrink-0 w-full sm:w-auto">
				{@render image()}
			</div>
		{/if}
	</div>
</div>
