"use client";
import useSWR from "swr";
type Video = {
  url: string;
  title: string;
  description: string|null;
};

const GITHUB_BASE = "https://raw.githubusercontent.com/RKR-ACC/Mock-db/main";
const VIDEO_JSON_URL = `${GITHUB_BASE}/data/video.json`;
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function VideosPage() {

  const { data: arts = [], error, isLoading } = useSWR<Video[]>(VIDEO_JSON_URL, fetcher, {
    refreshInterval: 30000,
  });

  if (error)
    return (
      <p className="text-red-600 px-4 py-6">
        Failed to load videos. Please try again later.
      </p>
    );

  if (isLoading || !video_urls)
    return <p className="px-4 py-6 text-gray-500">Loading videos...</p>;

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-semibold mb-2">YouTube Videos</h1>
      <p className="text-gray-700 mb-6">
        Here you’ll find all my video tutorials on painting and crafts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {video_urls.map((video: { url: string; title: string }, index: number) => {
          const videoId = video.url.split("v=")[1]?.split("&")[0];
          return (
            <div key={index} className="w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={video.title}
                className="w-full h-full rounded-lg shadow"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p className="mt-2 text-sm text-center text-gray-600">{video.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
