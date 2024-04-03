import { atom } from "recoil";
import { Task } from "../Types/Task";

export const completeTaskState = atom<Array<Task>>({
  key: "completeTaskState",
  default: []
});
