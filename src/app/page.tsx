import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session2 = await getServerSession();

  // console.log(session2);
  return (
    <div>
      <ThemeSwitchButton />
      <h1 className="text-6xl">Start</h1>
      <p>{session2?.user?.name}</p>
    </div>
  );
}
``;
