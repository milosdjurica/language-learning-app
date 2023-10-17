import { TextareaWithButton } from "@/components/TextareaWithButton";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session2 = await getServerSession();

  return (
    <div>
      <h1 className="text-3xl">{session2?.user?.name}</h1>

      <div className="w-1/2 m-auto mt-5">
        <TextareaWithButton />
      </div>
    </div>
  );
}
