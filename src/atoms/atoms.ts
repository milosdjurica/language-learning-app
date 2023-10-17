import { atom } from "recoil";

export const insertTextState = atom<string>({
  key: "insertTextState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
