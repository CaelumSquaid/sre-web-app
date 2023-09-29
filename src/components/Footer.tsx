import { Home, Mail, Phone } from "lucide-react";
import React from "react";
import MainLogo from "@/assets/main-logo.jpg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="h-[150px] bg-black text-white flex items-center justify-center gap-4">
      <div></div>
      <div className="gap-5 text-sm flex items-start">
        <Image
          src={MainLogo}
          alt="main logo"
          className="h-[5.5rem] w-24 rounded-lg"
        />
        <div>
          <h1 className="text-xl font-semibold">SRE Industries</h1>
          <div className="flex gap-2 items-center">
            <Home className="h-3 w-3" />
            <span>Osmeña Blvd, Cebu City, 6000 Cebu</span>
          </div>
          <div className="flex gap-2 items-center">
            <Mail className="h-3 w-3" />
            <span>SRE.industries@gmail.com</span>
          </div>
          <div className="flex gap-2 items-center">
            <Phone className="h-3 w-3" />
            <span>(+63)922 333 3333</span>
          </div>
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.5121491427813!2d123.89342607465362!3d10.300835267786757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999576993f63b%3A0x7b3f471e2ca85aa2!2sAbellana%20National%20School!5e0!3m2!1sen!2sph!4v1696007363849!5m2!1sen!2sph"
          className="aspect-[3/1] rounded"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        /> */}
      </div>
    </footer>
  );
}

export default Footer;
