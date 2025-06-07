"use client";
import useSWR from "swr";
import { useMemo } from "react";
import Head from 'next/head';
type Art = {
  file_name: string;
  title: string;
  description: string;
  medium: string;
  price_inr: number;
  available: boolean;
  tags: string[];
};

const GITHUB_BASE = "https://raw.githubusercontent.com/RKR-ACC/Mock-db/main";
const JSON_URL = `${GITHUB_BASE}/data/arts.json`;
const getImageUrl = (file: string) => `${GITHUB_BASE}/gallery/${file}`;
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function GalleryPage() {
  const { data: arts = [], error, isLoading } = useSWR<Art[]>(JSON_URL, fetcher, {
    refreshInterval: 30000,
  });

  const paintings = useMemo(() => (arts || []).filter(p => p.available), [arts]);

  if (error)
    return (
      <p className="text-red-600 px-4 py-6">
        Failed to load artworks. Please check your connection or try again later.
      </p>
    );

  if (isLoading || !arts)
    return <p className="px-4 py-6 text-gray-500">Loading gallery...</p>;

  return (
    <>
    <Head>
        <link
          rel="canonical"
          href="https://art-and-craft-corner.vercel.app/gallery"
        />
      </Head>
      <div className="px-4 py-6">
        <h1 className="text-3xl font-semibold mb-2">Gallery</h1>
        <p className="text-gray-700 mb-6">
          A showcase of watercolor, oil, and acrylic paintings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paintings.map((art, index) => (
            <div key={index} className="relative group cursor-pointer">
              {/* Thumbnail Card */}
              <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
                <img
                  loading="lazy"
                  src={getImageUrl(art.file_name)}
                  alt={art.title}
                  className="w-full h-60 object-cover group-hover:opacity-0 transition-opacity duration-300"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{art.title}</h2>
                  <p className="text-gray-600 text-sm">{art.medium}</p>
                  <span
                    className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full ${
                      art.available
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {art.available ? "In stock" : "Sold"}
                  </span>
                </div>
              </div>

              {/* Hover Preview Popup */}
              <div className="absolute z-20 hidden group-hover:flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-2 border transition duration-300 w-[300px] top-[-10px] left-[50%] -translate-x-1/2 scale-105">
                <img
                  loading="lazy"
                  src={getImageUrl(art.file_name)}
                  alt={art.title}
                  className="w-full h-auto rounded-md"
                />
                <div className="text-center mt-2">
                  <p className="text-sm font-medium">{art.title}</p>
                  <p className="text-xs text-gray-500">{art.medium}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {paintings.length === 0 && (
          <p className="text-gray-500 mt-6">
            No artworks are currently in stock. Please check back soon!
          </p>
        )}
      </div>
    </>
  );
}
