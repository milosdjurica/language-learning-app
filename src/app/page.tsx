"use client";

import { TextareaWithButton } from "@/components/TextareaWithButton";
import ChooseLanguage from "../components/ChooseLanguage";
import TranslatedTexts from "@/components/TranslatedTexts";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col space-y-10 mt-5">
      <h1 className="text-3xl m-auto">Translator</h1>
      <h3 className="text-center md:text-xl">
        Welcome back {session?.user?.name || session?.user?.email}
      </h3>

      <div className="w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 m-auto mt-5 space-y-12">
        <div className="space-y-2">
          <ChooseLanguage />
          <TextareaWithButton />
        </div>
        <TranslatedTexts />
      </div>
    </div>
  );
}
