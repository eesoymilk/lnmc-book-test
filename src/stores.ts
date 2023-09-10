import { writable } from 'svelte/store';
import type { Book } from './types';

export const answers = writable<number[]>([]);

export const result = writable<Book | undefined>(undefined);

// count.subscribe((value) => {
// 	console.log(value);s
// }); // logs '0'

// count.set(1); // logs '1'

// count.update((n) => n + 1); // logs '2'
