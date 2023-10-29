import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Gallery from "@/components/Gallery";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <AboutUs />
      <Gallery />  
      <ContactUs />
    </React.Fragment>
  );
}
