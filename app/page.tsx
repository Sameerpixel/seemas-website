const images = [
  {
    src: "/images/hero-1.webp",
    title: "Emotional Wellness",
  },
  {
    src: "/images/hero-2.webp",
    title: "Compassionate Therapy",
  },
  {
    src: "/images/hero-3.webp",
    title: "Personal Growth",
  },
  {
    src: "/images/hero-4.webp",
    title: "Mental Balance",
  },
  {
    src: "/images/hero-5.webp",
    title: "Safe Space",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3ece4] text-[#2d2a26]">

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,177,120,0.18),transparent_30%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(112,146,190,0.12),transparent_35%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* TOP BAR */}
     {/* TOP BAR */}
<div className="relative z-20 border-b border-[#d8c5aa]/60 bg-[#efe1cf]/80 backdrop-blur-md">
  
  <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-6 py-4">
    
    <div className="h-[1px] w-12 bg-[#b89568]/50" />

    <p className="text-center text-sm font-medium tracking-[0.18em] text-[#6a5240] uppercase">
      Seeking Help Is Taking Responsibility
    </p>

    <div className="h-[1px] w-12 bg-[#b89568]/50" />

  </div>
</div>

      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        
        {/* LEFT CONTENT */}
        <div>
          
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#8c6a43]">
            Mental Health • Education • Advocacy
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-[#2b2622] md:text-7xl">
            Dr. Seema Girija Lal
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5c534c]">
            Mental health, disability, and education consultant focused on
            creating meaningful change through lived experiences, empowerment,
            advocacy, and emotional well-being.
          </p>

          {/* ACTION TILES */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            
            {/* KNOW MORE TILE */}
            <div className="group overflow-hidden rounded-[2rem] border border-[#dbc7ab] bg-[#edd5ae] shadow-[0_12px_40px_rgba(120,92,58,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(120,92,58,0.14)]">
              
              <div className="relative h-[190px] overflow-hidden">
                <img
                  src="/images/hero-1.webp"
                  alt="About Seema"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2e241d]/40 to-transparent" />
              </div>

              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#7d5d38]">
                  About The Therapist
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#2d2925]">
                  Know More About Me
                </h3>

                <a
                  href="/explore"
                  className="mt-5 inline-block rounded-full bg-[#5d86b4] px-5 py-2.5 text-sm text-white transition hover:bg-[#4b739f]"
                >
                  Know More
                </a>
              </div>
            </div>

            {/* GET HELP TILE */}
            <div className="group overflow-hidden rounded-[2rem] border border-[#dbc7ab] bg-[#edd5ae] shadow-[0_12px_40px_rgba(120,92,58,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(120,92,58,0.14)]">
              
              <div className="relative h-[190px] overflow-hidden">
                <img
                  src="/images/hero-6.webp"
                  alt="Get Help"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2e241d]/40 to-transparent" />
              </div>

              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#7d5d38]">
                  Start Your Journey
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#2d2925]">
                  Get Professional Support
                </h3>

                <button className="mt-5 rounded-full bg-[#c9787f] px-5 py-2.5 text-sm text-white transition hover:bg-[#b76870]">
                  Get Help
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT MOVING GALLERY */}
        <div className="relative h-[540px] overflow-hidden rounded-[2.5rem]">
          
          <div className="animate-scroll flex flex-col gap-5">
            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-[#d9c4a7] shadow-[0_12px_45px_rgba(82,58,36,0.12)]"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-[250px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2d231d]/70 via-[#2d231d]/10 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#e4d0b8]">
                    Mental Wellness
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold">
                    {image.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}