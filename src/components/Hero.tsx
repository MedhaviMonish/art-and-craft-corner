import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-30">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-wood-bg.png"
          alt="Wood background with art supplies"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center text-center px-4 space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Inspiration for the Creative Crafter
        </h1>
        <p className="text-base md:text-lg text-white/90 max-w-xl drop-shadow">
          Explore paintings, tutorials, and colorful ideas for all ages.
        </p>
        <p className="text-white">We are still under development, so please be patient with us. 😊</p>
        <p className="text-white">You can still contact us.</p>
        <Link
          href="/gallery"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-6 py-3 shadow-lg transition"
        >
          View Paintings
        </Link>
      </div>
    </section>
  )
}
