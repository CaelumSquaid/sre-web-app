"use client";

import Link from "next/link";
import MainLogo from "@/assets/main-logo.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import HamburgerSheet from "./HamburgerSheet";

import Links from "@/lib/links.json";
import { boolean } from "zod";
import { Home, Mail, Phone } from "lucide-react";

function NavBar() {
  const [active, activeSet] = useState<boolean>(false);

  useEffect(() => {
    const position = window.addEventListener("scroll", (e) => {
      window.scrollY >= 20 ? activeSet(true) : activeSet(false);
    });
  }, []);

  return (
    <nav
      className={`z-20 h-[100px] ${
        active
          ? "bg-white/90 backdrop-blur-lg drop-shadow-xl"
          : "bg-transparent"
      } fixed top-0 w-screen flex justify-between items-center lg:px-36 md:px-24 px-6 py-6`}
    >
      <div className="h-full flex items-center justify-center gap-1">
        <Image
          src={MainLogo}
          alt="logo"
          className="h-16 w-24 rounded overflow-hidden"
        />
        <Link
          href="#contactUs"
          className="mt-4 ml-2 px-4 space-y-1 flex-col item-start justify-center text-xs text-gray-700 bg-gray-200 rounded p-2 hover:bg-gray-300"
        >
          <div className="flex gap-1 items-center">
            <Mail className="h-3 w-3" />
            <span>SRE.industries@gmail.com</span>
          </div>
          <div className="flex gap-1 items-center">
            <Phone className="h-3 w-3" />
            <span>(+63)922 333 3333</span>
          </div>
        </Link>
      </div>

      <ul className="gap-10 items-center hidden lg:flex">
        {Links.map((link) => (
          <li
            key={link.href}
            className="text-lg text-inherit transition-all font-semibold hover:font-black hover:underline underline-offset-8"
          >
            <Link href={link.href}>{link.display}</Link>
          </li>
        ))}
      </ul>
      <HamburgerSheet />
    </nav>
  );
}

export default NavBar;
