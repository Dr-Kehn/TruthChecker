"use client";
import Link from "next/link";
import ConnectWallet from "../components/WalletConnect";
import Image from "next/image";
import glass from '../assets/image/glass.png'
import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="h-[100vh] overflow-y-hidden bg-gradient-to-br from-[#1e004e] to-[#180144] text-white font-sans">
      <div className="md:hidden block">
        <ConnectWallet />
      </div>

      {/* Navbar */}
      <header className="flex items-center justify-center md:justify-between  px-10 py-6">
        <section className="text-2xl font-bold">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={150}
            className="w-[200px] md:w-[150px]"
          />
        </section>

        <nav className="gap-10 hidden md:flex">
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
      <section className="flex flex-col gap-5 items-center justify-center text-center px-4 py-10 ">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#a8ffc4] mb-4">
          Not Sure If It’s <br className="hidden md:block" /> True? Check It
          Here
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-8">
          Your tool for verifying claims and spotting misinformation.
        </p>

        <div className="flex flex-col  justify-center items-center w-full max-w-xl gap-2 mb-12">
          <Link
            href={"/user/dashboard"}
            className="bg-gradient-to-r w-[60%] from-[#43ffa3] to-[#1dd75b] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Get Started
          </Link>

          <Image
            src={glass}
            alt={"Magnifying Glass"}
            className="w-[250px] md:w-[200px] md:pt-10 pt-10  "
            width={200}
            height={200}
          />
        </div>

        {/* Magnifying glass image */}
      </section>
    </main>
  );
}
