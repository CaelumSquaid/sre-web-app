import Image from "next/image";
import Background from "@/assets/hero-background.jpg";
import MainLogo from "@/assets/main-logo.png";
import React from "react";
import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import { MailIcon } from "lucide-react";

function AboutUs() {
  return (
    <section
      className="w-full relative flex items-center justify-center xl:h-full lg:px-36 md:px-24 px-6"
      id="aboutUs"
    >
      <Image src={Background} alt="Background-image" className="absolute h-full w-full object-cover blur opacity-40 -z-10"/>
      <div className="h-full w-full flex flex-col items-center justify-start gap-12 py-6 xl:h-1/2 xl:flex-row xl:justify-center xl:items-start">
        <div className="space-y-4 text-center pt-36 xl:p-0 xl:text-left xl:w-1/2">
          <h1 className="text-4xl text-green-500 font-black tracking-wide">
            About Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit mollitia inventore itaque maxime, doloribus, officiis
            nostrum quisquam sint maiores cum, dicta repellendus odio cumque
            impedit? Laudantium maxime repellendus quasi quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit mollitia inventore itaque maxime, doloribus, officiis
            nostrum quisquam sint maiores cum, dicta repellendus odio cumque
            impedit? Laudantium maxime repellendus quasi quibusdam.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 text-white font-semibold hover:bg-yellow-600"
          >
            <MailIcon className="h-5 w-5 mr-3"/>Ask a quote
          </Button>
        </div>
        <div className="rounded overflow-hidden h-full w-full aspect-video xl:w-1/2">
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
