<script lang="ts">
	import type { PageData } from './$types';
	import type { Book } from '../types';
	import Button from './Button.svelte';
	import Question from './Question.svelte';
	import ChoiceButton from './ChoiceButton.svelte';
	import Result from './Result.svelte';

	export let data: PageData;

	const booksBaseUrl = 'https://www.books.com.tw';

	let answers: number[] = [];
	let result: Book | undefined;
	$: currentQuestion = data.questions.at(answers.length);
	$: if (answers.length >= data.questions.length) {
		const resultBookIds = data.questions.reduce(
			(bookIds, question, i) =>
				bookIds.filter((el) => question.choices[answers[i]].bookIds.includes(el)),
			data.books.map((el) => el.id)
		);

		console.log(resultBookIds);

		if (resultBookIds.length > 1) {
			console.error('more than one book');
		} else if (resultBookIds.length === 0) {
			console.error('no result');
		} else {
			result = data.books.find((el) => el.id === resultBookIds[0]);
		}
	}

	const answer = (choiceIndex: number) => (answers = [...answers, choiceIndex]);
	const restart = () => {
		answers = [];
		result = undefined;
		console.log(answers, result);
	};
</script>

<svelte:head>
	<title>LNMC | Book Test</title>
	<meta name="description" content="Literature and New Media Club | Book Test" />
</svelte:head>

{#if currentQuestion}
	<Question>
		<span slot="number">
			{answers.length + 1} / {data.questions.length}
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
{:else if result}
	<Result imageUrl={`${booksBaseUrl}/${result.imagePath}`} imageAlt={`${result.title}封面`}>
		<span slot="title">{result.title}</span>
		<!-- <span slot="details">作者：{result.authur}</span> -->
		<div slot="actions" class="flex justify-around">
			<Button on:click={() => restart()}>重新測驗</Button>
			<Button>
				<a href={`${booksBaseUrl}/products/${result.id}`} target="_blank">博客來連結</a>
			</Button>
		</div>
	</Result>
{:else}
	<div>error</div>
{/if}
