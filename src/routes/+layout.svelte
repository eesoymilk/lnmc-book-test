<script lang="ts">
	import './styles.css';
	import Header from './Header.svelte';
	import lnmc from '$lib/images/lnmc.jpg';
</script>

<div class="app bg-sky-100 min-h-screen flex flex-col">
	<Header />
	<main
		class="grow py-4 shrink basis-auto min-h-0 flex flex-col items-center justify-start w-96 mx-auto"
	>
		<slot />
	</main>
	<footer class="mt-auto">
		<img class="mx-auto max-w-sm" src={lnmc} alt="lnmc" />
	</footer>
</div>
