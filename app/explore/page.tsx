import Navbar from "../../components/Navbar";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#edf6ff] text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.35em] text-blue-500">
          Explore
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          A Journey Through Mental Wellness, Healing & Personal Growth
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          Discover therapy insights, educational resources, personal philosophy,
          wellness guidance, and meaningful conversations focused on emotional well-being.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-blue-500">
            About
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            Compassionate Therapy Rooted In Understanding & Human Connection
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
  Dr. Seema Girija Lal (Ph.D.) is a mental health, disability, and
  education consultant and trainer with over twenty-five years of
  professional experience across non-governmental organizations and
  private sector institutions in India and the United Arab Emirates.
</p>

<p className="mt-6 text-lg leading-8 text-slate-600">
  She currently offers online and in-person sessions, with a strong
  focus on family systems, schooling, and all stakeholders involved.
  Her work is deeply rooted in lived experiences, agency,
  vulnerability, and empowerment as foundations for sustainable change.
</p>

<p className="mt-6 text-lg leading-8 text-slate-600">
  Holding a Doctoral degree from Vrije University, Amsterdam,
  alongside advanced qualifications in psychology, special education,
  and social entrepreneurship, her interdisciplinary approach blends
  academic depth with compassionate practice.
</p>

          <a
            href="/about"
            className="mt-10 inline-block rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-blue-700 transition hover:bg-blue-100"
          >
            View More
          </a>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(37,99,235,0.18)]">
          <img
            src="/images/hero-1.webp"
            alt="About"
            className="h-[650px] w-full object-cover"
          />
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div className="order-2 lg:order-1 overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(37,99,235,0.18)]">
          <img
            src="/images/hero-2.webp"
            alt="Articles"
            className="h-[650px] w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-500">
            Articles
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            Insights & Guidance For Everyday Mental Wellness
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Explore articles focused on anxiety management, emotional resilience,
            stress reduction, relationships, mindfulness, and healthier living.
            Educational content is designed to make mental health conversations
            more approachable and empowering.
          </p>

          <a
            href="/articles"
            className="mt-10 inline-block rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-blue-700 transition hover:bg-blue-100"
          >
            View Articles
          </a>
        </div>
      </section>

      {/* YOUTUBE SECTION */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-blue-500">
            Videos
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            Educational Conversations & Mental Health Awareness
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Watch informative video content covering emotional health,
            counseling guidance, self-awareness, coping strategies,
            and wellness-focused discussions designed to educate and support.
          </p>

          <a
            href="/videos"
            className="mt-10 inline-block rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-blue-700 transition hover:bg-blue-100"
          >
            View Videos
          </a>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(37,99,235,0.18)]">
          <img
            src="/images/hero-3.webp"
            alt="Videos"
            className="h-[650px] w-full object-cover"
          />
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div className="order-2 lg:order-1 overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(37,99,235,0.18)]">
          <img
            src="/images/hero-4.webp"
            alt="Gallery"
            className="h-[650px] w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-500">
            Gallery
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
            Moments Of Connection, Wellness & Professional Practice
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Browse selected moments from workshops, counseling environments,
            wellness initiatives, educational sessions, and professional activities
            that reflect the values of empathy, growth, and emotional well-being.
          </p>

          <a
            href="/gallery"
            className="mt-10 inline-block rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-blue-700 transition hover:bg-blue-100"
          >
            View Gallery
          </a>
        </div>
      </section>
    </main>
  );
}