import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { FaYoutube, FaFacebook } from 'react-icons/fa'
import YouTubeBanner from '../components/YouTubeBanner'

export const metadata = {
  title: 'Art and Craft Corner',
  description: 'Original paintings, tutorials, and crafts by Rawwi Kumari',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        {/* Header */}
        <header className="bg-yellow-200">
          <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            {/* Logo + Welcome Text */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="block flex-shrink-0">
                <Image
                  src="/images/logo1.png"
                  alt="Art & Craft Corner logo"
                  width={48}
                  height={48}
                  priority
                />
              </Link>
              <div className="hidden md:block">
                <h1 className="text-lg font-semibold text-yellow-800 leading-tight">
                  Welcome to Art & Craft Corner!
                </h1>
                <p className="text-xs text-yellow-700">
                  Explore tutorials, crafts & beautiful artwork by Rawwi Kumari
                </p>
              </div>
            </div>

            {/* Navigation */}
            <ul className="flex space-x-6 text-yellow-700 font-medium items-center text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/videos">Tutorials</Link></li>
              <li><Link href="/worksheets">Worksheets</Link></li>
              <li><Link href="/classes">Classes</Link></li>
              <li><Link href="/about">About Me</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* YouTube Banner */}
        <YouTubeBanner />

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8 flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-yellow-200">
          <div className="container mx-auto py-4 text-center text-yellow-700 text-sm flex flex-col items-center space-y-2">
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@artandcraftcorner630"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-red-600 transition"
              >
                <FaYoutube className="text-red-600 text-lg" />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.facebook.com/artworkrav2017"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-blue-700 transition"
              >
                <FaFacebook className="text-blue-700 text-lg" />
                <span>Facebook</span>
              </a>
            </div>
            <p>© {new Date().getFullYear()} Rawwi Kumari. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
