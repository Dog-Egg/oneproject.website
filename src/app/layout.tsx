import type { Metadata } from "next";
// import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";

// const font = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/SebastianAigner/twemoji-amazing/twemoji-amazing.css"
        />
      </head>
      <body
        // className={font.className}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
