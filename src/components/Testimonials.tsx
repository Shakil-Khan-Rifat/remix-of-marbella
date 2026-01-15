import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary tracking-[0.4em] uppercase text-sm"
          >
            Client Experiences
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mt-4"
          >
            What Our <span className="text-gradient-gold">Guests Say</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative glass-card rounded-2xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div>
                <p className="font-display text-xl text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-primary text-sm tracking-wider">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prevTestimonial}
                className="p-3 border border-border hover:border-primary text-foreground/60 hover:text-primary transition-all duration-300 rounded-full"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-6" : "bg-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 border border-border hover:border-primary text-foreground/60 hover:text-primary transition-all duration-300 rounded-full"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
