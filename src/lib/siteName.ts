import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";

export const siteName: Writable<string> = writable("aarestrup.dev")
export const getSiteName = () => get(siteName);
export const setSiteName = (name: string) => siteName.update((store) => name);