"use client";
import useSWR from "swr";
import { useMemo } from "react";

const GITHUB_BASE = "https://raw.githubusercontent.com/RKR-ACC/Mock-db/main";
const JSON_URL = `${GITHUB_BASE}/data/arts.json`;
const getImageUrl = (file: string) => `${GITHUB_BASE}/gallery/${file}`;
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ShopPage() {
  const { data: arts, error, isLoading } = useSWR(JSON_URL, fetcher, {
    refreshInterval: 30000,
  });

  const availablePaintings = useMemo(() => (arts || []).filter(p => p.available), [arts]);

  if (error)
    return (
      <p className="text-red-600 px-4 py-6">
        Failed to load artworks. Please try again later.
      </p>
    );

  if (isLoading || !arts)
    return <p className="px-4 py-6 text-gray-500">Loading shop...</p>;

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-semibold mb-2">Shop</h1>
      <p className="text-gray-700 mb-6">
        Browse original artworks available for purchase.  
        <em className="text-sm">(Online payment coming soon — for now, please inquire!)</em>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {availablePaintings.map((art, index) => (
          <div key={index} className="relative cursor-pointer">
            <div className="group relative">
              <img
                loading="lazy"
                src={getImageUrl(art.file_name)}
                alt={art.title}
                className="w-full h-60 object-cover group-hover:opacity-0 transition-opacity duration-300"
              />
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

            <div className="p-4 bg-white rounded-b-2xl shadow">
              <h2 className="text-lg font-semibold">{art.title}</h2>
              <p className="text-gray-600 text-sm">{art.medium}</p>
              {/* <p className="text-pink-600 font-semibold">₹{art.price_inr}</p> */}
              <button
                className="mt-2 text-sm bg-indigo-600 text-white px-3 py-1 rounded-full hover:bg-indigo-700 transition"
                onClick={() =>
                  alert(`To inquire about "${art.title}", contact Rawwi Kumari.`)
                }
              >
                Inquire
              </button>
            </div>
          </div>
        ))}
      </div>

      {availablePaintings.length === 0 && (
        <p className="text-gray-500 mt-6">
          No artworks are currently in stock. Please check back soon!
        </p>
      )}
    </div>
  );
}
