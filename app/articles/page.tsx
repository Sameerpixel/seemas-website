import {client} from "@/sanity/lib/client";

import {
  featuredArticleQuery,
  articlesQuery,
} from "@/sanity/lib/queries";

export default async function ArticlesPage() {

  const featuredArticle = await client.fetch(featuredArticleQuery);

  const articles = await client.fetch(articlesQuery);

  return (
    <main
      className="relative min-h-screen overflow-hidden text-[#2d2a26]"
      style={{
        fontFamily: "'Bahnschrift SemiCondensed', sans-serif",
        background:
          "linear-gradient(135deg,#f5f0ff 0%,#f7f4ff 40%,#faf8ff 100%)",
      }}
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-[-100px] top-[-80px] h-[380px] w-[380px] rounded-full bg-[#d8c9f5]/40 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[340px] w-[340px] rounded-full bg-[#ece2ff]/50 blur-3xl" />

      {/* HEADER */}
      <div className="sticky top-4 z-50 px-6 pt-4">

        <div className="inline-flex items-center rounded-[2.6rem] border border-[#d8c9f5]/40 bg-white/70 px-10 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">

          <div className="mr-5 h-5 w-5 rounded-full bg-[#8f6ad9]" />

          <h1 className="text-5xl font-black tracking-[-0.05em] text-[#241f1b]">
            Articles
          </h1>

        </div>

      </div>

      {/* CONTENT */}
      <section className="relative z-10 mx-auto max-w-[1750px] px-6 pb-24 pt-10">

        {/* FEATURED ARTICLE */}
        {featuredArticle && (
          <div className="overflow-hidden rounded-[3rem] border border-[#d8c9f5]/50 bg-[#f4efff]/95 shadow-[0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">

            {/* HERO */}
            <div className="relative h-[340px] overflow-hidden bg-[linear-gradient(135deg,#e2d8f7_0%,#f0eafe_45%,#faf7ff_100%)]">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_60%)]" />

              {/* DUMMY ARTICLE PREVIEW */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="relative h-[220px] w-[78%]">

                  <div className="absolute left-0 top-6 h-[190px] w-[70%] rounded-[2rem] bg-white/50 shadow-xl backdrop-blur-xl" />

                  <div className="absolute left-12 top-0 z-10 h-[220px] w-[72%] rounded-[2rem] border border-white/40 bg-white/80 shadow-2xl backdrop-blur-2xl" />

                  <div className="absolute right-0 top-10 h-[180px] w-[58%] rounded-[2rem] bg-white/40 shadow-lg backdrop-blur-xl" />

                </div>

              </div>

              {/* TEXT */}
              <div className="absolute bottom-0 z-20 p-10">

                <p className="text-[13px] uppercase tracking-[0.3em] text-[#6f54aa]">
                  {featuredArticle.category}
                </p>

                <h2 className="mt-4 max-w-[900px] text-6xl font-black leading-[0.95] tracking-[-0.04em] text-[#241f1b]">
                  {featuredArticle.title}
                </h2>

              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="flex items-end justify-between gap-10 p-10">

              <div>

                <p className="max-w-[1000px] text-[24px] leading-[1.9] text-[#4d4641]">
                  {featuredArticle.excerpt}
                </p>

                <p className="mt-6 text-[15px] uppercase tracking-[0.24em] text-[#8b78b5]">
                  {new Date(featuredArticle.publishedAt).toLocaleDateString()}
                </p>

              </div>

              <a
                href={`/articles/${featuredArticle.slug}`}
                className="rounded-full border border-[#cdb9f0] bg-[#e6dcfb] px-10 py-5 text-[18px] uppercase tracking-[0.16em] text-[#5d4793] transition hover:bg-[#daccf8]"
              >
                Read Article
              </a>

            </div>

          </div>
        )}

        {/* ARTICLE GRID */}
        <div className="mt-10 grid grid-cols-3 gap-7">

          {articles.map((article: {
  title: string;
  category: string;
  publishedAt: string;
  slug: string;
}, index: number) => (
            <div
              key={index}
              className="overflow-hidden rounded-[2.5rem] border border-[#d8c9f5]/40 bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
            >

              {/* TOP VISUAL */}
              <div className="relative h-[220px] overflow-hidden bg-[linear-gradient(135deg,#e7ddfa_0%,#f4efff_60%,#fbf9ff_100%)]">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_60%)]" />

                {/* DUMMY SLIDES */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="relative h-[140px] w-[75%]">

                    <div className="absolute left-0 top-5 h-[110px] w-[70%] rounded-[1.5rem] bg-white/50 shadow-lg" />

                    <div className="absolute left-8 top-0 z-10 h-[130px] w-[72%] rounded-[1.5rem] border border-white/40 bg-white/80 shadow-xl" />

                    <div className="absolute right-0 top-8 h-[100px] w-[55%] rounded-[1.5rem] bg-white/40 shadow-md" />

                  </div>

                </div>

              </div>

              {/* TEXT */}
              <div className="p-7">

                <p className="text-[12px] uppercase tracking-[0.24em] text-[#6f54aa]">
                  {article.category}
                </p>

                <h3 className="mt-4 text-[30px] font-black leading-[1.05] tracking-[-0.03em] text-[#241f1b]">
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

      </section>
    </main>
  );
}