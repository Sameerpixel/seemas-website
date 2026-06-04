"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SanityImageSource } from "@sanity/image-url";

import { urlFor } from "@/sanity/lib/image";

export default function ArticleGallery({
  images,
}: {
  images: SanityImageSource[];
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images.length) return null;

  return (
    <div className="relative mb-12 overflow-hidden rounded-[2.5rem] border border-[#e6dbff] bg-white/80 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">

      <div className="relative h-[500px] overflow-hidden rounded-[2rem]">

        <Image
          src={urlFor(images[current]).url()}
          alt={`Gallery image ${current + 1}`}
          fill
          className="object-cover transition-all duration-700"
        />

      </div>

      {images.length > 1 && (
        <>

          <button
            onClick={() =>
              setCurrent(
                current === 0
                  ? images.length - 1
                  : current - 1
              )
            }
            className="absolute left-8 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg"
          >
            ←
          </button>

          <button
            onClick={() =>
              setCurrent(
                current === images.length - 1
                  ? 0
                  : current + 1
              )
            }
            className="absolute right-8 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg"
          >
            →
          </button>

        </>
      )}

      <div className="mt-5 flex justify-center gap-2">

        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index
                ? "bg-[#8f6ad9]"
                : "bg-[#d9cdf8]"
            }`}
          />
        ))}

      </div>

    </div>
  );
}