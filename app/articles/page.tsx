export const revalidate = 30;
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import {
  articlesQuery,
  articlesGalleryQuery,
} from "@/sanity/lib/queries";

import { urlFor } from "@/sanity/lib/image";
import FloatingBackButton from "@/components/FloatingBackButton";


type Article = {
  title: string;
  category: string;
  publishedAt: string;
  slug: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
  };
};

type GalleryItem = {
  title: string;
  location?: string;
  date?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: string;
    };
  };
};

export default async function ArticlesPage() {

 
  const articles: Article[] =
    await client.fetch(articlesQuery);

  const galleryItems: GalleryItem[] =
    await client.fetch(articlesGalleryQuery);
    console.log("Gallery Items:", galleryItems);

  return (
    <main
      className="relative min-h-screen overflow-hidden text-[#2d2a26]"
      style={{
        fontFamily: "'Bahnschrift SemiCondensed', sans-serif",
        background:
          "linear-gradient(135deg,#f5f0ff 0%,#f7f4ff 40%,#faf8ff 100%)",
      }}
    >

      <FloatingBackButton
        href="/explore"
        label="Back To Explore"
      />

      {/* BACKGROUND GLOWS */}
      <div className="absolute left-[-100px] top-[-80px] h-[380px] w-[380px] rounded-full bg-[#d8c9f5]/40 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#ece2ff]/50 blur-3xl" />

      {/* HEADER */}
      <div className="relative z-20 mx-auto max-w-[1750px] px-6 pt-32">

        <div className="inline-flex items-center rounded-[2.6rem] border border-[#d8c9f5]/40 bg-white/70 px-10 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">

          <div className="mr-5 h-5 w-5 rounded-full bg-[#8f6ad9]" />

          <h1 className="text-5xl font-black tracking-[-0.05em] text-[#241f1b]">
            Articles
          </h1>

        </div>

      </div>

      {/* PRE 2026 LINK */}
      <div className="mx-auto mt-8 max-w-[1750px] px-6">

        <a
          href="https://seemagirijalal.com/featured-in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-[1.8rem] border border-[#d8c9f5]/40 bg-white/70 px-8 py-5 text-[15px] font-semibold tracking-[0.05em] text-[#5d4793] shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-2xl transition hover:bg-white"
        >
          For articles before 2026 click here →
        </a>

      </div>

      {/* CONTENT */}
      <section className="relative z-10 mx-auto max-w-[1750px] px-6 pb-24 pt-10">

        <div className="mt-8 grid grid-cols-[1fr_320px] gap-8">

          {/* ARTICLES */}
          <div className="grid grid-cols-3 gap-8">

            {articles.map((article, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-[2.7rem] border border-[#d8c9f5]/40 bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
              >

                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden bg-[linear-gradient(135deg,#e7ddfa_0%,#f4efff_60%,#fbf9ff_100%)]">

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_60%)]" />

                  {article.coverImage?.asset?._ref && (
                    <Image
                      src={urlFor(article.coverImage).url()}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  )}

                </div>

                {/* TEXT */}
                <div className="p-8">

                  <p className="text-[12px] uppercase tracking-[0.24em] text-[#6f54aa]">
                    {article.category}
                  </p>

                  <h3 className="mt-5 text-[34px] font-black leading-[1.05] tracking-[-0.03em] text-[#241f1b]">
                    {article.title}
                  </h3>

                  <div className="mt-8 flex items-center justify-between">

                    <p className="text-[13px] uppercase tracking-[0.18em] text-[#8b78b5]">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </p>

                    <a
                      href={`/articles/${article.slug}`}
                      className="rounded-full border border-[#cdb9f0] bg-[#efe7ff] px-5 py-3 text-[13px] uppercase tracking-[0.16em] text-[#5d4793] transition hover:bg-[#e6dcfb]"
                    >
                      Read More
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* MOVING GALLERY */}
          <div className="h-[900px] overflow-hidden rounded-[2.5rem] border border-[#d8c9f5]/40 bg-white/70 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl">

            <div
              className="flex flex-col gap-4"
              style={{
                animation: "scrollVertical 20s linear infinite",
              }}
            >

              {[...galleryItems, ...galleryItems].map((item, index) => (

                <div
                  key={index}
                  className="relative h-[220px] flex-shrink-0 overflow-hidden rounded-[1.8rem] border border-[#d8c9f5]/30"
                >

                  {item.image?.asset?._ref && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute bottom-0 p-5 text-white">

                    <h3 className="text-[18px] font-semibold leading-snug">
                      {item.title}
                    </h3>

                    {item.date && (
                      <p className="mt-2 text-[12px] uppercase tracking-[0.15em] text-white/80">
                        {new Date(item.date).getFullYear()}
                      </p>
                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}