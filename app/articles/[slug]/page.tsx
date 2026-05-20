import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import FloatingBackButton from "@/components/FloatingBackButton";
import { PortableText } from "@portabletext/react";

async function getArticle(slug: string) {
  return client.fetch(
    `
    *[_type == "article" && slug.current == $slug][0]{
      title,
      category,
      publishedAt,
      excerpt,
      body,
      coverImage
    }
    `,
    { slug }
  );
}

type Article = {
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;

  body: {
    _type: string;
    _key: string;
    children?: {
      _type: string;
      text: string;
      _key: string;
    }[];
  }[];

  coverImage?: {
    asset?: {
      _ref: string;
      _type: string;
    };
  };
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const article: Article | null = await getArticle(slug);

  if (!article) {
    return (
      <main className="p-20 text-3xl">
        Article not found
      </main>
    );
  }

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#faf7ff]"
      style={{
        fontFamily: "'Bahnschrift SemiCondensed', sans-serif",
      }}
    >

      {/* BACKGROUND GLOWS */}
     <FloatingBackButton
  href="/articles"
  label="Back To Articles"
/>;

      {/* HERO */}
      <section className="relative overflow-hidden pt-36">

        <div className="mx-auto grid max-w-[1450px] grid-cols-2 gap-14 px-8 pb-20">

          {/* LEFT */}
          <div className="flex flex-col justify-center">

            <p className="text-[14px] uppercase tracking-[0.3em] text-[#8a70c7]">
              {article.category}
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.96] tracking-[-0.045em] text-[#241f1b] md:text-[68px]">
              {article.title}
            </h1>

            <div className="mt-8 flex items-center gap-5">

              <div className="h-2 w-2 rounded-full bg-[#9f83e8]" />

              <p className="text-[14px] uppercase tracking-[0.22em] text-[#907bbd]">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>

            </div>

            <p className="mt-12 max-w-[720px] border-l-4 border-[#cbb7ff] pl-8 text-[28px] leading-[1.8] tracking-[-0.02em] text-[#4a425b]">
              {article.excerpt}
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[470px] overflow-hidden rounded-[3rem] border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

            {article.coverImage?.asset?._ref && (
              <Image
                src={urlFor(article.coverImage).url()}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
            )}

          </div>

        </div>

      </section>

      {/* ARTICLE BODY */}
      <section className="relative z-10 pb-32">

        <div className="mx-auto max-w-[1100px] rounded-[3rem] border border-white/30 bg-white/72 px-12 py-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl md:px-20">

          {/* BODY */}
          <div className="prose prose-xl max-w-none prose-headings:font-black prose-headings:text-[#241f1b] prose-p:text-[#4d4641] prose-p:leading-[2.2] prose-p:text-[22px] prose-strong:text-[#241f1b]">

            <PortableText value={article.body} />

          </div>

        </div>

      </section>

    </main>
  );
}