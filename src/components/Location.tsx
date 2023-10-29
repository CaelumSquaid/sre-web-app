import { Home, Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import MainLogo from "@/assets/main-logo.png"

function Location() {
  return (
    <section className="flex items-start justify-center gap-6">
      {/* <div>
        <Image className="h-16 w-20" alt="main-logo" src={MainLogo} />
        <h1>Home</h1>
        <h1>Gallery</h1>
        <h1>Contact Us</h1>
      </div> */}
      <div className="text-sm">
        <h1 className="text-2xl font-semibold mb-3">SON RISE Enterprises</h1>
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
        <div className="mt-6 rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.512149142779!2d123.89342607456958!3d10.30083526778693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999576993f63b%3A0x7b3f471e2ca85aa2!2sAbellana%20National%20School!5e0!3m2!1sen!2sph!4v1698598514608!5m2!1sen!2sph"
            width="400"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Location;
