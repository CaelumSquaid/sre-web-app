import Image from "next/image";
import Background from "@/assets/hero-background.jpg";
import React from "react";

function AboutUs() {
  return (
    <section className="h-full w-full flex justify-center items-center relative">
      <Image
        src={Background}
        alt="logo"
        width={300}
        height={300}
        className="h-full w-full opacity-40 blur-sm absolute top-0 right-0"
      />
      <div className="z-[50] flex items-top justify-center w-3/4 gap-6">
        <div className="w-1/2 gap-2">
          <h1 className="text-5xl font-black mb-4">SRE Industries</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque delectus voluptatem, error a molestias beatae saepe vel
            repellat natus ratione doloremque, perspiciatis tenetur id quod
            provident esse consequuntur hic?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            atque delectus voluptatem, error a molestias beatae saepe vel
            repellat natus ratione doloremque, perspiciatis tenetur id quod
            provident esse consequuntur hic?
          </p>
          <button></button>
        </div>
        <iframe
          className="flex-1 aspect-video rounded"
          src="https://www.youtube.com/embed/Xh-b3vWJEbk?si=nzMhUjtlkzOFn3er"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </section>
  );
}

export default AboutUs;
