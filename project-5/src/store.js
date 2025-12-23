import { atomWithStorage } from "jotai/utils";

export const taskAtom = atomWithStorage("tasks", []);
