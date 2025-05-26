import Image from "next/image";

export default function PortfolioPage() {
  const imageDetails = [
    {
      src: "/gallery/1.jpg",
      title: "Bridal Glow",
      description: "Traditional Muhurtham Look",
    },
    {
      src: "/gallery/22.jpg",
      title: "Elegant Bride",
      description: "Signature Muhurtham Look",
    },
    {
      src: "/gallery/3.jpg",
      title: "Photoshoot Glam",
      description: "Studio Look",
    },
    {
      src: "/gallery/4.jpg",
      title: "Sangeet Ready",
      description: "Modern Mehendi Look",
    },
    {
      src: "/gallery/5.jpg",
      title: "Hair & Draping",
      description: "Classic Saree Draping",
    },
    {
      src: "/gallery/6.jpg",
      title: "Mehendi Design",
      description: "Custom Bridal Art",
    },
  ];

  return (
    <section className="min-h-screen px-6 py-16 bg-black text-white">
      <h1 className="text-4xl font-bold text-center text-purple mb-12">
        Portfolio Showcase
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {imageDetails.map(({ src, title, description }, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-all border-4 border-white"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={src}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover transform transition-transform duration-300 ${
                  src === "/gallery/2.jpg"
                    ? "group-hover:scale-95"
                    : "group-hover:scale-105"
                }`}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm text-gray-200">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
