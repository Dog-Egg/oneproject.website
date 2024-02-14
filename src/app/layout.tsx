import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const font = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "oneproject",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
