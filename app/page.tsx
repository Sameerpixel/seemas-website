import Image from "next/image";

import { client } from "@/sanity/lib/client";
import { featuredGalleryQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type GalleryItem = {
  title: string;
  date?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: string;
    };
  };
};

export default async function Home() {

  const images: GalleryItem[] =
    await client.fetch(featuredGalleryQuery);
  return (
    <main
      className="relative min-h-screen overflow-hidden text-[#2d2a26]"
      style={{
        fontFamily: "'Bahnschrift SemiCondensed', sans-serif",
        background:
          "linear-gradient(135deg, #f5f1ec 0%, #eef2f7 45%, #f7f3ef 100%)",
      }}
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#dfe8f3]/50 blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-100px] h-[380px] w-[380px] rounded-full bg-[#f0dfe3]/40 blur-3xl" />

      {/* FLOATING TITLE SYSTEM */}
      <div className="sticky top-4 z-50 px-6">

        <div className="flex flex-col items-start">

          {/* TITLE BLOB */}
          <div className="relative rounded-[2.8rem] border border-white/30 bg-white/70 px-10 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">

            <div className="absolute left-0 top-1/2 h-40 w-40 -translate-y-1/2 animate-[floatX_14s_ease-in-out_infinite] rounded-full bg-[#ead9dc]/60 blur-3xl" />

            <h1 className="relative z-20 text-left text-3xl font-black tracking-[-0.05em] text-[#241f1b] md:text-5xl">
              Dr Seema Girija Lal PhD
            </h1>
          </div>

          {/* MOVING THREAD */}
          <div className="mt-4 w-full overflow-hidden">

            <div className="inline-block rounded-full border border-white/30 bg-white/60 px-6 py-3 backdrop-blur-2xl">

              <div className="whitespace-nowrap animate-[marquee_38s_linear_infinite] text-[22px] font-semibold tracking-[0.28em] text-[#5f4a51]">

                <span className="uppercase">
                  MAKING LIVED EXPERIENCES MATTER
                </span>

                <span className="mx-10 text-[#b09399]">
                  |
                </span>

                <span className="italic">
                  Understanding Vulnerability, Agency And Empowerment
                </span>

                <span className="mx-20 text-[#b09399]">
                  •
                </span>

                <span className="uppercase">
                  MAKING LIVED EXPERIENCES MATTER
                </span>

                <span className="mx-10 text-[#b09399]">
                  |
                </span>

                <span className="italic">
                  Understanding Vulnerability, Agency And Empowerment
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* MAIN SECTION */}
      <section className="relative z-10 mx-auto h-[calc(100vh-180px)] max-w-[1750px] px-6 py-6">

        {/* FIELD TILES */}
<div className="mb-6 grid grid-cols-5 gap-4">

  <a
    href="/mental-health"
    className="rounded-full border border-[#dbe6f0] bg-[#eef4fa]/90 py-5 text-center text-[17px] font-semibold uppercase tracking-[0.16em] text-[#4d6781] shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#e3eef8]"
  >
    Mental Health
  </a>

  <a
    href="/education"
    className="rounded-full border border-[#eedde1] bg-[#faf4f5]/90 py-5 text-center text-[17px] font-semibold uppercase tracking-[0.16em] text-[#8b5d66] shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#f5ebed]"
  >
    Education
  </a>

  <a
    href="/advocacy"
    className="rounded-full border border-[#dbe6f0] bg-[#eef4fa]/90 py-5 text-center text-[17px] font-semibold uppercase tracking-[0.16em] text-[#4d6781] shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#e3eef8]"
  >
    Advocacy
  </a>

  <a
    href="/networking"
    className="rounded-full border border-[#eedde1] bg-[#faf4f5]/90 py-5 text-center text-[17px] font-semibold uppercase tracking-[0.16em] text-[#8b5d66] shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#f5ebed]"
  >
    Networking
  </a>

  <a
    href="/disability"
    className="rounded-full border border-[#dbe6f0] bg-[#eef4fa]/90 py-5 text-center text-[17px] font-semibold uppercase tracking-[0.16em] text-[#4d6781] shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#e3eef8]"
  >
    Disability
  </a>

</div>

        {/* MAIN GRID */}
        <div className="grid h-[calc(100%-90px)] grid-cols-[40%_40%_20%] gap-5">

          {/* KNOW MORE */}
          <div className="flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl">

            <div className="relative h-[48%] overflow-hidden bg-[linear-gradient(135deg,#edf2f7_0%,#f7f1f2_100%)]">

              {/* SOFT PLACEHOLDER */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_60%)]" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b18]/35 via-transparent to-transparent" />

              <div className="absolute bottom-0 p-7 text-[#4d4641]">

                <p className="text-[11px] uppercase tracking-[0.24em] text-[#7a6b66]">
                  About The Therapist
                </p>

                <h2 className="mt-2 text-5xl font-semibold">
                  Know More
                </h2>

              </div>

            </div>

            <div className="flex flex-1 flex-col justify-between p-8">

              <p className="text-[21px] leading-[1.7] text-[#4d4641]">
                Explore the philosophy, lived experiences,
                interdisciplinary practice, and advocacy shaping
                over twenty-five years of meaningful work.
              </p>

              <a
                href="/explore"
                className="inline-flex w-fit items-center rounded-full border border-[#dce7f1] bg-[#eef4fa] px-9 py-5 text-[20px] uppercase tracking-[0.15em] text-[#4d6781] transition hover:bg-[#e4edf6]"
              >
                Explore More
              </a>

            </div>
          </div>

          {/* GET HELP */}
          <div className="flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl">

            <div className="relative h-[48%] overflow-hidden bg-[linear-gradient(135deg,#edf2f7_0%,#f7f1f2_100%)]">

              {/* SOFT PLACEHOLDER */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_60%)]" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b18]/35 via-transparent to-transparent" />

              <div className="absolute bottom-0 p-7 text-[#4d4641]">

                <p className="text-[11px] uppercase tracking-[0.24em] text-[#7a6b66]">
                  Start Your Journey
                </p>

                <h2 className="mt-2 text-5xl font-semibold">
                  Get Help
                </h2>

              </div>

            </div>

            <div className="flex flex-1 flex-col justify-between p-8">

              <p className="text-[21px] leading-[1.7] text-[#4d4641]">
                Professional consultations focused on emotional
                wellness, disability, family systems, education,
                and sustainable empowerment.
              </p>

              <a
  href="https://wa.me/917994155575"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block w-fit rounded-full border border-[#eedde1] bg-[#faf4f5] px-9 py-5 text-[20px] uppercase tracking-[0.15em] text-[#8b5d66] transition hover:bg-[#f3e9eb]"
>
  Book Consultation
</a>

            </div>
          </div>

          {/* MOVING GALLERY */}
<div className="h-full overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/70 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl">

  <div
    className="flex flex-col gap-4"
    style={{
      animation: "scrollVertical 20s linear infinite",
    }}
  >

    {[...images, ...images].map((item, index) => (

      <div
        key={index}
        className="relative h-[220px] flex-shrink-0 overflow-hidden rounded-[1.8rem] border border-white/40 shadow-sm"
      >

        {item.image?.asset?._ref && (
          <Image
            src={urlFor(item.image).url()}
            alt={item.title}
            fill
            sizes="220px"
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {item.date && (
          <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-2 text-[14px] font-bold tracking-[0.15em] text-[#5f4a51] backdrop-blur-xl">
            {new Date(item.date).getFullYear()}
          </div>
        )}

        <div className="absolute bottom-0 p-5 text-white">

          <h3 className="text-[18px] font-semibold leading-snug">
            {item.title}
          </h3>

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