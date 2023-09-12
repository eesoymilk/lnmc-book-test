<script lang="ts">
	import fishes from '$lib/images/fishes.png';
	import Icon from '@iconify/svelte';

	interface NavItem {
		name?: string;
		icon?: { icon: string; class?: string };
		url: string;
	}

	const navItems: NavItem[] = [
		{
			url: 'https://www.facebook.com/profile.php?id=100082972873193',
			icon: {
				icon: 'mdi:facebook',
				class: 'text-blue-300 hover:text-blue-500 transition-all',
			},
		},
		{
			url: 'https://www.instagram.com/nthu_lnmc/',
			icon: {
				icon: 'mdi:instagram',
				class: 'text-red-300 hover:text-red-500 transition-all',
			},
		},
	];
</script>

<footer class="m-auto max-w-lg flex flex-col items-center justify-center pb-4">
	<img src={fishes} alt="lnmc" />
	<nav class="w-full">
		<ul
			class="text-xl h-full font-semibold justify-around flex items-center gap-2"
		>
			{#each navItems as navItem}
				<li class="flex items-center">
					<a href={navItem.url} target="_blank">
						{#if navItem.icon}
							<Icon {...navItem.icon} height="48px" />
						{/if}
						{#if navItem.name}
							{navItem.name}
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</footer>
