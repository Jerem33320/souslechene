import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookCoverCarousel({ frontCover, backCover }) {
  const [current, setCurrent] = useState(0);
  const images = [frontCover, backCover];

  return (
    <div className="flex justify-center animate-fade-in-slow">
      <div className="relative w-80 h-[480px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Book cover ${current + 1}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-xl transform hover:scale-105 transition-transform duration-700"
          />
        </AnimatePresence>

        {/* Halo lumineux */}
        <div className="absolute -inset-4 bg-gradient-to-r from-amber-800 via-yellow-700 to-amber-500 opacity-20 rounded-xl blur-2xl -z-10"></div>

        {/* Indicateurs */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? "bg-amber-500 scale-110" : "bg-gray-400 opacity-60"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
