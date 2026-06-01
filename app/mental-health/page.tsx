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
            Mental Health
          </h1>

          <div className="mt-10 space-y-8 text-[24px] leading-[2] text-[#4d4641]">

            <p>
              With academic training spanning bachelor’s, master’s, and doctoral levels in psychology, Dr. Seema’s mental health practice is deeply grounded in trauma-informed, non-pathologizing approaches. Her work emphasizes co-creation of knowledge with clients, collaborative skill-building, and the expansion of individual and family support systems. She does not subscribe to a rigid biomedical model of diagnosis and labelling, instead focusing on context, lived experience, and personal strengths.

She provides one-on-one and group sessions for individuals and families seeking support across a wide range of life challenges, including learning, relationships, careers, emotional wellbeing, and personal transitions. Her clients are based across India, the Middle East, the United Kingdom, the Netherlands, Sri Lanka, Australia, and North and South America, reflecting the global reach of her practice.
            </p>

            <p>
              Her work emphasizes co-creation of knowledge with
              clients, collaborative skill-building, and the expansion
              of individual and family support systems...
            </p>

            <p>
              She provides one-on-one and group sessions for
              individuals and families seeking support across a wide
              range of life challenges...
            </p>

          </div>

        </div>

      </section>
    </main>
  );
}