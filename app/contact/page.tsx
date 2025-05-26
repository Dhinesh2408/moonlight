"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Header />
      <main className="p-8 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-moonlightBlack">Contact Us</h1>

        {submitted && (
          <div className="mb-4 p-4 bg-gold text-moonlightBlack rounded shadow">
            Thank you for contacting us! We will get back to you soon.
          </div>
        )}

        <form
          action="https://formspree.io/f/mkgrlqaa"
          method="POST"
          onSubmit={(e) => {
            if (!validate()) {
              e.preventDefault();
            } else {
              setSubmitted(true);
            }
          }}
          noValidate
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-gold text-moonlightBlack font-semibold rounded px-6 py-3 hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
