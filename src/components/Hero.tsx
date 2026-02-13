import { motion } from "framer-motion";
import heroImage from "@/assets/hero-marbella-puerto-banus.jpeg";
import BookingButtons from "./BookingButtons";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Marbella harbor at sunset"
          className="w-full h-full object-cover"
        />
        {/* Enhanced dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-primary tracking-[0.4em] uppercase text-sm mb-6 drop-shadow-lg"
        >
          Marbella, Spain
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 leading-normal drop-shadow-xl"
        >
          Live The
          <span className="block text-gradient-lime pb-4">Marbella Lifestyle</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-lg"
        >
          Yacht parties, exclusive villas, VIP nightlife, and sun-soaked beach clubs. 
          Your ultimate Mediterranean escape starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <BookingButtons variant="hero" />
        </motion.div>
      </div>

    </section>
  );
}
