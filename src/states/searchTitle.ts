import { atom } from "recoil";

export const searchTitleState = atom<string>({
  key: "searchTitle",
  default: ""
});
