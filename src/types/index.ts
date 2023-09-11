export interface Choice {
	label: 'A' | 'B';
	body: string;
	bookIds: string[];
}

export interface Question {
	body: string;
	choices: Choice[];
}

export interface Book {
	id: string;
	title: string;
	authur: string;
	imagePath: string;
	introduction: string;
}

export interface BookTestData {
	questions: Question[];
	books: Book[];
}

export type Answers = number[] | undefined;
