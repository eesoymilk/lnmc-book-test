import { derived, writable } from 'svelte/store';
import type { Answers, Book } from './types';
import { bookTestData } from './bookTestData';

// export const answers = writable<number[]>([]);
// export const result = writable<Book | undefined>(undefined);

const isBrowser = () => typeof window !== 'undefined';

const readStorageAnswers = (): Answers =>
	isBrowser() &&
	localStorage.answers &&
	[...localStorage.answers].map((el) => parseInt(el));

const createAnswers = () => {
	const answersStore = writable<number[] | undefined>(readStorageAnswers());
	const { subscribe, set, update } = answersStore;

	return {
		subscribe,
		start: () => {
			set([]);
			localStorage.setItem('answers', '');
		},
		answer: (choiceIndex: number) => {
			update((prev) => {
				if (prev) {
					const newAnswers = [...prev, choiceIndex];
					localStorage.setItem('answers', newAnswers.join(''));
					return newAnswers;
				}
				localStorage.removeItem('answers');
			});
		},
		restart: () => {
			set(undefined);
			localStorage.removeItem('answers');
		},
	};
};

export const answers = createAnswers();

export const currentQuestion = derived(
	answers,
	($answers) => $answers && bookTestData.questions.at($answers.length)
);

export const result = derived(answers, ($answers) => {
	console.log($answers);

	if (!$answers) {
		return;
	}

	if ($answers.length >= bookTestData.questions.length) {
		const resultBookIds = bookTestData.questions.reduce(
			(bookIds, question, i) =>
				bookIds.filter((el) =>
					question.choices[$answers[i]].bookIds.includes(el)
				),
			bookTestData.books.map((el) => el.id)
		);

		console.log(resultBookIds);

		if (resultBookIds.length > 1) {
			console.error('more than one book');
		} else if (resultBookIds.length === 0) {
			console.error('no result');
		} else {
			return bookTestData.books.find((el) => el.id === resultBookIds[0]);
		}
	}
});
