import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-[100px] p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-moonlightBlack">About Moonlight Makeover</h1>
        <p className="text-lg leading-relaxed mb-4">
          At Moonlight Makeover, we believe every person deserves to glow with grace under every light.
          Our expert makeup artists specialize in bridal, party, and special effects makeup, creating unforgettable looks that highlight your unique beauty.
        </p>
        <p className="text-lg leading-relaxed">
          With years of experience and a passion for perfection, we bring your vision to life with elegance and style.
          Let us make your special day truly magical.
        </p>
      </main>
      <Footer />
    </>
  );
}
