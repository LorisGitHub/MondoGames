import { writable } from 'svelte/store';

export const logged = writable(false);

export const currentGame = writable(null);
export const currentFriend = writable(null);

export const games = writable([]);
export const events = writable([]);
export const friends = writable([]);
export const leaderboard = writable([]);
