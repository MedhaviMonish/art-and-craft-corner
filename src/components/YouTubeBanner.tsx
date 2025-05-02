"use client";

import { useState } from "react";

export default function YouTubeBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-red-600 text-white text-sm text-center py-2 px-4 flex justify-center items-center relative">
      📺 Subscribe to our YouTube channel for tutorials!{" "}
      <a
        href="https://www.youtube.com/@artandcraftcorner630"
        target="_blank"
        rel="noopener noreferrer"
        className="underline font-semibold hover:text-yellow-200 ml-1"
      >
        Watch on YouTube →
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-300 text-lg"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}
