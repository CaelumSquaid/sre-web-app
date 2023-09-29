import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <AboutUs />
      <Products /> 
      <Footer />
    </>
  );
}
