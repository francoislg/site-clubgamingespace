<script lang="ts">
	import { sButton } from '$lib/styles/button';
	import Icon from './Icon.svelte';
	let open = $state(false);

	function toggle() {
		open = !open;
	}
</script>

<div class="flex gap-4 justify-center">
	<button class={sButton()} on:click={toggle}>
		{open ? 'Fermer' : 'Ouvrir'} le calendrier complet
	</button>

	<a
		class={sButton()}
		target="_blank"
		href="https://calendar.google.com/calendar/u/0?cid=ZjY3NGJlOWRiODc4YmE1NTBjNzJkZWRiYTk5NThmMjExNjU1ZDNiY2FiZmIwMDg0NGMxYTg5ZDViMjZiMWRjYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
	>
		Ajouter notre calendrier au vôtre
		<Icon name="external" />
	</a>
</div>

<div class="w-full max-h-[600px] transition-[max-height] overflow-hidden" class:!max-h-0={!open}>
	<iframe
		title="Calendrier des évènements"
		src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTz=0&showCalendars=0&showTabs=1&showPrint=0&mode=AGENDA&showTitle=1&title&src=ZjY3NGJlOWRiODc4YmE1NTBjNzJkZWRiYTk5NThmMjExNjU1ZDNiY2FiZmIwMDg0NGMxYTg5ZDViMjZiMWRjYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239E69AF"
		style="border-width:0; width:100%"
		class="w-full"
		width="100%"
		height="600"
		frameborder="0"
		scrolling="no"
	></iframe>
</div>
