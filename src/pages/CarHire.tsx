import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import HeroCarousel from "@/components/HeroCarousel";

import carHireHero from "@/assets/car-hire-hero.jpg";
import carLamborghini from "@/assets/car-lamborghini-urus.jpg";
import carMercedes from "@/assets/car-mercedes-gwagon.jpg";
import carMclaren from "@/assets/car-mclaren-gt.jpg";
import carPorsche from "@/assets/car-porsche-gt3.jpg";
import carFerrari from "@/assets/car-ferrari-f8.jpg";
import carRollsRoyce from "@/assets/car-rolls-royce.jpg";

const heroImages = [carHireHero, carLamborghini, carMercedes, carMclaren, carPorsche, carFerrari, carRollsRoyce];

const luxuryCars = [
  {
    name: "Lamborghini Urus",
    image: carLamborghini,
    description: "The world's first Super Sport Utility Vehicle",
  },
  {
    name: "Mercedes G-Wagon AMG",
    image: carMercedes,
    description: "Iconic luxury SUV with unmatched presence",
  },
  {
    name: "McLaren GT",
    image: carMclaren,
    description: "Grand touring supercar with elegant performance",
  },
  {
    name: "Porsche 911 GT3",
    image: carPorsche,
    description: "Track-bred precision meets everyday luxury",
  },
  {
    name: "Ferrari F8",
    image: carFerrari,
    description: "Italian excellence and breathtaking performance",
  },
  {
    name: "Rolls Royce Cullinan",
    image: carRollsRoyce,
    description: "The pinnacle of luxury SUV refinement",
  },
];

export default function CarHire() {
  return (
    <div className="min-h-screen bg-charcoal-light">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <HeroCarousel images={heroImages} alt="Luxury Car Hire" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gradient-lime mb-6"
          >
            Luxury Car Hire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8"
          >
            Experience Marbella in style with our exclusive selection of luxury vehicles. 
            Whether you're cruising in a Mercedes G-Wagon, Lamborghini Urus, Porsche 911, 
            or another high-end model, we'll make sure you drive your dream car under the sun.
          </motion.p>
        </div>
      </section>

      {/* Car Gallery */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxuryCars.map((car, index) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg">{car.name}</h3>
                  <p className="text-white/80 text-sm">{car.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 px-4 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient-lime mb-4">
              Ready to Drive?
            </h2>
            <p className="text-foreground/80 mb-8 max-w-xl mx-auto">
              Prices vary depending on the season, so get in touch with your dates, 
              age, and car preference, and we'll be happy to provide you with a personalized quote.
            </p>
            <BookingButtons variant="cta" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
