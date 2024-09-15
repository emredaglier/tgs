// Analytics & Speed Insights by Vercel
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar scrollbar-thumb-[#c90119] scrollbar-track-[--background] dark:scrollbar-thumb-[--foreground] dark:scrollbar-track-[--background]"
    >
      {/* This lang attribute will be changed by language selector in the later updates */}
      <body className={`${geistSans.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
