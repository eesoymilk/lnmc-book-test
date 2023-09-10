import { writable } from 'svelte/store';
import type { Book } from './types';

export const answers = writable<number[]>([]);

export const result = writable<Book | undefined>(undefined);
