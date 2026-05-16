import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-blue-100 bg-[#edf6ff]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wide text-slate-900"
        >
          Seema
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <Link href="/about" className="transition hover:text-blue-600">
            About
          </Link>

          <a href="#" className="transition hover:text-blue-600">
            Articles
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Videos
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Gallery
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Contact
          </a>
        </div>

        <button className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm text-blue-700 transition hover:bg-blue-100">
          Book Consultation
        </button>
      </div>
    </nav>
  );
}