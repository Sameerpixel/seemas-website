import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#edf6ff] text-slate-900">
      
      <Navbar />

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blue-500">
            About The Therapist
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-tight md:text-6xl">
            Creating A Safe Space For Emotional Healing & Growth
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            With years of experience in mental wellness and counseling, 
            Seema focuses on helping individuals navigate emotional challenges, 
            anxiety, stress, relationships, and personal growth through 
            compassionate and evidence-based therapeutic approaches.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Her goal is to provide a supportive environment where clients 
            feel heard, understood, and empowered to build healthier lives.
          </p>

          <div className="mt-10 flex gap-10">
            <div>
              <h3 className="text-3xl font-semibold text-blue-700">
                10+
              </h3>

              <p className="mt-2 text-slate-600">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-blue-700">
                500+
              </h3>

              <p className="mt-2 text-slate-600">
                Consultations
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(37,99,235,0.2)]">
          
          <img
            src="/images/hero-1.webp"
            alt="Seema"
            className="h-[700px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
        </div>
      </section>
    </main>
  );
}