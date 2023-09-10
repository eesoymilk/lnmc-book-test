<script lang="ts">
	import { bookTestData } from '../bookTestData';
	import { answers, result } from '../stores';
	import Button from './Button.svelte';
	import Question from './Question.svelte';
	import ChoiceButton from './ChoiceButton.svelte';
	import Result from './Result.svelte';

	const booksBaseUrl = 'https://www.books.com.tw';

	// let answers: number[] = [];
	// let result: Book | undefined;
	$: currentQuestion = bookTestData.questions.at($answers.length);
	$: if ($answers.length >= bookTestData.questions.length) {
		const resultBookIds = bookTestData.questions.reduce(
			(bookIds, question, i) =>
				bookIds.filter((el) => question.choices[$answers[i]].bookIds.includes(el)),
			bookTestData.books.map((el) => el.id)
		);

		console.log(resultBookIds);

		if (resultBookIds.length > 1) {
			console.error('more than one book');
		} else if (resultBookIds.length === 0) {
			console.error('no result');
		} else {
			result.update(() => bookTestData.books.find((el) => el.id === resultBookIds[0]));
		}
	}

	const answer = (choiceIndex: number) => answers.update((prev) => [...prev, choiceIndex]);
	const restart = () => {
		answers.update(() => []);
		result.update(() => undefined);
	};
</script>

<svelte:head>
	<title>文新社 | 書本心理測驗</title>
	<meta name="description" content="文新社 | 書本心理測驗" />
</svelte:head>

{#if currentQuestion}
	<Question>
		<span slot="number">
			{$answers.length + 1} / {bookTestData.questions.length}
		</span>
		<span slot="body">
			{currentQuestion.body}
		</span>
		<div class="flex flex-col gap-2" slot="choices">
			{#each currentQuestion.choices as choice, i}
				<ChoiceButton on:click={() => answer(i)}>
					{choice.body}
				</ChoiceButton>
			{/each}
		</div>
	</Question>
{:else if $result}
	<Result imageUrl={`${booksBaseUrl}/${$result.imagePath}`} imageAlt={`${$result.title}封面`}>
		<span slot="title">{$result.title}</span>
		<!-- <span slot="details">作者：{result.authur}</span> -->
		<div slot="actions" class="flex justify-around">
			<Button on:click={() => restart()}>重新測驗</Button>
			<Button>
				<a href={`${booksBaseUrl}/products/${$result.id}`} target="_blank">博客來連結</a>
			</Button>
		</div>
	</Result>
{:else}
	<div>error</div>
{/if}
