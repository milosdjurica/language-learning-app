import { TextareaWithButton } from "@/components/TextareaWithButton";
import { getServerSession } from "next-auth/next";
import ChooseLanguage from "../components/ChooseLanguage";
import TranslatedTexts from "@/components/TranslatedTexts";

export default async function Home() {
  const session2 = await getServerSession();

  return (
    <div>
      <h1 className="text-3xl">{session2?.user?.name}</h1>

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
