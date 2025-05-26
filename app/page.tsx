"use client";

import dynamic from "next/dynamic";
import Header from "./components/Header";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Prices from "./components/Prices";

const Hero = dynamic(() => import("./components/Hero"), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow space-y-20"> {/* Consistent vertical spacing */}
        <Hero />
        <Services />
        <Gallery />
        <Prices />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
