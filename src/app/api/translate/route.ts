import { NextResponse } from "next/server";
import axios from "axios";

type DataType = {
  detectedLanguage: { language: string; score: number };
  translations: TranslationsType[];
};
type TranslationsType = {
  text: string;
  to: string;
};

export async function POST(request: Request) {
  try {
    // ! getting parameters from body
    const { text, language }: { text: string; language: string } =
      await request.json();
    // ! axios options
    const options = {
      method: "POST",
      url: "https://microsoft-translator-text.p.rapidapi.com/translate",
      params: {
        "to[0]":
          language === "es" ? "en" : language === "en" ? "sr-latin" : "es",
        "to[1]":
          language === "es" ? "sr-latin" : language === "en" ? "es" : "en",
        "api-version": "3.0",
        profanityAction: "NoAction",
        textType: "plain",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.MICROSOFT_API_KEY ?? "",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      data: [
        {
          Text: text,
        },
      ],
    };

    // ! made a call
    const response = await axios.request(options);
    const data: DataType[] = response.data;
    const firstTranslation = data[0].translations[0].text;
    const secondTranslation = data[0].translations[1].text;

    // ! filter data and return 2 translations
    return NextResponse.json({ firstTranslation, secondTranslation });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "something went wrong" });
  }
}
