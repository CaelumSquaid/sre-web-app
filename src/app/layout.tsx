import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SON RISE Enterprises",
  description: "Son Rise Enterprises Official Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${font.className} h-[100dvh] w-[100dvw] relative overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-400 scrollbar-thumb-rounded-sm hover:scrollbar-thumb-gray-500`}
      >
        <NavBar />
        <main className="h-full w-full ">{children}</main>
      </body>
    </html>
  );
}
