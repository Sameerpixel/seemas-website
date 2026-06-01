import FloatingBackButton from "@/components/FloatingBackButton";

export default function MentalHealthPage() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f5f0ff_0%,#f8f4ff_50%,#fcfbff_100%)]"
      style={{
        fontFamily: "'Bahnschrift SemiCondensed', sans-serif",
      }}
    >
      <FloatingBackButton
        href="/"
        label="Back To Home"
      />

      <div className="fixed left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#dcecfb]/50 blur-3xl" />

      <div className="fixed bottom-[-140px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#b9d9f7]/40 blur-3xl" />

      <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-32">

        <div className="rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/90 p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl">

          <p className="text-[14px] uppercase tracking-[0.28em] text-[#25557c]">
            Area Of Practice
          </p>

          <h1 className="mt-4 text-6xl font-black tracking-[-0.05em] text-[#241f1b]">
            Education
          </h1>

          <div className="mt-10 space-y-8 text-[24px] leading-[2] text-[#4d4641]">

            <p>
              Following Rehabilitation Council of India (RCI)–approved coursework, Dr. Seema has been actively engaged with special schools, rehabilitation centres, private clinics, and mainstream schools for over two decades. Through both direct and online consultancy, she has supported educational institutions in developing inclusive, responsive, and sustainable learning environments.

Her doctoral research on the journeys of mothers of autistic children in India informs her education-focused work, bridging policy and practice to address long-term systemic gaps. She works closely with educators, parents, and institutions to strengthen inclusive schooling models, promote learner-centred practices, and build awareness around neurodiversity and diverse learning needs.
            </p>

           

          </div>

        </div>

      </section>
    </main>
  );
}