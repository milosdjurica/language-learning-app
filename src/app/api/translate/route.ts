import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { selectedLanguage } = await request.json();

  // ! make a call to rapid api translator

  return NextResponse.json("");
}
