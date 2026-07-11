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
      <div className="absolute left-[-60px] top-[-60px] h-[200px] w-[200px] rounded-full bg-[#dfe8f3]/50 blur-3xl md:left-[-120px] md:top-[-120px] md:h-[420px] md:w-[420px]" />

      <div className="absolute bottom-[-80px] right-[-60px] h-[180px] w-[180px] rounded-full bg-[#f0dfe3]/40 blur-3xl md:bottom-[-150px] md:right-[-100px] md:h-[380px] md:w-[380px]" />

      {/* FLOATING TITLE SYSTEM */}
      <div className="sticky top-2 z-50 px-4 md:top-4 md:px-6">

        <div className="flex flex-col items-start">

          {/* TITLE BLOB */}
          <div className="relative rounded-[1.8rem] border border-white/30 bg-white/70 px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl md:rounded-[2.8rem] md:px-10 md:py-6">

            <div className="absolute left-0 top-1/2 h-24 w-24 -translate-y-1/2 animate-[floatX_14s_ease-in-out_infinite] rounded-full bg-[#ead9dc]/60 blur-3xl md:h-40 md:w-40" />

            <h1 className="relative z-20 text-left text-xl font-black tracking-[-0.05em] text-[#241f1b] md:text-5xl">
              Dr Seema Girija Lal PhD
            </h1>
          </div>

          {/* MOVING THREAD */}
          <div className="mt-3 w-full overflow-hidden md:mt-4">

            <div className="inline-block rounded-full border border-white/30 bg-white/60 px-4 py-2 backdrop-blur-2xl md:px-6 md:py-3">

              <div className="whitespace-nowrap animate-[marquee_38s_linear_infinite] text-[13px] font-semibold tracking-[0.2em] text-[#5f4a51] md:text-[22px] md:tracking-[0.28em]">

                <span className="uppercase">
                  MAKING LIVED EXPERIENCES MATTER
                </span>

                <span className="mx-5 text-[#b09399] md:mx-10">
                  |
                </span>

                <span className="italic">
                  Understanding Vulnerability, Agency And Empowerment
                </span>

                <span className="mx-10 text-[#b09399] md:mx-20">
                  •
                </span>

                <span className="uppercase">
                  MAKING LIVED EXPERIENCES MATTER
                </span>

                <span className="mx-5 text-[#b09399] md:mx-10">
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
      <section className="relative z-10 mx-auto h-auto max-w-[1750px] px-4 py-4 md:h-[calc(100vh-180px)] md:px-6 md:py-6">

        {/* FIELD TILES */}
<div className="mb-4 grid grid-cols-2 gap-2 md:mb-6 md:grid-cols-5 md:gap-4">

  <a
    href="/mental-health"
    className="rounded-full border border-[#dbe6f0] bg-[#eef4fa]/90 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4d6781] shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#e3eef8] md:py-5 md:text-[17px] md:tracking-[0.16em]"
  >
    Mental Health
  </a>

  <a
    href="/education"
    className="rounded-full border border-[#eedde1] bg-[#faf4f5]/90 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8b5d66] shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#f5ebed] md:py-5 md:text-[17px] md:tracking-[0.16em]"
  >
    Education
  </a>

  <a
    href="/advocacy"
    className="rounded-full border border-[#dbe6f0] bg-[#eef4fa]/90 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4d6781] shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#e3eef8] md:py-5 md:text-[17px] md:tracking-[0.16em]"
  >
    Advocacy
  </a>

  <a
    href="/networking"
    className="rounded-full border border-[#eedde1] bg-[#faf4f5]/90 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8b5d66] shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#f5ebed] md:py-5 md:text-[17px] md:tracking-[0.16em]"
  >
    Networking
  </a>

  <a
    href="/disability"
    className="col-span-2 rounded-full border border-[#dbe6f0] bg-[#eef4fa]/90 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4d6781] shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-[#e3eef8] md:col-span-1 md:py-5 md:text-[17px] md:tracking-[0.16em]"
  >
    Disability
  </a>

</div>

        {/* MAIN GRID */}
        <div className="grid h-auto grid-cols-1 gap-4 md:h-[calc(100%-90px)] md:grid-cols-[40%_40%_20%] md:gap-5">


          {/* KNOW MORE */}
<div className="relative h-[380px] overflow-hidden rounded-[1.8rem] border border-white/30 shadow-[0_12px_40px_rgba(0,0,0,0.04)] md:h-full md:rounded-[2.5rem]">

  <img
    src="/about/know-more.jpg"
    alt="Dr. Seema"
    className="h-full w-full object-cover transition duration-700 hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b18]/60 via-[#1f1b18]/10 to-transparent" />

  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">

    <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 md:text-[11px] md:tracking-[0.24em]">
      About The Consultant
    </p>

    <div className="mt-3 flex items-center justify-between md:mt-4">

      <h2 className="text-3xl font-semibold text-white md:text-5xl">
        Know More
      </h2>

      <a
  href="/explore"
  className="inline-flex items-center rounded-full border border-[#dce7f1] bg-[#eef4fa]/95 px-5 py-3 text-[12px] uppercase tracking-[0.1em] text-[#4d6781] shadow-lg transition hover:bg-[#e4edf6] md:px-8 md:py-4 md:text-[16px] md:tracking-[0.15em]"
>
  Know More
</a>

    </div>

  </div>

</div>
         {/* GET HELP */}
<div className="relative h-[380px] overflow-hidden rounded-[1.8rem] border border-white/30 shadow-[0_12px_40px_rgba(0,0,0,0.04)] md:h-full md:rounded-[2.5rem]">

  <img
    src="/about/get-help.jpg"
    alt="Consultation"
    className="h-full w-full object-cover transition duration-700 hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b18]/60 via-[#1f1b18]/10 to-transparent" />

  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">

    <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 md:text-[11px] md:tracking-[0.24em]">
      Start Your Journey
    </p>

    <div className="mt-3 flex items-center justify-between md:mt-4">

      <h2 className="text-3xl font-semibold text-white md:text-5xl">
        Get Help
      </h2>

    <a
  href="https://wa.me/917994155575"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center rounded-full border border-[#eedde1] bg-[#faf4f5]/95 px-5 py-3 text-[12px] uppercase tracking-[0.1em] text-[#8b5d66] shadow-lg transition hover:bg-[#f3e9eb] md:px-8 md:py-4 md:text-[16px] md:tracking-[0.15em]"
>
  Get Help
</a>

    </div>

  </div>

</div>
          {/* MOVING GALLERY */}
<div className="h-[420px] overflow-hidden rounded-[1.8rem] border border-white/30 bg-white/70 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl md:h-full md:rounded-[2.5rem] md:p-4">

  <div
    className="flex flex-col gap-3 md:gap-4"
    style={{
      animation: "scrollVertical 20s linear infinite",
    }}
  >

    {[...images, ...images].map((item, index) => (

      <div
        key={index}
        className="relative h-[180px] flex-shrink-0 overflow-hidden rounded-[1.4rem] border border-white/40 shadow-sm md:h-[220px] md:rounded-[1.8rem]"
      >

        {item.image?.asset?._ref && (
          <Image
            src={urlFor(item.image).url()}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 220px"
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {item.date && (
          <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-bold tracking-[0.1em] text-[#5f4a51] backdrop-blur-xl md:top-4 md:left-4 md:px-4 md:py-2 md:text-[14px] md:tracking-[0.15em]">
            {new Date(item.date).getFullYear()}
          </div>
        )}

        <div className="absolute bottom-0 p-4 text-white md:p-5">

          <h3 className="text-[15px] font-semibold leading-snug md:text-[18px]">
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