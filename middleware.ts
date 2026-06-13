import { NextResponse, type NextRequest } from "next/server";
import { detectLanguage } from "@/lib/detectLanguage";
import { isLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (isLocale(firstSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", firstSegment);
    return NextResponse.next({
      request: {
        headers: requestHeaders
      }
    });
  }

  const locale = detectLanguage(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"]
};
