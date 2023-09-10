<script lang="ts">
	import Icon from '@iconify/svelte';
	import lnmcLogo from '$lib/images/lnmc_logo.jpg';

	interface NavItem {
		name?: string;
		icon?: { icon: string; class?: string };
		url: string;
	}

	const navItems: NavItem[] = [
		{
			url: 'https://www.facebook.com/profile.php?id=100082972873193',
			icon: { icon: 'mdi:facebook', class: 'text-blue-500 hover:text-blue-700 transition-all' }
		},
		{
			url: 'https://www.instagram.com/nthu_lnmc/',
			icon: { icon: 'mdi:instagram', class: 'text-red-500 hover:text-red-700 transition-all' }
		}
	];
</script>

<header class="flex p-4 text-white items-center justify-between bg-sky-300 sm:flex-row flex-col">
	<div class="flex items-center gap-2">
		<a href="https://www.facebook.com/profile.php?id=100085577854427" target="_blank" class="group">
			<h1
				class="flex items-center gap-2 text-2xl transition-all duration-300 font-extrabold group-hover:text-orange-300"
			>
				<div
					class="h-10 overflow-hidden rounded-full border-4 transition-all duration-300 group-hover:border-orange-300"
				>
					<img class="h-full" src={lnmcLogo} alt="lnmc" />
				</div>
				文新社
			</h1>
		</a>
		<span class="text-xl font-extrabold"> ‧ 書本心理測驗 </span>
	</div>

	<nav>
		<ul class="text-xl h-full font-semibold flex items-center gap-2">
			{#each navItems as navItem}
				<li class="flex items-center">
					<a href="/" target="_blank">
						{#if navItem.icon}
							<Icon {...navItem.icon} height="32px" />
						{/if}
						{#if navItem.name}
							{navItem.name}
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
