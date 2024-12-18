"use client";

import { Blurhash } from "react-blurhash";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const CustomImage = ({ src, hash }: { src: StaticImageData; hash: string }) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src.src;
  }, [src]);

  return (
    <>
      {imageLoaded ? (
        <img
          src={src.src}
          onLoad={() => setImageLoaded(true)}
          alt="image"
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <Blurhash
          hash={hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="w-full h-full object-cover object-center"
        />
      )}
    </>
  );
};

export default CustomImage;
