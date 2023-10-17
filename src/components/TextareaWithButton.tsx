"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRecoilState } from "recoil";
import { insertTextState } from "../atoms/atoms";

export function TextareaWithButton() {
  const [insertedText, setInsertedText] = useRecoilState(insertTextState);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    // ! call api with insertedText as param and get translations
    // const { firstLanguageSentences, secondLanguageSentences } =
    //   await translateText(insertedText, selectedLang);
    // setFirstTranslatedText(firstLanguageSentences.join(". "));
    // setSecondTranslatedText(secondLanguageSentences.join(". "));
  };

  const onChange = (e: any) => {
    e.preventDefault();
    setInsertedText(e.target.value);
    console.log("etv", e.target.value);
    console.log("it", insertedText);
  };

  return (
    <form className="grid w-full gap-2" onSubmit={onSubmit}>
      <Textarea
        onChange={onChange}
        placeholder="Insert text here to translate it."
      />
      <Button type="submit">Translate</Button>
    </form>
  );
}
