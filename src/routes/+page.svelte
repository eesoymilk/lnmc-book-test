<script lang="ts">
	import { bookTestData } from '../bookTestData';
	import { answers, currentQuestion, result } from '../stores';
	import Button from './Button.svelte';
	import Question from './Question.svelte';
	import ChoiceButton from './ChoiceButton.svelte';
	import Result from './Result.svelte';
	import BookTestView from './BookTestView.svelte';
	import Actions from './Actions.svelte';

	const booksBaseUrl = 'https://www.books.com.tw';

	// $: currentQuestion = bookTestData.questions.at($answers.length);
	// $: if ($answers.length >= bookTestData.questions.length) {
	// 	const resultBookIds = bookTestData.questions.reduce(
	// 		(bookIds, question, i) =>
	// 			bookIds.filter((el) => question.choices[$answers[i]].bookIds.includes(el)),
	// 		bookTestData.books.map((el) => el.id)
	// 	);

	// 	console.log(resultBookIds);

	// 	if (resultBookIds.length > 1) {
	// 		console.error('more than one book');
	// 	} else if (resultBookIds.length === 0) {
	// 		console.error('no result');
	// 	} else {
	// 		result.set(bookTestData.books.find((el) => el.id === resultBookIds[0]));
	// 	}
	// }

	// const answer = (choiceIndex: number) => answers.update((prev) => [...prev, choiceIndex]);
	// const restart = () => {
	// 	answers.set([]);
	// 	result.set(undefined);
	// };
</script>

<svelte:head>
	<title>文新社 | 書本心理測驗</title>
	<meta name="description" content="文新社 | 書本心理測驗" />
</svelte:head>

{#if !$answers}
	<BookTestView>
		<div class="m-auto">
			<Actions>
				<Button on:click={() => answers.start()}>
					<span class="text-4xl font-medium p-2"> 開始測驗 </span>
				</Button>
			</Actions>
		</div>
	</BookTestView>
{:else if $currentQuestion}
	<BookTestView>
		<span slot="hint">
			{$answers.length + 1} / {bookTestData.questions.length}
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
		<div slot="hint" class="text-lg text-neutral-500">測驗結果</div>
		<div class="text-center font-bold text-2xl">
			{$result.title}
		</div>
		<div class="rounded-lg overflow-hidden">
			<picture>
				<img
					src={`${booksBaseUrl}/${$result.imagePath}`}
					alt={`${$result.title}封面`}
				/>
			</picture>
		</div>
		<div slot="actions" class="flex justify-around">
			<Button on:click={() => answers.restart()}>重新測驗</Button>
			<a href={`${booksBaseUrl}/products/${$result.id}`} target="_blank">
				<Button>博客來連結</Button>
			</a>
		</div>
	</BookTestView>
{:else}
	<div>error</div>
{/if}
