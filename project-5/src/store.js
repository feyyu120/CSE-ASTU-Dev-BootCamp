import { atomWithStorage } from "jotai/utils";

export const taskAtom = atomWithStorage("tasks", []);
export const darkAtom = atomWithStorage("darkMode", false);
