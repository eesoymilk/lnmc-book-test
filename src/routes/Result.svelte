<script lang="ts">
	export let imageUrl: string;
	export let imageAlt: string;
</script>

<div class="text-center font-bold text-2xl"><slot name="title" /></div>
<div class="rounded-lg overflow-hidden">
	<picture>
		<img src={imageUrl} alt={imageAlt} />
	</picture>
</div>
