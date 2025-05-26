import { FaCheckCircle } from "react-icons/fa";

const services = [
  "HD Makeup",
  "Pro HD Makeup",
  "Glow Makeup",
  "Bridal Muhurtham Look",
  "Bridesmaid Makeup",
  "Guest Makeup",
  "Classic Muhurtham Hairdo",
  "Custom Hair Styles",
  "Full Coverage Bridal Mehendi",
  "Arabic Mehendi",
  "Guest Mehendi",
  "Portrait Designs",
  "God Themes",
  "Wedding Themes",
  "Baby Shower Themes",
  "Custom Mehendi Designs",
  "Facial Services",
  "Saree Pre-Pleating",
  "On-Spot Draping",
  "CanCan Draping",
  "Box Pleating"
];

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto pt-10 pb-20 px-6">
      <h3 className="text-4xl font-bold text-center text-purple mb-16">
        Bridal Makeover by Moonlight Makeovers
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              flex items-center gap-4 
              bg-gradient-to-br from-purple-900 via-black to-purple-900 
              text-white rounded-xl p-5 
              border border-purple 
              shadow-lg hover:shadow-2xl 
              transition-shadow duration-300
            "
          >
            <FaCheckCircle className="text-pink-400 text-xl flex-shrink-0" />
            <p className="text-lg font-semibold">{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
