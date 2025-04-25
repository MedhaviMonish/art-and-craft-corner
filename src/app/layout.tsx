// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Art and Craft Corner',
  description: 'Art and Craft tutorials and resources by Rawwi Kumari',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">
        <header className="bg-yellow-200">
          <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <Link href="/" className="text-2xl font-extrabold text-yellow-800">
              Art &amp; Craft Corner
            </Link>
            <ul className="flex space-x-6 text-yellow-700 font-medium">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Me</Link></li>
              <li><Link href="/videos">YouTube Videos</Link></li>
              <li><Link href="/worksheets">Worksheets</Link></li>
              <li><Link href="/classes">Classes</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-8 flex-grow">
          {children}
        </main>

        <footer className="bg-yellow-200">
          <div className="container mx-auto py-4 text-center text-yellow-700 text-sm">
            © {new Date().getFullYear()} Rawwi Kumari. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
