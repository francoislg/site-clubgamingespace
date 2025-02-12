<script lang="ts">
	import FlagQcInline from '$lib/FlagQCInline.svelte';
	import Link from '$lib/Link.svelte';
	import Section from '$lib/Section.svelte';
</script>

<Section>
	{#snippet title()}
		Journée Rock Band du 14 mars
	{/snippet}
	{#snippet children()}
		<p>
			Le 14 mars, de 3h à 11h, au deuxième étage de la <Link
				href="https://www.facebook.com/microbrasserielecoureurdesbois"
				>Microbrasserie le Coureur des bois
			</Link>, aura lieu une journée Rock Band avec les instruments suivants, pour un total de 7
			joueurs:
		</p>
		<ul class="list-disc list-inside">
			<li>🎸 2 guitares</li>
			<li>🥁 Un drum</li>
			<li>🎹 Un clavier "keytar"</li>
			<li>🎤 3 micros pour du Karaoké avec harmonies</li>
		</ul>
		<p>
			Pas de réservations, il suffit de venir sur place et prendre un instrument qui vous plaît.
		</p>
		<p>
			<FlagQcInline /> Il y aura une grande sélection de chansons connues, et notamment, plus de 20 classiques
			Québécois créés pour le jeu par la communauté, incluant:
		</p>
		<ul class="list-disc list-inside">
			<li>Bobépine - Plume Latraverse</li>
			<li>Hawaïenne - Les Trois Accords</li>
			<li>Les Chats Sauvages - Marjo</li>
			<li>Le pyromane - Karkwa</li>
			<li>Le générique de Dans Une Galaxie Près de Chez Vous (vous avez bien lu !)</li>
		</ul>
		<p>Ouvert aux débutants et experts de toutes sortes !</p>
		<p>🎸🥁🎹🎤 Venez ROCKER en groupe ce 14 mars 🤘</p>
		<p>
			Évenement Facebook à venir.
			<!-- <Link href="https://www.facebook.com/events/1127629601782697"
                >Cliquez ici pour voir l'évenement</Link
            > -->
		</p>
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
