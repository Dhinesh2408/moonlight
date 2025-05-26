"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Running Text Banner */}
      <div className="fixed top-0 left-0 w-full bg-purple-950 bg-opacity-30 backdrop-blur-md overflow-hidden whitespace-nowrap py-1 z-[100] border-b border-purple-700">
        <div className="inline-block text-white font-medium tracking-wide animate-marquee pl-[100%]">
          Never miss a hot deal — Never miss a hot deal — Never miss a hot deal —
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-[25px] left-0 w-full flex items-center justify-between bg-black bg-opacity-60 backdrop-blur-md px-4 sm:px-8 py-3 z-[99] shadow-md text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2 font-bold text-xl sm:text-2xl text-white tracking-wider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-purple-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.75 15.04a9 9 0 01-11.54-11.55 7.5 7.5 0 1011.54 11.55z" />
          </svg>
          <span className="font-[Playfair Display]">Moonlight Makeover</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex flex-1 justify-center">
          <nav className="flex gap-x-10 text-base font-semibold">
            <Link href="/" className="text-white hover:text-purple-300 transition duration-300">Home</Link>
            <Link href="/about" className="text-white hover:text-purple-300 transition duration-300">About</Link>
            <Link href="/portfolio" className="text-white hover:text-purple-300 transition duration-300">Portfolio</Link>
          </nav>
        </div>

        {/* Contact Button */}
        <div className="hidden sm:flex justify-end">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-2 rounded-full shadow-md transition duration-300 font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden z-[101] ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="absolute top-[90px] left-0 w-full bg-black bg-opacity-90 backdrop-blur-lg border-t border-purple-800 flex flex-col items-start sm:hidden z-[98] py-5 px-6 space-y-5 font-semibold text-white">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-purple-300">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-purple-300">About</Link>
          <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="hover:text-purple-300">Portfolio</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="w-full">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-center px-4 py-2 rounded-full shadow-md font-semibold">
              Contact Us
            </div>
          </Link>
        </nav>
      )}

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </>
  );
}