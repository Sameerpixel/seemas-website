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
            Disability
          </h1>

          <div className="mt-10 space-y-8 text-[24px] leading-[2] text-[#4d4641]">

            <p>
           Dr. Seema has played a leading role in setting up inclusive education systems within mainstream schools, working extensively with school administrators, teachers, parents, and students. Her training programs and talks span a wide range of themes, including child development, classroom-based intervention strategies, and teacher support from preschool onwards.

For students of all age groups, her work addresses life skills, study strategies, child safety, sexual health and hygiene, and social and emotional wellbeing, among others. She also conducts parent empowerment programs and supports teachers and families in developing and implementing Individualized Education Programs (IEPs)—both at school and at home—ensuring continuity of support across environments.
            </p>

           

          </div>

        </div>

      </section>
    </main>
  );
}