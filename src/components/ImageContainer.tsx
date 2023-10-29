"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

function ImageContainer({
  public_id,
  filename,
  ...props
}: {
  public_id: string;
  filename: string;
}) {
  return (
    <div className="flex-shrink-0 w-full h-full rounded overflow-hidden cursor-pointer group relative">
      <div className="hidden absolute top-0 right-0 inset-0 bg-gray-800/75 p-6 transition-all delay-75 ease-in-out first:group-hover:flex group-hover:items-end group-hover:justify-center">
        <span className="text-gray-100">{filename}</span>
      </div>
      <CldImage
        {...props}
        alt="test-image"
        width={600}
        height={600}
        className="h-full w-full object-cover"
        src={public_id}
      />
    </div>
  );
}

export default ImageContainer;
