"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Component, Grip, Layers, MenuSquare, X } from "lucide-react";
import Link from "next/link";
import Links from "@/lib/links.json";

function HamburgerSheet() {
  return (
    <Sheet>
      <SheetPortal />
      <SheetTrigger className="lg:hidden">
        <Grip className="h-10 w-10 text-gray-600 p-2 rounded hover:bg-gray-200 hover:text-gray-800 transition-all delay-75" />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="z-50 abosolute h-3/4 w-screen bg-white/50 text-2xl font-bold backdrop-blur lg:hidden"
      >
        <div className="flex flex-col justify-evenly h-full">
          {Links.map((link) => (
            <SheetTrigger key={link.href} asChild>
              <Link key={link.href} href={link.href} className="flex h-full items-center justify-center border-b border-gray-300 last:border-none hover:bg-gray-300 hover:underline hover:transition-all hover:transition-150 ">{link.display}</Link>
            </SheetTrigger>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default HamburgerSheet;
