<script>
	import Background from '$lib/Background.svelte';
	import '../app.css';
</script>

<div class="overflow-hidden bg-gradient-to-b from-green-100 to-green-200">
	<div class="container mx-auto relative p-4 sm:p-8 min-h-screen">
		<Background />

		<div class="z-10">
			<slot />
		</div>
	</div>
</div>
