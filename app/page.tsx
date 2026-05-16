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
    <main className="min-h-screen overflow-hidden bg-[#edf6ff] text-[#0f172a]">
      
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* LEFT CONTENT */}
        <div>
          
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#3b82f6]">
            Mental Wellness • Counseling • Therapy
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[#0f172a] md:text-6xl">
            Compassionate Support For Your Mental Well-Being
          </h1>

          {/* ACTION TILES */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            
            {/* KNOW MORE TILE */}
            <div className="group overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_10px_40px_rgba(59,130,246,0.12)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]">
              
              <div className="relative h-[190px] overflow-hidden">
                <img
                  src="/images/hero-1.webp"
                  alt="About Seema"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
              </div>

              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-blue-500">
                  About The Therapist
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  Know More About Me
                </h3>

                <a
                  href="/explore"
                  className="mt-5 inline-block rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm text-blue-700 transition hover:bg-blue-100"
                >
                  Know More
                </a>
              </div>
            </div>

            {/* GET HELP TILE */}
            <div className="group overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_10px_40px_rgba(59,130,246,0.12)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]">
              
              <div className="relative h-[190px] overflow-hidden">
                <img
                  src="/images/hero-6.webp"
                  alt="Get Help"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
              </div>

              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-blue-500">
                  Start Your Journey
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  Get Professional Support
                </h3>

                <button className="mt-5 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm text-blue-700 transition hover:bg-blue-100">
                  Get Help
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT MOVING GALLERY */}
        <div className="relative h-[520px] overflow-hidden rounded-[2rem]">
          
          <div className="animate-scroll flex flex-col gap-5">
            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(37,99,235,0.2)]"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-900/10 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-blue-200">
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