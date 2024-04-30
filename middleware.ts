import { NextRequest, NextResponse } from "next/server";

const legacyPrefixes = ["/docs", "/blog"];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    legacyPrefixes.some((prefix) => pathname.startsWith(prefix)) ||
    pathname === "/"
  ) {
    return NextResponse.next();
  }

  // remove trailing slash
  if (pathname.endsWith("/")) {
    const newPathname = pathname.slice(0, -1);
    return NextResponse.redirect(new URL(`${newPathname}`, req.nextUrl));
  }
}
