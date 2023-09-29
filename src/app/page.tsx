import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Products /> 
      <Footer />
    </>
  );
}
