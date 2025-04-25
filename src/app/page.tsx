import Hero from '@/components/Hero'

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* Below this you can re-add your stub content or real homepage sections */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold">Welcome to Art & Craft Corner!</h2>
        <p className="mt-4 text-gray-700">
          Explore fun tutorials, craft projects, and beautiful artwork by Rawwi Kumari.
        </p>
      </section>
    </>
  )
}
