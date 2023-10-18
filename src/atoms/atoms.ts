import { atom } from "recoil";

export const insertTextState = atom<string>({
  key: "insertTextState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const selectedLanguageState = atom<string>({
  key: "selectedLanguageState",
  default: "es",
});

export const firstTranslatedTextState = atom<string>({
  key: "firstTranslatedTextState",
  default: "",
});

export const secondTranslatedTextState = atom<string>({
  key: "secondTranslatedTextState",
  default: "",
});
