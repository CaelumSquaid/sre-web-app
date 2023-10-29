import React from "react";
import cloudinary from "cloudinary";
import Carousel from "@/components/ui/carousel";
import QuoteForm from "@/components/EmailForm";

type Images = {
  resources: {
    public_id: string;
    filename: string;
  }[];
};

async function Gallery() {
  const images: Images = await cloudinary.v2.search
    .expression("resource_type:image AND folder=products")
    .sort_by("public_id", "desc")
    .execute();

  return (
    <section
      id="gallery"
      className="w-full gap-6 py-44 flex flex-col items-center justify-center bg-white lg:px-36 xl:flex-row md:px-24 px-6"
    >
      <div className="w-full xl:w-1/2">
        <Carousel images={images.resources} />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black mb-6">Send us an Email</h1>
        <p className="my-4 text-sm">
          We will be happy to serve your equipment rental requirements right
          away. Your business is why we are here. Your satisfaction is what you
          will get.
        </p>
        <QuoteForm />
      </div>
    </section>
  );
}

export default Gallery;
