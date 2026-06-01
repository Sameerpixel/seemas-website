export const revalidate = 30;
import Image from "next/image";

import FloatingBackButton from "@/components/FloatingBackButton";

import { client } from "@/sanity/lib/client";
import { galleryQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type GalleryItem = {
  title: string;
  description?: string;
  location?: string;
  date?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: string;
    };
  };
};

export default async function GalleryPage() {

  const galleryItems: GalleryItem[] =
    await client.fetch(galleryQuery);

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#f7faf6]"
      style={{
        fontFamily: "'Bahnschrift SemiCondensed', sans-serif",
      }}
    >

      <FloatingBackButton
        href="/explore"
        label="Back To Explore"
      />

      {/* BACKGROUND GLOWS */}
      <div className="fixed left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#d6eed2]/40 blur-3xl" />

      <div className="fixed bottom-[-140px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#d8f5d2]/50 blur-3xl" />

      {/* HEADER */}
      <div className="relative z-20 mx-auto max-w-[1750px] px-6 pt-32">

        <div className="inline-flex items-center rounded-[2.6rem] border border-[#bde4b7]/40 bg-white/70 px-10 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">

          <div className="mr-5 h-5 w-5 rounded-full bg-[#68b75d]" />

          <h1 className="text-5xl font-black tracking-[-0.05em] text-[#241f1b]">
            Gallery
          </h1>

        </div>

      </div>

      {/* GRID */}
      <section className="relative z-10 mx-auto max-w-[1750px] px-6 pb-24 pt-12">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {galleryItems.map((item, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-[2.8rem] border border-[#bde4b7]/40 bg-white/70 shadow-[0_14px_50px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >

              {/* IMAGE */}
              <div className="relative h-[380px] overflow-hidden">

                {item.image?.asset?._ref && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                )}

              </div>

              {/* TEXT */}
              <div className="p-8">

                <h2 className="text-[34px] font-black leading-[1.05] tracking-[-0.03em] text-[#241f1b]">
                  {item.title}
                </h2>

                {item.location && (
                  <p className="mt-4 text-[14px] uppercase tracking-[0.18em] text-[#5f8f57]">
                    {item.location}
                  </p>
                )}

                {item.date && (
                  <p className="mt-2 text-[14px] uppercase tracking-[0.18em] text-[#7da776]">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                )}

                {item.description && (
                  <p className="mt-6 text-[20px] leading-[1.8] text-[#4d4641]">
                    {item.description}
                  </p>
                )}

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}