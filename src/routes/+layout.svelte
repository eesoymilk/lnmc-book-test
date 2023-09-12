<script lang="ts">
	import './styles.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="overflow-hidden bg-neutral-100 min-h-screen flex flex-col">
	<Header />
	<main
		class="grow py-4 px-2 shrink basis-auto min-h-0 flex max-w-lg flex-col items-center justify-start mx-auto gap-6"
	>
		<slot />
	</main>
	<Footer />
</div>
