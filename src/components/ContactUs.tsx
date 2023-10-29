import React from "react";
import QuoteForm from "@/components/EmailForm";
import Location from "./Location";

function ContactUs() {
  return (
    <section
      className="w-full py-44 flex justify-center items-center bg-black text-white"
      id="contactUs"
    >
      <div className="h-1/2 flex flex-col items-center justify-start gap-6">
        <Location />
      </div>
    </section>
  );
}

export default ContactUs;
