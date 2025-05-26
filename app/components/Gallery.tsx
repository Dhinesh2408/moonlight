"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    if (modalOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalOpen]);

  function openModal(imgSrc: string) {
    setModalImg(imgSrc);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalImg(null);
  }

  return (
    <section
      id="gallery"
      className="bg-black text-white max-w-7xl mx-auto py-20 px-6 scroll-mt-16"
    >
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-purple relative inline-block">
          Gallery
          <span className="block h-1 w-24 bg-purple mt-2 mx-auto rounded-full animate-pulse" />
        </h3>
        <p className="mt-2 text-sm text-gray-300">
          A glimpse of our magical transformations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((num, index) => {
          const imgSrc = `/gallery/${num}.jpg`;
          return (
            <motion.div
              key={num}
              className="rounded-xl overflow-hidden shadow-xl group relative cursor-pointer"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              onClick={() => openModal(imgSrc)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") openModal(imgSrc);
              }}
            >
              <img
                src={imgSrc}
                alt={`Gallery image ${num}`}
                className="w-full h-full object-cover aspect-square transform transition duration-500 ease-in-out group-hover:scale-102 group-hover:brightness-110"
                style={{ transformOrigin: "center" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      {modalOpen && modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={modalImg}
            alt="Full view"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
