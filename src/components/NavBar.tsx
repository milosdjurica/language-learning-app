import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathName = usePathname();

  const primary = "border-b border-b-primary";
  const secondary = "border-b border-b-secondary";

  // ! Selected page should have border-b-primary

  return (
    <nav className="w-2/3 md:w-1/2 flex items-center justify-around">
      <Link
        href="/"
        className={`hover:border-b-primary ${
          pathName === "/" ? primary : secondary
        }`}
      >
        Translate
      </Link>
      <Link
        href="/words"
        className={`hover:border-b-primary ${
          pathName === "/words" ? primary : secondary
        }`}
      >
        Words
      </Link>
      <Link
        href="/resources"
        className={`hover:border-b-primary ${
          pathName === "/resources" ? primary : secondary
        }`}
      >
        Resources
      </Link>
      <Link
        href="/chat"
        className={`hover:border-b-primary ${
          pathName === "/chat" ? primary : secondary
        }`}
      >
        Chat
      </Link>
    </nav>
  );
}
