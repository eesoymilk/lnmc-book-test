<script lang="ts">
	import Icon from '@iconify/svelte';
	import lnmcLogo from '$lib/images/lnmc_logo.jpg';
	import { answers } from '../stores';
</script>

<header
	class="flex py-4 text-white items-center justify-between bg-sky-300 sm:flex-row flex-col md:px-12 px-4"
>
	<button
		on:click={() => answers.restart()}
		class="cursor-pointer flex items-center gap-2 group transition-all duration-300 hover:text-[#f0a613]"
	>
		<h1 class="flex items-center gap-2 text-2xl font-bold">
			<div
				class="h-10 overflow-hidden rounded-full border-4 transition-all duration-300 group-hover:border-[#f0a613]"
			>
				<img class="h-full" src={lnmcLogo} alt="lnmc" />
			</div>
			文新社 ‧ 書本心理測驗
		</h1>
	</button>
</header>
