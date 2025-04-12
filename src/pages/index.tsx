"use client";
import Link from "next/link";
import ConnectWallet from "../components/WalletConnect";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1e004e] to-[#180144] text-white font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-10 py-6">
        <div className="text-2xl font-bold">TruthCheck</div>
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="text-[#43ffa3] font-medium">
            Home
          </Link>
          <Link href="#" className="hover:text-[#43ffa3] transition">
            Trending
          </Link>
          <Link
            href="/user/dashboard"
            className="hover:text-[#43ffa3] transition"
          >
            Fact Check
          </Link>
          <Link href="#" className="hover:text-[#43ffa3] transition">
            Contact Us
          </Link>
        </nav>
        <div className="hidden md:block">
          <ConnectWallet />
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#a8ffc4] mb-4">
          Not Sure If It’s <br className="hidden md:block" /> True? Check It
          Here
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-8">
          Your tool for verifying claims and spotting misinformation.
        </p>

        <div className="flex flex-col sm:flex-row items-center w-full max-w-xl gap-2 mb-12">
          <input
            type="text"
            placeholder="Enter claim or Paste the URL here"
            className="flex-1 rounded-full px-6 py-3 text-black placeholder-gray-500 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-[#43ffa3] to-[#1dd75b] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
            Verify
          </button>
        </div>

        {/* Magnifying glass image */}
        <img
          src="/assets/magnifying-glass.png"
          alt="Magnifying glass"
          className="w-48 h-48 object-contain"
        />
      </section>
    </main>
  );
}
