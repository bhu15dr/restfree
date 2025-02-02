"use client"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav id="navbar" className="fixed w-full bg-neutral-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-2xl text-blue-500">RestFree</div>

          <div className="hidden md:flex space-x-8">
            <a href="/#hero" className="hover:text-blue-500 transition-colors">
              Home
            </a>
            <a href="/#problem" className="hover:text-blue-500 transition-colors">
              Problem
            </a>
            <a href="/#solutions" className="hover:text-blue-500 transition-colors">
              Solutions
            </a>
            <a href="/#features" className="hover:text-blue-500 transition-colors">
              Features
            </a>
            <a href="/#partners" className="hover:text-blue-500 transition-colors">
              Partners
            </a>
            <a href="/#pricing" className="hover:text-blue-500 transition-colors">
              Pricing
            </a>
            <Link 
              href="/digitalbillboard"
              className="hover:text-blue-500 transition-colors"
            >
              DigitalBillboard
            </Link>
            <a href="/#download" className="hover:text-blue-500 transition-colors">
              Download
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/#hero" className="block px-3 py-2 hover:bg-blue-500 rounded-md">
                Home
              </a>
              <a href="/#problem" className="block px-3 py-2 hover:bg-blue-500 rounded-md">
                Problem
              </a>
              <a href="/#solutions" className="block px-3 py-2 hover:bg-blue-500 rounded-md">
                Solutions
              </a>
              <a href="/#features" className="block px-3 py-2 hover:bg-blue-500 rounded-md">
                Features
              </a>
              <a href="/#partners" className="block px-3 py-2 hover:bg-blue-500 rounded-md">
                Partners
              </a>
              <a href="/#pricing" className="block px-3 py-2 hover:bg-blue-500 rounded-md">
                Pricing
              </a>
              <Link 
                href="/digitalbillboard"
                className="block px-3 py-2 hover:bg-blue-500 rounded-md"
              >
                DigitalBillboard
              </Link>
              <a href="/#download" className="block px-3 py-2 hover:bg-blue-500 rounded-md">
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}