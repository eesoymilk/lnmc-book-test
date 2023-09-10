<div class="flex flex-col gap-6">
	<div class="font-light text-sm text-center text-neutral-500">
		<slot name="number" />
	</div>
	<div class="font-bold text-lg text-center whitespace-pre-wrap">
		<slot name="body" />
	</div>
	<div class="text-lg font-medium">
		<slot name="choices" />
	</div>
</div>
