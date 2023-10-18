"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRecoilState } from "recoil";
import {
  firstTranslatedTextState,
  insertTextState,
  secondTranslatedTextState,
  selectedLanguageState,
} from "../atoms/atoms";
import axios from "axios";

type DataType = {
  firstTranslation: string;
  secondTranslation: string;
};

export function TextareaWithButton() {
  const [insertedText, setInsertedText] = useRecoilState(insertTextState);
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(
    selectedLanguageState
  );
  const [firstTranslatedText, setFirstTranslatedText] = useRecoilState(
    firstTranslatedTextState
  );
  const [secondTranslatedText, setSecondTranslatedText] = useRecoilState(
    secondTranslatedTextState
  );

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // ! passing text and language to backend, and then from there call external api with those values
    // ! and getting response from api
    const response = await axios.post("/api/translate", {
      text: insertedText,
      language: selectedLanguage,
    });

    // ! putting data that i passed back from backend into states
    const data: DataType = response.data;
    setFirstTranslatedText(data.firstTranslation);
    setSecondTranslatedText(data.secondTranslation);
  };

  const onChange = (e: any) => {
    e.preventDefault();
    setInsertedText(e.target.value);
  };

  return (
    <>
      <form className="grid w-full gap-2" onSubmit={onSubmit}>
        <Textarea
          onChange={onChange}
          placeholder="Insert text here to translate it. By default it translates from Spanish."
        />
        <Button type="submit">Translate</Button>
      </form>
    </>
  );
}
