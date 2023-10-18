import { atom } from "recoil";

export const insertTextState = atom<string>({
  key: "insertTextState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const selectedLanguageState = atom<string>({
  key: "selectedLanguageState", // unique ID (with respect to other atoms/selectors)
  default: "es", // default value (aka initial value)
});
