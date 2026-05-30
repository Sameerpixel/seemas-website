import Image from "next/image";

export default function PhDPage() {
  return (
    <main className="min-h-screen bg-black">

      <a
        href="/about"
        className="fixed left-8 top-8 z-50 text-xl text-white"
      >
        ← Back To About
      </a>

      <div className="flex min-h-screen items-center justify-center p-6">

        <div className="relative h-[95vh] w-[95vw]">

          <Image
            src="/about/phd.jpg"
            alt="PhD Certificate"
            fill
            priority
            className="object-contain"
          />

        </div>

      </div>

    </main>
  );
}