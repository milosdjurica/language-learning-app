import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session2 = await getServerSession();

  return (
    <div>
      <h1 className="text-6xl">Start</h1>
      <p>{session2?.user?.name}</p>
      <h2 className="bg-slate-400">Opa</h2>
      <h2 className="bg-gray-400">Opa</h2>
      <h2 className="bg-zinc-400">Opa</h2>
      <h2 className="bg-neutral-400">Opa</h2>
      <h2 className="bg-stone-400">Opa</h2>
    </div>
  );
}
