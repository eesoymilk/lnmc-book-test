{#if $$slots.hint}
	<div class="font-light text-sm text-center text-neutral-500">
		<slot name="hint" />
	</div>
{/if}
<slot />
{#if $$slots.actions}
	<div class="p-2 w-full">
		<slot name="actions" />
	</div>
{/if}
