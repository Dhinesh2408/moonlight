import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-purple p-10 border-t border-purple mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Our Services */}
        <div>
          <h3 className="text-xl font-bold mb-6">Our Services</h3>
          <ul className="space-y-3 text-white text-base">
            <li>HD Makeup</li>
            <li>Bridal Combo</li>
            <li>Mehendi Designs</li>
            <li>Hairdos & Styling</li>
            <li>Photoshoot Packages</li>
          </ul>
        </div>

        {/* Follow Us On */}
        <div>
          <h3 className="text-xl font-bold mb-6">Follow Us On</h3>
          <ul className="space-y-3 text-white text-base flex flex-col gap-3 items-center md:items-start">
            <li>
              <a
                href="https://www.instagram.com/moonlight_make_overs?igsh=YzlieHJycGpydzY1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors duration-300"
              >
                <FaInstagram className="text-pink-500" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919790509423"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors duration-300"
              >
                <FaWhatsapp className="text-green-500" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-6">Contact Us</h3>
          <p className="text-white mb-3 text-base">
            Email:{" "}
            <a
              href="mailto:cibiselvam242502@gmail.com"
              className="hover:text-white transition-colors duration-300"
            >
              cibiselvam242502@gmail.com
            </a>
          </p>
          <p className="text-white text-base">
            Phone:{" "}
            <a
              href="tel:+919790509423"
              className="hover:text-white transition-colors duration-300"
            >
              +91 9790509423
            </a>
          </p>
        </div>
      </div>

      <p className="text-center text-purple mt-14 text-sm tracking-wide">
        © 2025 Moonlight Makeover. All rights reserved.
      </p>
    </footer>
  );
}
