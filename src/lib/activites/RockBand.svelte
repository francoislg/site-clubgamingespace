<script lang="ts">
	import FlagQcInline from '$lib/FlagQCInline.svelte';
	import Link from '$lib/Link.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section>
	{#snippet title()}
		Rock Band
	{/snippet}
	{#snippet children()}
		<p>
			Le club peut organiser des soirées Rock Band au deuxième étage de la <Link
				href="https://www.facebook.com/microbrasserielecoureurdesbois"
				>Microbrasserie le Coureur des bois
			</Link>, avec les instruments suivants, pour un total de 7 joueurs:
		</p>
		<ul class="list-disc list-inside">
			<li>🎸 2 guitares</li>
			<li>🥁 Un drum</li>
			<li>🎹 Un clavier "keytar"</li>
			<li>🎤 3 micros pour du Karaoké avec harmonies</li>
		</ul>
		<!-- <p>
			Pas de réservations, il suffit de venir sur place et prendre un instrument qui vous plaît.
		</p> -->
		<p>
			<FlagQcInline /> Il y aura une grande sélection de chansons connues, et notamment, plus de 20 classiques
			Québécois créés pour le jeu par la communauté, incluant:
		</p>
		<ul class="list-disc list-inside">
			<li>Bobépine - Plume Latraverse</li>
			<li>Hawaïenne - Les Trois Accords</li>
			<li>Les Chats Sauvages - Marjo</li>
			<li>Le pyromane - Karkwa</li>
			<li>Assis sur mon Tracteur - François Pérusse</li>
			<li>Le générique de Dans Une Galaxie Près de Chez Vous (vous avez bien lu !)</li>
		</ul>
		<!-- <p>Ouvert aux débutants et experts de toutes sortes !</p> -->
		<!-- <p>🎸🥁🎹🎤 Venez ROCKER en groupe ce 14 mars 🤘</p> -->
		<p>
			<Link href="/rockband">Cliquez ici pour voir la liste de chansons</Link>
		</p>
	{/snippet}
	{#snippet image()}
		<img
			class="overflow-hidden rounded-lg"
			src="/Rock Band 3 Deluxe Cover.jpg"
			alt="Couverture de Rock Band 3"
		/>
	{/snippet}
</Section>
