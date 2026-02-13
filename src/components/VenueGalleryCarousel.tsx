import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VenueGalleryCarouselProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export default function VenueGalleryCarousel({ images, className = "" }: VenueGalleryCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);


  if (images.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent" />

        {/* Carousel Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/30 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-background/50 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/30 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-background/50 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-6 bg-primary"
                      : "bg-foreground/40 hover:bg-foreground/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Decorative frame */}
      <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
    </motion.div>
  );
}
