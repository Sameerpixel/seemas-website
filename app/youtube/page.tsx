import {client} from "@/sanity/lib/client";

const youtubeQuery = `
*[_type == "youtube"] | order(_createdAt desc){
  title,
  youtubeUrl,
  category,
  description
}
`;

type Video = {
  title: string;
  youtubeUrl: string;
  category: string;
  description: string;
};

function getYoutubeId(url: string) {

  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=))([^#&?]*).*/;

  const match = url.match(regExp);

  return match && match[7].length === 11
    ? match[7]
    : null;
}

export default async function YoutubePage() {

  const videos: Video[] = await client.fetch(youtubeQuery);

  return (
    <main
      className="min-h-screen bg-[#fff6f6] px-6 py-20"
      style={{
        fontFamily: "'Bahnschrift SemiCondensed', sans-serif",
      }}
    >

      {/* HEADER */}
      <div className="mx-auto max-w-[1500px]">

        <div className="inline-flex items-center rounded-full border border-[#efb2b2]/40 bg-white/70 px-10 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl">

          <div className="mr-5 h-4 w-4 rounded-full bg-[#d94747]" />

          <h1 className="text-5xl font-black tracking-[-0.05em] text-[#241f1b]">
            YouTube
          </h1>

        </div>

      </div>

      {/* VIDEOS */}
      <section className="mx-auto mt-14 grid max-w-[1500px] grid-cols-2 gap-10">

        {videos.map((video, index) => {

          const videoId = getYoutubeId(video.youtubeUrl);

          return (
            <div
              key={index}
              className="overflow-hidden rounded-[2.8rem] border border-[#efb2b2]/40 bg-white/70 shadow-[0_14px_50px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
            >

              {/* PLAYER */}
              <div className="aspect-video overflow-hidden">

                {videoId && (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.title}
                    allowFullScreen
                    className="h-full w-full"
                  />
                )}

              </div>

              {/* TEXT */}
              <div className="p-8">

                <p className="text-[12px] uppercase tracking-[0.24em] text-[#d94747]">
                  {video.category}
                </p>

                <h2 className="mt-4 text-[36px] font-black leading-[1.02] tracking-[-0.04em] text-[#241f1b]">
                  {video.title}
                </h2>

                <p className="mt-6 text-[21px] leading-[1.9] text-[#4d4641]">
                  {video.description}
                </p>

              </div>

            </div>
          );
        })}

      </section>

    </main>
  );
}