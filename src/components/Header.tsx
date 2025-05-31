'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full bg-gray-950 text-white border-b border-gray-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo-daremind.png"
              alt="Logo DAREMIND"
              width={48}
              height={48}
              priority
            />
            <span className="text-xl font-bold tracking-wider">DAREMIND</span>
          </div>
        </Link>
        <div className="space-x-6 text-sm uppercase tracking-wider">
          <Link href="/about">À propos</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
