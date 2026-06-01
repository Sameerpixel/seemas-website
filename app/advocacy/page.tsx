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
            Advocacy
          </h1>

          <div className="mt-10 space-y-8 text-[24px] leading-[2] text-[#4d4641]">

            <p>
             Advocacy forms a core pillar of Dr. Seema’s professional identity. As the Founder of “Together We Can (TWC)”, an advocacy forum supporting social issues and causes, she has been instrumental in driving policy-level change through Public Interest Litigation (PIL) and formal petitions to child and disability rights commissions.

A PIL filed by TWC led to the formulation of guidelines regulating therapy centres in Kerala, a first-of-its-kind initiative in India. Her ongoing PIL before the Supreme Court of India has generated critical legal pressure for States to implement the Rights of Persons with Disabilities (RPwD) Act, 2016. Her petition with the Kerala State Commission for Protection of Child Rights (KeSCPCR) resulted in mandatory training and sensitization of National Institute of Open Schooling (NIOS) personnel to better accommodate learners’ needs, particularly during examinations.

Through sustained engagement with print, visual, and social media, and by networking with fellow change-makers and organizations, her advocacy work has focused on making lived experiences matter, challenging stigma, and addressing social and economic inequalities related to mental health and disability.
            </p>

          

          </div>

        </div>

      </section>
    </main>
  );
}