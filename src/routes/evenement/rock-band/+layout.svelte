<script>
	import Background from '$lib/Background.svelte';
</script>

<div class="container mx-auto relative p-4 sm:p-8">
	<div class="z-10 relative h-full">
		<slot />
	</div>

	<Background />
</div>
