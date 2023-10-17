import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center font-bold mt-5 space-y-4">
      <h3 className="text-2xl ">There was a problem...</h3>
      <h2 className="text-3xl text-primary">
        We could not find the page you are looking for!
      </h2>
      <Button variant="outline" className="border border-primary">
        <Link href="/">Back to Home Page</Link>
      </Button>
    </main>
  );
}
