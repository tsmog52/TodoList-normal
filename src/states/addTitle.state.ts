import { atom, selector } from "recoil";
import { Task } from "../Types/Task";

export const addTitleState = atom<Array<Task>>({
  key: "addTitleState",
  default: []
});

export const addTitleStateLength = selector<number>({
  key: "addTitleStateLength",
  get: ({ get }) => {
    const addTitleNumber: Array<Task> = get(addTitleState);
    return addTitleNumber?.length || 0;
  },
});

