import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export default function FloatingBackButton({
  href,
  label,
}: Props) {

  return (
    <div className="fixed left-0 top-0 z-50 w-full px-6 py-5">

      <div className="mx-auto flex max-w-[1450px] items-center justify-between rounded-full border border-white/10 bg-[#1c1a1f]/45 px-8 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl">

        <Link
          href={href}
          className="text-[13px] uppercase tracking-[0.28em] text-[#f5f1eb] transition hover:opacity-80"
        >
          ← {label}
        </Link>

        <div className="h-3 w-3 rounded-full bg-[#d7d2cb]" />

      </div>

    </div>
  );
}