const testimonials = [
  {
    quote: "Moonlight Makeover made me look stunning on my wedding day! Highly recommend.",
    author: "— Shobana",
  },
  {
    quote: "Professional and friendly service. Loved the transformation!",
    author: "— Monisha",
  },
  {
    quote: "Such attention to detail and amazing results every time.",
    author: "— Sneha",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-beige py-16 px-6 max-w-4xl mx-auto rounded-lg shadow-lg">
      <h3 className="text-4xl font-bold mb-10 text-center text-moonlightBlack">What Clients Say</h3>
      <div className="space-y-8">
        {testimonials.map(({ quote, author }, i) => (
          <blockquote key={i} className="italic text-center text-lg text-moonlightBlack">
            “{quote}”
            <footer className="mt-2 font-semibold text-gold">{author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
