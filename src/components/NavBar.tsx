import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="h-[50px] bg-white bg-opacity-50 fixed top-0 w-screen border-b border-gray-300 flex justify-between items-center px-24 py-6">
      <h1 className="font-black text-4xl">SRE</h1>
      <ul className="flex gap-6 items-center">
        <li><Link href="#">About Us</Link></li>
        <li><Link href="#">Products</Link></li>
        <li><Link href="#">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
