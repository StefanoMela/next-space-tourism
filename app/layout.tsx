import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed",
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400",],
  variable: "--font-bellefair",
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Frontend Mentor Space Tourism challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
