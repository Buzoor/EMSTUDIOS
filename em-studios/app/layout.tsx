import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "../components/Background";
import Nav from "../components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EM Studios — Crafting Stories, Building Brands",
  description:
    "EM Studios is a premium African brand management and creative agency — strategy, storytelling, design, filmmaking and AI-powered creativity.",
  icons: {
    icon: "/assets/images/brand/favicon.svg",
    shortcut: "/assets/images/brand/favicon.svg",
    apple: "/assets/images/brand/favicon.svg",
  },
  openGraph: {
    title: "EM Studios",
    description:
      "Crafting stories. Building brands. Strategy, storytelling, design, filmmaking and AI-powered creativity.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative overflow-x-hidden">
        <div className="body-grain" />
        <Background />
        <Nav />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
