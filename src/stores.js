import { writable } from 'svelte/store';

export const logged = writable(false);
export const profil = writable(null);
export const token = writable(null);

export const currentGame = writable(null);
export const currentEvent = writable(null);
export const currentFriend = writable(null);

export const games = writable([]);
export const events = writable([]);
export const friends = writable([]);
export const leaderboard = writable([]);
