<script lang="ts">
	import Link from '$lib/Link.svelte';
	import { screenThreshold } from '$lib/actions/screenThreshold';

	let met = $state(false);

	function setMetOnce(value: boolean) {
		if (value && !met) {
			met = true;
		}
	}
</script>

<div class="flex flex-col gap-4" use:screenThreshold={{ setIsBelow: setMetOnce, ratio: 0.8 }}>
	<img
		class="h-auto opacity-0 transition-opacity duration-1000"
		class:opacity-100={met}
		src="/espace.png"
		alt="logo espace"
	/>

	<div class="h-auto opacity-0 transition-opacity duration-1000 delay-500" class:opacity-100={met}>
		<Link href="mailto:clubgamingespace@gmail.com" icon="email">Nous contacter par courriel</Link>
	</div>
</div>
