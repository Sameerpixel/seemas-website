"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FloatingBackButton from "@/components/FloatingBackButton";

/* ─── ARCH DATA ─── */
const archSteps = [
  {
    letter: "A",
    label: "Awareness",
    title: "Awareness & Vulnerability",
    description:
      "We begin by acknowledging we don't have all the answers. Vulnerability means being open to what your mind, body, and emotions are telling you — uncovering insights and making room for meaningful change.",
  },
  {
    letter: "R",
    label: "Regulation",
    title: "Regulation & Agency",
    description:
      "We learn to manage emotions without making permanent decisions from temporary states. Grounding techniques and self-soothing strategies help us respond thoughtfully — not react blindly.",
  },
  {
    letter: "C",
    label: "Choice",
    title: "Choice & Empowerment",
    description:
      "We move from coping to making intentional choices. Working on clarity — deciding what, when, and how to communicate — and practising non-violent communication every step of the way.",
  },
  {
    letter: "H",
    label: "Health",
    title: "Health, Healing & Hygiene",
    description:
      "We zoom in on a specific event to understand exactly how it unfolded, then zoom out to identify patterns — discerning whether we were coping or consciously choosing — bridging knowledge gaps.",
  },
];

/* ─── NAVIGATE DATA ─── */
const navigateSteps = [
  { letter: "N", word: "Narrate",      desc: "A safe space to share and vent freely." },
  { letter: "A", word: "Acknowledge",  desc: "Naming and understanding your emotions." },
  { letter: "V", word: "Validate",     desc: "Unpacking recurring thinking patterns." },
  { letter: "I", word: "Implement",    desc: "Goal-oriented, solution-focused work." },
  { letter: "G", word: "Grow",         desc: "Deep dive into childhood coping mechanisms." },
  { letter: "A", word: "Authenticity", desc: "Embracing your true self in relationships." },
  { letter: "T", word: "Transform",    desc: "Breaking obsessive thought patterns." },
  { letter: "E", word: "Embodiment",   desc: "Grounding through body work." },
  { letter: "S", word: "Self-Worth",   desc: "Building a strong sense of inner resilience." },
];

/* ─── SCROLL-FADE HOOK ─── */
function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── ARCH TAB PANEL ─── */
function ArchPanel() {
  const [active, setActive] = useState(0);
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
      }}
      className="overflow-hidden rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
    >
      <div className="grid grid-cols-4 border-b border-[#9fc9ec]">
        {archSteps.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex flex-col items-center py-7 px-4 transition-all duration-300"
            style={{
              background: active === i ? "#d5e9f8" : "transparent",
              borderBottom: active === i ? "3px solid #25557c" : "3px solid transparent",
            }}
          >
            <span className="text-[44px] font-black leading-none tracking-[-0.04em]" style={{ color: active === i ? "#25557c" : "#9fc9ec" }}>
              {s.letter}
            </span>
            <span className="mt-1 text-[12px] uppercase tracking-[0.2em]" style={{ color: active === i ? "#25557c" : "#b0cfe0" }}>
              {s.label}
            </span>
          </button>
        ))}
      </div>
      <div className="p-12">
        <div className="flex items-start gap-10">
          <div className="flex-shrink-0 w-[88px] h-[88px] rounded-[2rem] flex items-center justify-center text-[52px] font-black border border-[#9fc9ec] bg-[#d5e9f8]" style={{ color: "#25557c" }}>
            {archSteps[active].letter}
          </div>
          <div className="flex-1">
            <h4 className="text-[26px] font-black text-[#241f1b] leading-tight">{archSteps[active].title}</h4>
            <p className="mt-4 text-[18px] leading-[1.85] text-[#4d4641]">{archSteps[active].description}</p>
          </div>
        </div>
        <div className="flex gap-3 mt-10">
          {archSteps.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="rounded-full transition-all duration-300"
              style={{ height: 10, width: active === i ? 36 : 10, background: active === i ? "#25557c" : "#9fc9ec" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── NAVIGATE GRID ─── */
function NavigateGrid() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-3 gap-5">
      {navigateSteps.map((s, i) => {
        const isActive = active === i;
        return (
          <FadeIn key={i} delay={i * 0.05}>
            <button
              onClick={() => setActive(isActive ? null : i)}
              className="w-full text-left overflow-hidden rounded-[2.5rem] border backdrop-blur-2xl transition-all duration-300"
              style={{
                background: isActive ? "#25557c" : "#e3f0fb",
                borderColor: isActive ? "#1d4568" : "#9fc9ec",
                boxShadow: isActive ? "0 16px 48px rgba(37,85,124,0.18)" : "0 4px 16px rgba(0,0,0,0.03)",
                transform: isActive ? "scale(1.02)" : "scale(1)",
              }}
            >
              <div className="px-8 py-7">
                <div className="flex items-baseline gap-4">
                  <span className="text-[48px] font-black leading-none" style={{ color: isActive ? "#a8d0f4" : "#25557c" }}>{s.letter}</span>
                  <span className="text-[18px] font-black" style={{ color: isActive ? "#ffffff" : "#241f1b" }}>{s.word}</span>
                </div>
                <div className="mt-3 text-[15px] leading-relaxed overflow-hidden transition-all duration-300"
                  style={{ color: isActive ? "#c8dff5" : "#6c625d", maxHeight: isActive ? "60px" : "0px", opacity: isActive ? 1 : 0 }}>
                  {s.desc}
                </div>
              </div>
            </button>
          </FadeIn>
        );
      })}
    </div>
  );
}

/* ════════════════════════════════════════
   BOOKING SECTION COMPONENTS
════════════════════════════════════════ */

/* ── Tab switcher: Video | Email ── */
function BookingSection() {
  const [tab, setTab] = useState("video");

  return (
    <section className="mx-auto mt-24 max-w-[1750px] px-6 pb-32">

      {/* Heading */}
      <FadeIn>
        <div className="mb-10">
          <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-3">Sessions & Pricing</p>
          <h2 className="text-[42px] font-black tracking-[-0.04em] text-[#241f1b]">Booking Process</h2>
          <p className="mt-2 text-[20px] text-[#6c625d]">Choose how you&apos;d like to connect — video call or email & voice note.</p>
        </div>
      </FadeIn>

      {/* Tab toggle */}
      <FadeIn delay={0.05}>
        <div className="inline-flex rounded-[2rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 backdrop-blur-2xl p-2 mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          {[
            { id: "video", label: "Google Meet Video Call" },
            { id: "email", label: "Email & Voice Note" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-8 py-3 rounded-[1.6rem] text-[16px] font-black transition-all duration-300"
              style={{
                background: tab === t.id ? "#25557c" : "transparent",
                color: tab === t.id ? "#ffffff" : "#6c625d",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {tab === "video" ? <VideoBooking /> : <EmailBooking />}

      {/* Rescheduling Policy */}
      <ReschedulingPolicy />

      {/* Boundaries */}
      <BoundariesSection />

    </section>
  );
}

/* ── VIDEO BOOKING ── */
function VideoBooking() {
  const bookingSteps = [
    { n: "01", title: "Make Payment", desc: "Pay via scan code, UPI or bank transfer to the official account." },
    { n: "02", title: "Share Screenshot", desc: "Send a screenshot of your payment with date, name, and transaction ID." },
    { n: "03", title: "Booking Confirmed", desc: "Confirmation is sent upon receipt of payment. First come, first served — slot remains open until the link is sent." },
  ];

  const importantNotes = [
    "No refund once payment is made.",
    "Rescheduling is possible — read the rescheduling policy carefully.",
    "Advance/bulk payment is allowed if you have read and understood the policy.",
  ];

  const timings = ["9:00 am", "12:00 Noon", "3:00 pm", "6:00 pm", "9:00 pm"];

  return (
    <div>
      {/* Price hero */}
      <FadeIn>
        <div className="relative overflow-hidden rounded-[3rem] border border-[#9fc9ec] bg-[#25557c] p-12 mb-8 shadow-[0_12px_40px_rgba(37,85,124,0.2)]">
          <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-[280px] w-[280px] rounded-full bg-[#1d4568]/50" />
          <div className="pointer-events-none absolute bottom-[-40px] left-[-40px] h-[180px] w-[180px] rounded-full bg-[#1d4568]/40" />
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-[13px] uppercase tracking-[0.3em] text-[#a8d0f4] mb-2">Google Meet</p>
              <h3 className="text-[40px] font-black text-white leading-none">Video Call Sessions</h3>
              <p className="mt-3 text-[18px] text-[#c8dff5]">Monday to Saturday · All timings in IST</p>
            </div>
            <div className="text-right">
              <div className="text-[64px] font-black text-white leading-none">₹500</div>
              <div className="text-[18px] text-[#a8d0f4] mt-1">per 15 minutes</div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Available timings + scheduling note */}
      <div className="grid grid-cols-[1fr_1fr] gap-6 mb-8">
        <FadeIn delay={0.05}>
          <div className="rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 backdrop-blur-2xl p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] h-full">
            <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-4">Available Timings (IST)</p>
            <div className="grid grid-cols-2 gap-3">
              {timings.map((t, i) => (
                <div key={i} className="rounded-[1.4rem] bg-[#d5e9f8] border border-[#9fc9ec] px-5 py-3 text-[16px] font-black text-[#25557c] text-center">
                  {t}
                </div>
              ))}
            </div>
            <p className="mt-5 text-[15px] text-[#6c625d] leading-relaxed">
              Tell us your preferred time slot and we&apos;ll confirm which day is open.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 backdrop-blur-2xl p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] h-full">
            <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-4">Scheduling Notes</p>
            <div className="space-y-4">
              {[
                { icon: "—", text: "Exact days and times are confirmed every Friday for the coming week." },
                { icon: "—", text: "No advance booking beyond one week." },
                { icon: "—", text: "Slot stays open to all until the session link is sent to you." },
              ].map((n, i) => (
                <div key={i} className="flex items-start gap-4 rounded-[1.8rem] bg-[#d5e9f8]/60 border border-[#9fc9ec] px-5 py-4">
                  <span className="text-[22px] font-black text-[#25557c]">{n.icon}</span>
                  <p className="text-[16px] text-[#4d4641] leading-relaxed">{n.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Booking steps */}
      <FadeIn>
        <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-4">How to Book</p>
      </FadeIn>
      <div className="grid grid-cols-3 gap-6 mb-8">
        {bookingSteps.map((s, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              className="h-full rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 backdrop-blur-2xl p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300"
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(37,85,124,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.04)"; }}
            >
              <div className="text-[13px] tracking-[0.28em] text-[#25557c] mb-5">{s.n}</div>
              <h3 className="text-[22px] font-black text-[#241f1b] mb-3">{s.title}</h3>
              <p className="text-[17px] leading-[1.8] text-[#4d4641]">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Session summaries + important notes */}
      <div className="grid grid-cols-[1.2fr_1fr] gap-6">
        <FadeIn delay={0.05}>
          <div className="rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 backdrop-blur-2xl p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
            <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-3">Session Summaries</p>
            <h4 className="text-[22px] font-black text-[#241f1b] mb-5">Written Email Summaries</h4>
            <div className="space-y-3">
              {[
                { on: true,  text: "Provided for sessions of one hour or longer." },
                { on: false, text: "Sessions shorter than one hour do not include written summaries." },
                { on: true,  text: "Summaries are shared within 2 days, often earlier." },
                { on: null,  text: "If not received within this timeline, please follow up via WhatsApp." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-[1.4rem] px-5 py-3"
                  style={{ background: item.on === false ? "#fde8e8" : item.on === true ? "#e6f4ea" : "#f0f6ff", border: "1px solid #9fc9ec" }}>
                  <span className="text-[18px] font-bold mt-0.5" style={{ color: item.on === false ? "#8b1a1a" : item.on === true ? "#1a6632" : "#25557c" }}>
                    {item.on === true ? "+" : item.on === false ? "-" : "i"}
                  </span>
                  <p className="text-[15px] text-[#4d4641] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 backdrop-blur-2xl p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
            <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-3">Important Notes</p>
            <h4 className="text-[22px] font-black text-[#241f1b] mb-5">Before You Book</h4>
            <div className="space-y-3">
              {importantNotes.map((note, i) => (
                <div key={i} className="flex items-start gap-3 rounded-[1.4rem] bg-[#d5e9f8]/60 border border-[#9fc9ec] px-5 py-4">
                  <span className="text-[18px] font-black text-[#25557c]">!</span>
                  <p className="text-[15px] text-[#4d4641] leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

/* ── EMAIL BOOKING ── */
function EmailBooking() {
  const plans = [
    { duration: "1 Day", access: "Unlimited emails or 15 min voice note", price: "500" },
    { duration: "3 Days", access: "Unlimited emails or 30 min voice note", price: "1000" },
    { duration: "1 Week", access: "Unlimited emails or 1 hour voice note", price: "2000", featured: true },
  ];

  return (
    <div>
      {/* Hero */}
      <FadeIn>
        <div className="relative overflow-hidden rounded-[3rem] border border-[#9fc9ec] bg-[#25557c] p-12 mb-8 shadow-[0_12px_40px_rgba(37,85,124,0.2)]">
          <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-[280px] w-[280px] rounded-full bg-[#1d4568]/50" />
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <p className="text-[13px] uppercase tracking-[0.3em] text-[#a8d0f4] mb-2">Async Consultation</p>
              <h3 className="text-[40px] font-black text-white leading-none">Email & Voice Note</h3>
              <p className="mt-3 text-[18px] text-[#c8dff5] max-w-[520px]">
                Reach out at{" "}
                <span className="font-black text-white">icenrichempowerenable@gmail.com</span>
                {" "}— your consultation begins from your very first message.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Response hours info */}
      <FadeIn delay={0.05}>
        <div className="rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 backdrop-blur-2xl p-10 mb-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
          <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-4">Response Window</p>
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0 w-[72px] h-[72px] rounded-[1.6rem] bg-[#d5e9f8] border border-[#9fc9ec] flex items-center justify-center text-[32px] font-black text-[#25557c]">
              T
            </div>
            <div>
              <p className="text-[20px] font-black text-[#241f1b]">Responses within 4–5 hours</p>
              <p className="mt-1 text-[17px] text-[#4d4641] leading-relaxed">
                Between <span className="font-bold text-[#241f1b]">8:00 AM – 8:00 PM IST</span>. If a message is sent close to closing time, remaining response hours continue the next day. All timings follow Indian Standard Time.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Pricing plans */}
      <FadeIn>
        <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-4">Plans & Pricing (INR)</p>
      </FadeIn>
      <div className="grid grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              className="h-full rounded-[3rem] border backdrop-blur-2xl p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col"
              style={{
                background: p.featured ? "#25557c" : "#e3f0fb",
                borderColor: p.featured ? "#1d4568" : "#9fc9ec",
                boxShadow: p.featured ? "0 20px 60px rgba(37,85,124,0.22)" : undefined,
              }}
              onMouseEnter={e => { if (!p.featured) { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(37,85,124,0.12)"; }}}
              onMouseLeave={e => { if (!p.featured) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.04)"; }}}
            >
              {p.featured && (
                <div className="mb-4 inline-flex">
                  <span className="text-[11px] uppercase tracking-[0.25em] bg-[#a8d0f4]/30 text-[#a8d0f4] px-4 py-1.5 rounded-full border border-[#a8d0f4]/40">
                    Best Value
                  </span>
                </div>
              )}
              <div className="text-[13px] tracking-[0.28em] mb-3" style={{ color: p.featured ? "#a8d0f4" : "#25557c" }}>
                Access Duration
              </div>
              <h3 className="text-[30px] font-black leading-tight mb-2" style={{ color: p.featured ? "#ffffff" : "#241f1b" }}>
                {p.duration}
              </h3>
              <p className="text-[16px] leading-relaxed flex-1 mb-8" style={{ color: p.featured ? "#c8dff5" : "#4d4641" }}>
                {p.access}
              </p>
              <div className="mt-auto">
                <div className="text-[48px] font-black leading-none" style={{ color: p.featured ? "#ffffff" : "#25557c" }}>
                  ₹{p.price}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

/* ── RESCHEDULING POLICY ── */
function ReschedulingPolicy() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can a session be cancelled or rescheduled?",
      highlight: "Yes — without any charge, if informed by 10:00 PM IST on the same day of booking.",
      bullets: [
        "You may reschedule within the same week (subject to availability).",
        "Or convert your booking to an email consultation starting the next day.",
      ],
      tone: "green",
    },
    {
      q: "What happens if the update comes after 10:00 PM IST?",
      highlight: "The session automatically converts to an email consultation beginning the next day.",
      bullets: [
        "Or may be rescheduled within the same week, if a slot is available.",
        "Sessions cannot be carried forward to the next week.",
      ],
      tone: "amber",
    },
    {
      q: "What if there is no update or attendance?",
      highlight: "The session will be considered used and cannot be refunded or rescheduled.",
      bullets: [
        "If there is no prior communication and the session is missed, it is counted as used.",
      ],
      tone: "red",
    },
  ];

  const toneStyles: Record<string, { bg: string; border: string; text: string }> = {
    green: { bg: "#e6f4ea", border: "#b6dfc0", text: "#1a6632" },
    amber: { bg: "#fff8e6", border: "#f5d589", text: "#7a5500" },
    red:   { bg: "#fde8e8", border: "#f4b8b8", text: "#8b1a1a" },
  };

  return (
    <div className="mt-14">
      <FadeIn>
        <div className="mb-6">
          <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-2">Policy</p>
          <h3 className="text-[32px] font-black tracking-[-0.03em] text-[#241f1b]">Rescheduling & Cancellation</h3>
          <p className="mt-2 text-[18px] text-[#6c625d] max-w-[600px]">
            Every session is a commitment of time, energy, and presence — for both the client and the practitioner.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const ts = toneStyles[faq.tone];
          const isOpen = open === i;
          return (
            <FadeIn key={i} delay={i * 0.08}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left rounded-[2.5rem] border backdrop-blur-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "#e3f0fb" : "#e3f0fb/95",
                  borderColor: isOpen ? "#25557c" : "#9fc9ec",
                  boxShadow: isOpen ? "0 12px 40px rgba(37,85,124,0.1)" : "none",
                }}
              >
                <div className="flex items-center justify-between px-10 py-7">
                  <div className="flex items-center gap-5">
                    <span className="text-[28px] font-black text-[#25557c]">Q{i + 1}</span>
                    <span className="text-[18px] font-black text-[#241f1b]">{faq.q}</span>
                  </div>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full border border-[#9fc9ec] bg-[#d5e9f8] flex items-center justify-center text-[#25557c] font-black text-[18px] transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </div>

                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-10 pb-8 space-y-4">
                    <div className="rounded-[1.6rem] px-6 py-4 border" style={{ background: ts.bg, borderColor: ts.border }}>
                      <p className="text-[16px] font-black leading-relaxed" style={{ color: ts.text }}>{faq.highlight}</p>
                    </div>
                    <ul className="space-y-2 pl-2">
                      {faq.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-[16px] text-[#4d4641]">
                          <span className="text-[#25557c] font-black mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>
            </FadeIn>
          );
        })}
      </div>

      {/* Closing note */}
      <FadeIn delay={0.1}>
        <div className="mt-6 rounded-[2.5rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 backdrop-blur-2xl px-10 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <p className="text-[17px] leading-[1.85] text-[#4d4641] italic">
            &quot;Rescheduling is not about rigidity — it&apos;s about rhythm. Predictability safeguards everyone&apos;s healing time, protects the focus and availability of sessions, and sustains the shared respect that holds space together.&quot;
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

/* ── BOUNDARIES & CONTAINMENT ── */
function BoundariesSection() {
  const [activeTab, setActiveTab] = useState("is");

  return (
    <div className="mt-14">
      <FadeIn>
        <div className="mb-6">
          <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-2">Space & Safety</p>
          <h3 className="text-[32px] font-black tracking-[-0.03em] text-[#241f1b]">Boundaries & Containment</h3>
          <p className="mt-2 text-[18px] text-[#6c625d]">Understanding what this space holds — and what it does not.</p>
        </div>
      </FadeIn>

      {/* Is / Is Not toggle */}
      <FadeIn delay={0.05}>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <button
            onClick={() => setActiveTab("is")}
            className="rounded-[2.5rem] border backdrop-blur-2xl p-8 text-left transition-all duration-300"
            style={{
              background: activeTab === "is" ? "#25557c" : "#e3f0fb",
              borderColor: activeTab === "is" ? "#1d4568" : "#9fc9ec",
              boxShadow: activeTab === "is" ? "0 16px 48px rgba(37,85,124,0.2)" : "0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <p className="text-[13px] uppercase tracking-[0.25em] mb-2" style={{ color: activeTab === "is" ? "#a8d0f4" : "#25557c" }}>
              This Space Is
            </p>
            <p className="text-[17px] leading-relaxed" style={{ color: activeTab === "is" ? "#c8dff5" : "#4d4641" }}>
              A reflective and educational space to understand oneself and one&apos;s relationships — as an individual, partner, parent, caregiver, or professional. A compassionate, non-pathologising place to explore experiences, emotions, patterns, and choices.
            </p>
          </button>

          <button
            onClick={() => setActiveTab("isnot")}
            className="rounded-[2.5rem] border backdrop-blur-2xl p-8 text-left transition-all duration-300"
            style={{
              background: activeTab === "isnot" ? "#25557c" : "#e3f0fb",
              borderColor: activeTab === "isnot" ? "#1d4568" : "#9fc9ec",
              boxShadow: activeTab === "isnot" ? "0 16px 48px rgba(37,85,124,0.2)" : "0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <p className="text-[13px] uppercase tracking-[0.25em] mb-2" style={{ color: activeTab === "isnot" ? "#a8d0f4" : "#25557c" }}>
              This Space Is Not
            </p>
            <p className="text-[17px] leading-relaxed" style={{ color: activeTab === "isnot" ? "#c8dff5" : "#4d4641" }}>
              A clinical or diagnostic service. Psychometric testing, formal assessments, and diagnostic labeling are not part of the process. This is not a crisis-intervention or emergency service — the focus remains on awareness, regulation, and reflective growth.
            </p>
          </button>
        </div>
      </FadeIn>

      {/* Three info cards */}
      <div className="grid grid-cols-3 gap-6">
        {[
          {
            title: "During Combined Sessions",
            icon: "—",
            body: "In shared sessions, anger and disagreement are valid — as information, not harm. Shaming or hostile language is gently interrupted. When a participant is below 18, their emotional and psychological safety is prioritised above all.",
          },
          {
            title: "Confidentiality & Safety",
            icon: "—",
            body: "Confidentiality is always respected within ethical and safety limits. If there are signs of significant dysregulation or a threat to personal or relational safety, the discretion to inform a trusted support person rests with the facilitator. You will always be informed before this happens whenever possible.",
          },
          {
            title: "Why Boundaries Matter",
            icon: "—",
            body: "Boundaries help sustain safety, trust, and continuity. They centre emotional well-being, ensure each person is respected, and make room for somatic grounding and intentional pauses — so clarity is not sought through overwhelm, collapse, or emotional pressure.",
          },
        ].map((card, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div
              className="h-full rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 backdrop-blur-2xl p-10 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300"
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(37,85,124,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.04)"; }}
            >
              <div className="text-[36px] font-black text-[#25557c] mb-4">{card.icon}</div>
              <h4 className="text-[20px] font-black text-[#241f1b] mb-3">{card.title}</h4>
              <p className="text-[16px] leading-[1.85] text-[#4d4641]">{card.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   MAIN PAGE
════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#b9d9f7_0%,#dcecfb_40%,#f4f9fd_100%)]"
      style={{ fontFamily: "'Bahnschrift SemiCondensed', sans-serif" }}
    >
      <FloatingBackButton href="/explore" label="Back To Explore" />

      {/* BACKGROUND GLOWS */}
      <div className="fixed left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#b9d9f7]/35 blur-3xl" />
      <div className="fixed bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#dcecfb]/45 blur-3xl" />

      {/* ── HEADER ── */}
      <div className="relative z-20 mx-auto max-w-[1750px] px-6 pt-32">
        <div className="inline-flex items-center rounded-[2.6rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 px-10 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
          <div className="mr-5 h-5 w-5 rounded-full bg-[#25557c]" />
          <h1 className="text-5xl font-black tracking-[-0.05em] text-[#241f1b]">About</h1>
        </div>
      </div>

      {/* ── EDUCATION ── */}
      <section className="relative z-10 mx-auto mt-14 max-w-[1750px] px-6">
        <div className="mb-8">
          <h2 className="text-[42px] font-black tracking-[-0.04em] text-[#241f1b]">Educational Qualifications</h2>
          <p className="mt-2 text-[20px] text-[#6c625d]">Academic credentials, certifications and publications.</p>
        </div>
        <div className="grid grid-cols-[1.4fr_1fr] gap-8">
          <div className="overflow-hidden rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl">
            <div className="relative h-[600px] overflow-hidden rounded-[2rem] bg-white">
              <a href="/about/phd" className="block h-full w-full">
                <div className="relative h-full w-full cursor-pointer">
                  <Image src="/about/phd.jpg" alt="PhD Certificate" fill className="object-contain p-4 transition duration-300 hover:scale-[1.02]" />
                </div>
              </a>
            </div>
            <div className="mt-6">
              <p className="text-[12px] uppercase tracking-[0.24em] text-[#25557c]">Academic Qualification</p>
              <h3 className="mt-2 text-4xl font-black text-[#241f1b]">Doctor of Philosophy (PhD)</h3>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="overflow-hidden rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl">
              <div className="relative h-[285px] overflow-hidden rounded-[2rem] bg-white">
                <a href="/about/certificate" className="block h-full w-full">
                  <div className="relative h-full w-full cursor-pointer">
                    <Image src="/about/certificate.jpg" alt="Certificate" fill className="object-contain p-4 transition duration-300 hover:scale-[1.02]" />
                  </div>
                </a>
              </div>
              <div className="mt-5">
                <p className="text-[12px] uppercase tracking-[0.24em] text-[#25557c]">Certification</p>
                <h3 className="mt-2 text-2xl font-black text-[#241f1b]">Professional Certificate</h3>
              </div>
            </div>
            <div className="overflow-hidden rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl">
              <div className="relative h-[285px] overflow-hidden rounded-[2rem] bg-white">
                <a href="/about/book" className="block h-full w-full">
                  <div className="relative h-full w-full cursor-pointer">
                    <Image src="/about/book.jpg" alt="Book Cover" fill className="object-contain p-4 transition duration-300 hover:scale-[1.02]" />
                  </div>
                </a>
              </div>
              <div className="mt-5">
                <p className="text-[12px] uppercase tracking-[0.24em] text-[#25557c]">Publication</p>
                <h3 className="mt-2 text-2xl font-black text-[#241f1b]">Published Book</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="mx-auto mt-24 max-w-[1750px] px-6">
        <FadeIn>
          <div className="mb-10">
            <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-3">Framework & Process</p>
            <h2 className="text-[42px] font-black tracking-[-0.04em] text-[#241f1b]">How We Work</h2>
            <p className="mt-2 text-[20px] text-[#6c625d]">A journey of gentle unlearning — not a process to fix anyone.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-3 gap-6 mb-10">
          {[
            { n: "01", title: "Co-creation of Knowledge", desc: "You share your experiential knowledge; I share insights on mental health. Together we arrive at a new understanding of your lived experiences." },
            { n: "02", title: "Identifying Skills", desc: "We pinpoint skills that need strengthening, recognise your existing strengths, and determine new skills needed to navigate your situation." },
            { n: "03", title: "Identifying Support Systems", desc: "We assess existing support systems — clarifying what helps and what doesn't — and work to empower the people around you." },
          ].map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="h-full rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 p-10 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300"
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(37,85,124,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.04)"; }}
              >
                <div className="text-[13px] tracking-[0.28em] text-[#25557c] mb-5">{p.n}</div>
                <h3 className="text-[26px] font-black text-[#241f1b] leading-tight mb-4">{p.title}</h3>
                <p className="text-[18px] leading-[1.8] text-[#4d4641]">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mb-6">
            <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-2">Guiding Framework</p>
            <h3 className="text-[32px] font-black tracking-[-0.03em] text-[#241f1b]">The ARCH Approach</h3>
          </div>
        </FadeIn>
        <div className="mb-10"><ArchPanel /></div>

        <FadeIn>
          <div className="mb-6">
            <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-2">Your Approaches</p>
            <h3 className="text-[32px] font-black tracking-[-0.03em] text-[#241f1b]">Navigate Your Journey</h3>
            <p className="mt-2 text-[18px] text-[#6c625d]">Tap any approach to explore it. You choose the pace and direction.</p>
          </div>
        </FadeIn>
        <div className="mb-10"><NavigateGrid /></div>

        <FadeIn delay={0.05}>
          <div className="relative overflow-hidden rounded-[3rem] border border-[#9fc9ec] bg-[#e3f0fb]/95 p-14 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
            <div className="pointer-events-none absolute right-[-50px] top-[-50px] h-[240px] w-[240px] rounded-full bg-[#b9d9f7]/50" />
            <div className="pointer-events-none absolute bottom-[-60px] left-[-40px] h-[180px] w-[180px] rounded-full bg-[#dcecfb]/60" />
            <div className="relative z-10 max-w-[700px]">
              <p className="text-[12px] uppercase tracking-[0.3em] text-[#25557c] mb-4">A Note on the Journey</p>
              <p className="text-[22px] leading-[1.9] text-[#4d4641]">
                Progress is rarely a straight line. We may spiral back to{" "}
                <span className="font-bold text-[#241f1b]">Awareness</span> or{" "}
                <span className="font-bold text-[#241f1b]">Regulation</span> many times as we uncover new layers of your lived experience. This isn&apos;t being stuck —{" "}
                <span className="font-bold text-[#241f1b]">it is gentle unlearning in action.</span>{" "}
                We go at the pace your nervous system allows.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── BOOKING ── */}
      <BookingSection />

    </main>
  );
}