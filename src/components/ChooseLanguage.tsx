"use client";

import React from "react";
import { Button } from "./ui/button";
import { selectedLanguageState } from "@/atoms/atoms";
import { useRecoilState } from "recoil";

export default function ChooseLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(
    selectedLanguageState
  );

  return (
    <div className="justify-evenly flex">
      <Button
        variant={`${selectedLanguage === "en" ? "outline" : "secondary"}`}
        className={`border ${
          selectedLanguage === "en" ? "border-primary" : ""
        }`}
        onClick={() => setSelectedLanguage("en")}
      >
        ENG
      </Button>

      <Button
        variant={`${selectedLanguage === "es" ? "outline" : "secondary"}`}
        className={`border ${
          selectedLanguage === "es" ? "border-primary" : ""
        }`}
        onClick={() => setSelectedLanguage("es")}
      >
        ESP
      </Button>

      <Button
        variant={`${selectedLanguage === "sr-latin" ? "outline" : "secondary"}`}
        className={`border ${
          selectedLanguage === "sr-latin" ? "border-primary" : ""
        }`}
        onClick={() => setSelectedLanguage("sr-latin")}
      >
        SRB
      </Button>
    </div>
  );
}
