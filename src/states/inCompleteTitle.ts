import { atom } from "recoil";
import { Task } from "../Types/Task";

export const inCompleteTitleState = atom<Array<Task>>({
  key: "inCompleteTitleState",
  default: []
});
