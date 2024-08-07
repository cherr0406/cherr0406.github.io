import type { Metadata } from "next";
import { Nunito_Sans, Noto_Sans_JP } from "next/font/google";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import "./globals.css";
import { SITE_MAP, SITE_NAME } from "./data/const";
import { useState } from "react";

const nunitoSans = Nunito_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  preload: false,
  display: "swap",
  adjustFontFallback: false,
});
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  style: ["normal"],
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: "cherr0406's portfolio. Generated by create next app",
};

export default function RootLayout({
  children: home,
  works,
  blog,
  profile,
}: Readonly<{
  children: React.ReactNode;
  works: React.ReactNode;
  blog: React.ReactNode;
  profile: React.ReactNode;
}>) {
  const siteNodeMap: { [key: string]: React.ReactNode } = {
    HOME: home,
    WORKS: works,
    BLOG: blog,
    PROFILE: profile,
  };
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Navigation />
        <main>
          {Object.keys(SITE_MAP).map((key, index) => (
            <section id={SITE_MAP[key].path.slice(1)} key={index}>
              {siteNodeMap[key]}
            </section>
          ))}
        </main>
        <Footer />
      </body>
    </html>
  );
}
