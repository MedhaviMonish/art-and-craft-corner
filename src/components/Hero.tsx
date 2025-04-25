// File: src/components/Hero.tsx

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/BG.png"
          alt="Wood background with art supplies"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* remove or adjust overlay intensity if you like */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Inspiration for the Creative Crafter
        </h1>
        <p className="mt-4 mb-6 text-lg md:text-xl text-white/90 max-w-xl drop-shadow">
          Explore paintings, tutorials, and colorful ideas for all ages.
        </p>
        <Link
          href="/gallery"
          className="mt-2 inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-8 py-4 shadow-lg transition"
        >
          View Paintings
        </Link>
      </div>
    </section>
  )
}
