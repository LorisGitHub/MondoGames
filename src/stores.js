import { writable } from 'svelte/store';

export const currentGame = writable(null);
export const currentFriend = writable(null);

export const games = writable(null);
export const events = writable(null);
