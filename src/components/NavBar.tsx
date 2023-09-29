import Link from "next/link";
import Icon from "@/assets/icon.svg";
import React from "react";
import { Facebook, MapPin, icons } from "lucide-react";
import Image from "next/image";

function NavBar() {
  return (
    <nav className="z-[9999] h-[80px] bg-orange-500 bg-opacity-90 fixed top-0 w-screen flex justify-between items-center px-24 py-6">
      {/* <h1 className="font-black text-4xl">SRE</h1> */}
      <div className="flex items-center justify-center gap-1">
        <Image src={Icon} alt="logo" className="h-12 w-12" />
        <h1 className="font-black text-5xl text-gray-800    ">SRE</h1>
      </div>

      <ul className="flex gap-6 items-center">
        <li className="hover:underline underline-offset-8">
          <Link href="#">About Us</Link>
        </li>
        <li className="hover:underline underline-offset-8">
          <Link href="#">Products</Link>
        </li>
        <li className="hover:underline underline-offset-8">
          <Link href="#">Contact</Link>
        </li>
        <div className="flex items-center jusify-center gap-2">
          <li className="hover:scale-110">
            <Link href="#">
              <Facebook className="h-5 w-5" />
            </Link>
          </li>
          <li className="hover:scale-110">
            <Link href="#">
              <MapPin className="h-5 w-5" />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
