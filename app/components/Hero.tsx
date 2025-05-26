"use client";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex flex-col items-center justify-center
        px-6 sm:px-12 md:px-20
        pt-20 sm:pt-28 md:pt-36
        overflow-hidden
        font-[Poppins]
        text-center md:text-left
      "
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-opacity-70 -z-10" />

      {/* Combined content for Mobile ONLY */}
      <div className="block md:hidden max-w-lg mx-auto px-4 pt-28"> {/* <-- Added pt-28 here */}
        <h1
          className="
            font-extrabold
            leading-tight
            text-3xl sm:text-3xl
            text-purple-900
            mb-4
          "
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Glow With Grace Under Every Light
        </h1>
        <p className="text-base sm:text-lg text-black">
          Beauty That Speaks without words
        </p>
      </div>

      {/* Split content for md and up */}
      <div className="hidden md:flex max-w-7xl mx-auto w-full items-center justify-between">
        {/* Left side */}
        <div className="md:w-1/2 px-4 mb-12 md:mb-0 md:-translate-x-20">
          <h1
            className="
              font-extrabold 
              leading-tight 
              text-4xl 
              text-purple-900
            "
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Glow with Grace
          </h1>
          <p className="text-xl max-w-lg mb-8 text-black">
            Beauty That Speaks
          </p>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 px-4 md:translate-x-20 md:translate-y-6">
          <h1
            className="
              font-extrabold 
              leading-tight 
              text-4xl 
              text-purple-900
            "
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Under Every Light
          </h1>
          <p className="text-xl max-w-lg mb-8 text-black">
            Without Words
          </p>
        </div>
      </div>

      {/* Centered Button */}
      <div className="mt-10">
        <a
          href="#gallery"
          className="
            inline-block
            px-4 sm:px-6 md:px-8
            py-2 sm:py-3
            bg-pink-500
            text-white font-semibold rounded-full shadow-xl
            hover:bg-pink-600 transition duration-300 ease-in-out
          "
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
}
