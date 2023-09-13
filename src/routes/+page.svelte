<script lang="ts">
	import Button from './Button.svelte';
	import Question from './Question.svelte';
	import ChoiceButton from './ChoiceButton.svelte';
	import BookTestView from './BookTestView.svelte';
	import Actions from './Actions.svelte';

	import fishes from '$lib/images/fishes.webp';
	import { bookTestData } from '../bookTestData';
	import { answers, currentQuestion, result } from '../stores';
	import { fade } from 'svelte/transition';

	const booksBaseUrl = 'https://www.books.com.tw';
	const metaTitle = '文新社 ‧ 書本心理測驗';
	const metaDescription =
		'回答幾個簡單的情境題，來測驗一下自己適合讀哪一本書吧！';
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaDescription} />
	<meta property="og:title" content={metaTitle} />
	<meta property="og:image" content={fishes} />
	<meta property="og:image:alt" content="文新社封面" />
	<meta property="og:description" content={metaDescription} />
</svelte:head>

{#if !$answers}
	<div class="m-auto">
		<Actions>
			<Button on:click={() => answers.start()}>
				<span class="text-4xl font-medium p-2"> 開始測驗 </span>
			</Button>
		</Actions>
	</div>
{:else if $currentQuestion}
	<BookTestView>
		<span slot="hint">
			<span>
				{$answers.length + 1}
			</span>
			/ {bookTestData.questions.length}
		</span>
		<Question>
			<span slot="body">
				{$currentQuestion.body}
			</span>
			<div class="flex flex-col gap-2" slot="choices">
				{#each $currentQuestion.choices as choice, i}
					<ChoiceButton on:click={() => answers.answer(i)}>
						{choice.body}
					</ChoiceButton>
				{/each}
			</div>
		</Question>
	</BookTestView>
{:else if $result}
	<BookTestView>
		<div slot="hint" class="text-xl">根據你的選擇推測......</div>
		<div class="text-center flex flex-col gap-4">
			<div class="flex items-end justify-center flex-wrap">
				<div>你可能會喜歡</div>
				<div class="text-xl px-2 font-bold text-[#084884]">
					{$result.authur}
				</div>
				<div>的</div>
				<div class="flex items-end text-3xl font-bold text-[#084884]">
					《{$result.title}》
				</div>
			</div>
			<div>{$result.description}</div>
		</div>
		<div class="rounded-lg overflow-hidden">
			<picture>
				<img
					src={`${booksBaseUrl}/${$result.imagePath}`}
					alt={`${$result.title}封面`}
				/>
			</picture>
		</div>
		<div
			class="whitespace-pre-wrap text-center italic text-neutral-500 text-sm"
		>
			{$result.introduction}
		</div>
		<Actions slot="actions">
			<Button on:click={() => answers.restart()}>重新測驗</Button>
			<a href={`${booksBaseUrl}/products/${$result.id}`} target="_blank">
				<Button>博客來連結</Button>
			</a>
		</Actions>
	</BookTestView>
{:else}
	<div>error</div>
{/if}
