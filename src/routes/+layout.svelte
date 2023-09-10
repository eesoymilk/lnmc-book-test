<script lang="ts">
	import './styles.css';
	import Header from './Header.svelte';
	import fishes from '$lib/images/fishes.png';
</script>

<div class="overflow-hidden bg-neutral-100 min-h-screen flex flex-col">
	<Header />
	<main
		class="grow py-4 px-2 shrink basis-auto min-h-0 flex max-w-lg flex-col items-center justify-start mx-auto"
	>
		<slot />
	</main>
	<footer class="mt-auto flex items-center justify-center">
		<img class="max-w-lg" src={fishes} alt="lnmc" />
	</footer>
</div>
