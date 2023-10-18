"use client";

import {
  firstTranslatedTextState,
  secondTranslatedTextState,
  selectedLanguageState,
} from "@/atoms/atoms";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRecoilState } from "recoil";

export default function TranslatedTexts() {
  const [firstText, setFirstText] = useRecoilState(firstTranslatedTextState);
  const [secondText, setSecondText] = useRecoilState(secondTranslatedTextState);
  const [selectedLang, setSelectedLang] = useRecoilState(selectedLanguageState);

  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">
          {selectedLang === "en"
            ? "Srpski"
            : selectedLang === "es"
            ? "English"
            : "Español"}
        </TabsTrigger>
        <TabsTrigger value="password">
          {selectedLang === "en"
            ? "Español"
            : selectedLang === "es"
            ? "Srpski"
            : "English"}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="min-h-[200px]">
          <p className="p-2">
            {firstText.length === 0 ? "Translation will show here" : firstText}
          </p>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className="min-h-[200px]">
          <p className="p-2">
            {secondText.length === 0
              ? "Translation will show here"
              : secondText}
          </p>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
