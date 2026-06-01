"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role?: string;
};

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials?.length) {
    return null;
  }

  const next = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="relative mt-24">

      {/* HEADER */}
      <div className="mb-10 flex items-center justify-between">

        <div>

          <p className="text-[13px] uppercase tracking-[0.3em] text-[#a07f2e]">
            Voices & Experiences
          </p>

          <h2 className="mt-2 text-[48px] font-black tracking-[-0.05em] text-[#7c5d18]">
            Testimonials
          </h2>

        </div>

        {/* ARROWS */}
        <div className="flex gap-4">

          <button
            onClick={previous}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e6d39a]/50 bg-[#fff5d6]/70 text-2xl text-[#8c6a1f] shadow-[0_8px_30px_rgba(214,185,98,0.15)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#ffefbe]/90"
          >
            ←
          </button>

          <button
            onClick={next}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e6d39a]/50 bg-[#fff5d6]/70 text-2xl text-[#8c6a1f] shadow-[0_8px_30px_rgba(214,185,98,0.15)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#ffefbe]/90"
          >
            →
          </button>

        </div>

      </div>

      {/* CARD */}
      <div className="relative overflow-hidden rounded-[3rem] border border-[#e6d39a]/40 bg-[#fff8e4]/75 p-14 shadow-[0_15px_50px_rgba(214,185,98,0.12)] backdrop-blur-2xl">

        {/* GOLD GLOW */}
        <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#f7df96]/35 blur-3xl" />

        <div className="relative z-10">

          {/* QUOTE MARK */}
          <div className="mb-8 text-8xl leading-none text-[#d8bc63]">
            &ldquo;
          </div>

          {/* QUOTE */}
          <p className="max-w-[1200px] text-[30px] leading-[1.9] tracking-[-0.01em] text-[#4d4641]">
            {testimonial.quote}
          </p>

          {/* AUTHOR */}
          <div className="mt-12">

            <h3 className="text-[28px] font-black tracking-[-0.03em] text-[#7c5d18]">
              {testimonial.name}
            </h3>

            {testimonial.role && (
              <p className="mt-2 text-[13px] uppercase tracking-[0.22em] text-[#a07f2e]">
                {testimonial.role}
              </p>
            )}

          </div>

          {/* INDICATOR */}
          <div className="mt-12 flex gap-3">

            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-12 bg-[#cfa63a]"
                    : "w-3 bg-[#e8d9aa]"
                }`}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}