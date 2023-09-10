<script lang="ts">
	export let imageUrl: string;
	export let imageAlt: string;
</script>

<div class="flex flex-col gap-6">
	<div class="flex flex-col text-center gap-4">
		<div class="text-lg text-neutral-500">測驗結果</div>
		<div class="font-bold text-2xl"><slot name="title" /></div>
	</div>
	<div class="rounded-lg overflow-hidden">
		<picture>
			<img src={imageUrl} alt={imageAlt} />
		</picture>
	</div>
	<div class="p-2">
		<slot name="actions" />
	</div>
</div>
