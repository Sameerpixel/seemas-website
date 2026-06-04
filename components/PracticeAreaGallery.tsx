"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SanityImageSource } from "@sanity/image-url";

import { urlFor } from "@/sanity/lib/image";

type GalleryItem = {
  title: string;
  image: SanityImageSource;
};

export default function PracticeAreaGallery({
  images,
}: {
  images: GalleryItem[];
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images.length) return null;

  return (
    <div className="sticky top-28">

      <div className="overflow-hidden rounded-[3rem] border border-[#9fc9ec] bg-white/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl">

        <div className="relative h-[700px] overflow-hidden rounded-[2rem]">

          <Image
            src={urlFor(images[current]!.image).url()}
alt={images[current]!.title || "Gallery image"}
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-cover transition-all duration-700"
          />

        </div>

        <div className="mt-5 flex items-center justify-between">

          <button
            onClick={() =>
              setCurrent(
                current === 0
                  ? images.length - 1
                  : current - 1
              )
            }
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#9fc9ec] bg-[#e3f0fb]/90 text-xl text-[#25557c] transition hover:bg-[#d8ebfa]"
          >
            ←
          </button>

          <p className="text-[13px] uppercase tracking-[0.2em] text-[#25557c]">
            {current + 1} / {images.length}
          </p>

          <button
            onClick={() =>
              setCurrent(
                current === images.length - 1
                  ? 0
                  : current + 1
              )
            }
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#9fc9ec] bg-[#e3f0fb]/90 text-xl text-[#25557c] transition hover:bg-[#d8ebfa]"
          >
            →
          </button>

        </div>

      </div>

    </div>
  );
}