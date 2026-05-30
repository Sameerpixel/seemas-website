"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ImageModal({
  src,
  alt,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        onClick={() => setOpen(true)}
        className="relative h-full w-full cursor-pointer"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-4 transition duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* Fullscreen Preview */}
     {open && (
  <div
    onClick={() => setOpen(false)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 999999,
    }}
    className="bg-black/90"
  >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-8 top-6 z-[10000] text-6xl font-light text-white"
          >
            ×
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 flex items-center justify-center p-6"
          >
            <div className="relative h-[95vh] w-[95vw]">
              <Image
                src={src}
                alt={alt}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}