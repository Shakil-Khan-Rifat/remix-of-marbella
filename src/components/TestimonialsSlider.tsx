import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James & Victoria",
    location: "London, UK",
    text: "Amor VIP made our anniversary in Marbella absolutely magical. The private yacht charter was beyond anything we could have imagined. Every detail was perfect!",
    rating: 5,
  },
  {
    name: "Alexander M.",
    location: "New York, USA",
    text: "As a frequent traveler to luxury destinations, I can honestly say the team at Amor VIP provides an unmatched level of service. Their VIP nightclub access and restaurant reservations were flawless.",
    rating: 5,
  },
  {
    name: "Sofia & Marco",
    location: "Milan, Italy",
    text: "We booked a villa and personal concierge for our group trip. The attention to detail was exceptional. They even organized a surprise birthday celebration that left us speechless.",
    rating: 5,
  },
  {
    name: "Charlotte B.",
    location: "Paris, France",
    text: "From the moment we arrived, we were treated like royalty. The beach club reservations, the luxury car, everything was seamlessly arranged. Truly a five-star experience.",
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  return (
    <section className="py-16 md:py-20 bg-charcoal-light/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-xs">
            Client Experiences
          </span>
          <h3 className="font-display text-2xl md:text-3xl mt-2">
            What Our <span className="text-gradient-gold">Guests Say</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div 
            className="relative glass-card rounded-xl p-6 md:p-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-base md:text-lg text-foreground/90 font-light leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div>
                <p className="font-display text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-primary text-sm tracking-wider">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 border border-border hover:border-primary text-foreground/60 hover:text-primary transition-all duration-300 rounded-full"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-5" : "bg-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 border border-border hover:border-primary text-foreground/60 hover:text-primary transition-all duration-300 rounded-full"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}