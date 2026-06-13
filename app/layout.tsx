import type { ReactNode } from "react";
import { headers } from "next/headers";
import "./globals.css";

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-locale");
  const lang = locale === "zh" ? "zh-CN" : "en";

  return (
    <html lang={lang}>
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
