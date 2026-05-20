import FloatingBackButton from "@/components/FloatingBackButton";
const sections = [
  {
    title: "About",
    subtitle: "Lived Experiences & Professional Journey",
    description:
      "Dr. Seema Girija Lal (Ph.D.) is a mental health, disability, and education consultant and trainer with over twenty-five years of professional experience across India and the United Arab Emirates.",

    button: "View About",
    href: "/about",

    tint: {
      bg: "bg-[linear-gradient(135deg,#b9d9f7_0%,#dcecfb_40%,#f4f9fd_100%)]",
      button:
        "border border-[#8cbbe7] bg-[#bfe0fb] text-[#25557c] hover:bg-[#afd6f7]",
      accent: "text-[#25557c]",
      card: "border-[#9fc9ec] bg-[#e3f0fb]/95",
    },
  },

  {
    title: "Articles",
    subtitle: "Research, Reflection & Advocacy",
    description:
      "Latest writings, reflections, and perspectives centred around education, empowerment, disability, inclusion, and lived experiences.",

    button: "Read More",
    href: "/articles",

    tint: {
      bg: "bg-[linear-gradient(135deg,#e2d8f7_0%,#f0eafe_45%,#faf7ff_100%)]",
      button:
        "border border-[#cdb9f0] bg-[#e6dcfb] text-[#5d4793] hover:bg-[#daccf8]",
      accent: "text-[#5d4793]",
      card: "border-[#d8c9f5] bg-[#f4efff]/95",
    },
  },

  {
    title: "YouTube",
    subtitle: "Talks, Sessions & Conversations",
    description:
      "Latest interviews, workshops, educational sessions, and advocacy-focused conversations across platforms.",

    button: "Watch Now",
    href: "/youtube",

    tint: {
      bg: "bg-[linear-gradient(135deg,#f3b2b2_0%,#f7d0d0_45%,#fff1f1_100%)]",
      button:
        "border border-[#df8f8f] bg-[#f5c4c4] text-[#8c2c2c] hover:bg-[#efb3b3]",
      accent: "text-[#8c2c2c]",
      card: "border-[#efb2b2] bg-[#fff1f1]/95",
    },
  },

  {
    title: "Gallery",
    subtitle: "Moments Across The Journey",
    description:
      "A visual timeline of meaningful work, training programmes, collaborations, speaking engagements, and community experiences.",

    button: "View Gallery",
    href: "/gallery",

    tint: {
      bg: "bg-[linear-gradient(135deg,#c7e8c9_0%,#dff3df_45%,#f4fcf4_100%)]",
      button:
        "border border-[#9fd2a2] bg-[#cdeccf] text-[#356c3b] hover:bg-[#bde3c0]",
      accent: "text-[#356c3b]",
      card: "border-[#b7ddb9] bg-[#eff9ef]/95",
    },
  },
];

export default function ExplorePage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden text-[#2d2a26]"
      style={{
        fontFamily: "'Bahnschrift SemiCondensed', sans-serif",
        background:
          "linear-gradient(135deg, #f3efe9 0%, #edf3f8 42%, #f8f4ef 100%)",
      }}
    >
      <FloatingBackButton
  href="/"
  label="Back To Home"
/>
      {/* BACKGROUND */}
      <div className="absolute left-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#dce6f2]/60 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[360px] w-[360px] rounded-full bg-[#f0dde2]/50 blur-3xl" />

     {/* HEADER */}
<div className="relative z-20 mx-auto max-w-[1750px] px-6 pt-32">

  <div className="flex flex-col items-start">

    <div className="relative rounded-[2.8rem] border border-white/30 bg-white/70 px-10 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">

      <div className="absolute left-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#ead9dc]/60 blur-3xl" />

      <h1 className="relative z-20 text-left text-3xl font-black tracking-[-0.05em] text-[#241f1b] md:text-5xl">
        Explore The Journey
      </h1>

    </div>

  </div>

</div>
      {/* CONTENT */}
      <section className="relative z-10 mx-auto max-w-[1750px] px-6 pb-20 pt-8">

        <div className="grid grid-cols-2 gap-8">

          {sections.map((section, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-[3rem] border shadow-[0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)] ${section.tint.card}`}
            >

              {/* PREVIEW SLIDESHOW */}
              <div
                className={`relative h-[320px] overflow-hidden ${section.tint.bg}`}
              >

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_60%)]" />

                {/* SLIDES */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="relative h-[230px] w-[82%]">

                    <div className="absolute left-0 top-6 h-[200px] w-[72%] rounded-[2rem] bg-white/50 shadow-xl backdrop-blur-xl" />

                    <div className="absolute left-10 top-0 z-10 h-[220px] w-[72%] rounded-[2rem] border border-white/40 bg-white/80 shadow-2xl backdrop-blur-2xl" />

                    <div className="absolute right-0 top-10 h-[190px] w-[62%] rounded-[2rem] bg-white/40 shadow-lg backdrop-blur-xl" />

                  </div>

                </div>

                {/* TEXT */}
                <div className="absolute bottom-0 z-20 p-8 text-[#3d3733]">

                  <p
                    className={`text-[12px] uppercase tracking-[0.28em] ${section.tint.accent}`}
                  >
                    {section.subtitle}
                  </p>

                  <h3 className="mt-3 text-5xl font-black tracking-[-0.03em]">
                    {section.title}
                  </h3>

                </div>

              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-between p-8">

                <p className="text-[22px] leading-[1.85] text-[#4d4641]">
                  {section.description}
                </p>

                <a
                  href={section.href}
                  className={`mt-10 inline-flex w-fit items-center rounded-full px-9 py-5 text-[19px] uppercase tracking-[0.16em] transition ${section.tint.button}`}
                >
                  {section.button}
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>
    </main>
  );
}