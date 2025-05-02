"use client";

const video_urls = [
  {
    url: "https://www.youtube.com/watch?v=QJK4JnDf9EY",
    title: "dress design/pencil sketch/drawing",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=BcBkzbrBnJM",
    title: "my art works😊😊 🖕🖕❤️",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=ZGUTwzK999I",
    title: "pastel colour /easy drawing/scenery /draw a beautiful scenery",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=nVW-nQqZYTU",
    title: "CD art/two minutes art/easy art",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=S4ksjhJJtuw",
    title: "CD art part2/two minutes art/easy craft",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=mcVzQMPu5RU",
    title: "soft pastel colour/easy drawing/pastel colour",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=DyHUpPeEmUs",
    title: "easy art/dress design",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=RuoBNk60JeU",
    title: "my art work a review",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=YNRDIjcRB5M",
    title: "turn old cd into beautiful coaster/make coaster/best from...",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=2RdLzD4Ma8c",
    title: "clay art/peacock on board/using clay make a beautiful peacock",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=W1QrnJ6Nc7c",
    title: "pattern design|easy pattern design|draw design|free hand...",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=qvAbcTmHlm4",
    title: "pastel colour painting|soft pastel colour painting|scenery...",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=o1j-Mni6Slg",
    title: "pencil sketch|face drawing|pencil shading|easy face drawing|draw...",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=0nTkNEuiWm0",
    title: "poster colour painting|radhe Krishna painting|lord Krishna...",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=ndxNhiRo7r8",
    title: "draw a design|madhubani|draw free hand design|free hand sketch",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=P0fqT2vNQy4",
    title: "traditional art on handmade soop|acrylic paint on soop|सूप पर...",
    description: null
  },
  {
    url: "https://www.youtube.com/watch?v=1n7nyfdKWDs",
    title: "Sri Radha Krishna drawing|krishna painting|Radhe krishna painting",
    description: null
  }
];

export default function VideosPage() {
  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-semibold mb-2">YouTube Videos</h1>
      <p className="text-gray-700 mb-6">
        Here you’ll find all my video tutorials on painting and crafts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {video_urls.map((video, index) => {
          const videoId = video.url.split("v=")[1];
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
