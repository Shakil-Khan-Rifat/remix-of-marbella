import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Car, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import TestimonialsSlider from "@/components/TestimonialsSlider";

import carHireHero from "@/assets/car-hire-hero.jpg";
import carMercedes from "@/assets/car-mercedes-gwagon.jpg";
import carG63Interior from "@/assets/car-g63-interior.jpg";
import carG63Rear from "@/assets/car-g63-rear.jpg";
import carG63Front from "@/assets/car-g63-front.jpg";
import carG63Seat from "@/assets/car-g63-seat.jpg";
import carG63Steering from "@/assets/car-g63-steering.jpg";
import carG63Black from "@/assets/car-g63-black.jpg";
import carLamborghini from "@/assets/car-lamborghini-urus.jpg";
import carLamboHuracanRear from "@/assets/car-lambo-huracan-rear.jpg";
import carLamboHuracanSide from "@/assets/car-lambo-huracan-side.jpg";
import carLamboHuracanFront from "@/assets/car-lambo-huracan-front.jpg";
import carLamboHuracanInterior from "@/assets/car-lambo-huracan-interior.jpg";
import carMclaren from "@/assets/car-mclaren-gt.jpg";
import carPorsche from "@/assets/car-porsche-gt3.jpg";
import carFerrari from "@/assets/car-ferrari-f8.jpg";
import carFerrariRomaFront from "@/assets/car-ferrari-roma-front.jpg";
import carFerrariRomaRear from "@/assets/car-ferrari-roma-rear.jpg";
import carFerrariRomaInterior from "@/assets/car-ferrari-roma-interior.jpg";
import carFerrari296Front from "@/assets/car-ferrari-296-front.jpg";
import carFerrari296Side from "@/assets/car-ferrari-296-side.jpg";
import carFerrari296Rear from "@/assets/car-ferrari-296-rear.jpg";
import carLamboStoFront from "@/assets/car-lambo-sto-front.jpg";
import carLamboStoSide from "@/assets/car-lambo-sto-side.jpg";
import carLamboStoRear from "@/assets/car-lambo-sto-rear.jpg";
import carVclassInterior from "@/assets/car-vclass-interior.jpg";
import carVclassExterior from "@/assets/car-vclass-exterior.jpg";
import carVclassSteering from "@/assets/car-vclass-steering.jpg";
import carBrabusGwagon from "@/assets/car-brabus-gwagon.jpg";
import carAudiRsq8 from "@/assets/car-audi-rsq8.jpg";
import carLamboUrusNew from "@/assets/car-lambo-urus-new.jpg";
import carRollsRoyce from "@/assets/car-rolls-royce.jpg";

const luxuryCars = [
  {
    name: "Mercedes G63 AMG",
    images: [carG63Front, carG63Rear, carG63Interior, carG63Black, carG63Steering, carG63Seat],
  },
  {
    name: "Ferrari Roma",
    images: [carFerrariRomaFront, carFerrariRomaRear, carFerrariRomaInterior],
  },
  {
    name: "Lamborghini Huracán Performante",
    images: [carLamboHuracanFront, carLamboHuracanSide, carLamboHuracanRear, carLamboHuracanInterior],
  },
  {
    name: "Ferrari 296 GTB",
    images: [carFerrari296Front, carFerrari296Side, carFerrari296Rear],
  },
  {
    name: "Lamborghini Huracán STO",
    images: [carLamboStoFront, carLamboStoSide, carLamboStoRear],
  },
  {
    name: "Mercedes V Class",
    images: [carVclassExterior, carVclassInterior, carVclassSteering],
  },
  {
    name: "Mercedes Brabus G Wagon",
    images: [carBrabusGwagon],
  },
  {
    name: "Audi RSQ8",
    images: [carAudiRsq8],
  },
  {
    name: "Lamborghini Urus",
    images: [carLamboUrusNew],
  },
];

function CarImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 1) {
    return (
      <img src={images[0]} alt={name} className="w-full h-full object-cover" />
    );
  }

  return (
    <div className="relative w-full h-full">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${name} - Image ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover ${
            idx === currentIndex ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
        />
      ))}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-primary w-4" : "bg-foreground/50"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function CarCard({ car, index }: { car: typeof luxuryCars[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-charcoal-light rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-500 h-full flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
        <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
          <CarImageCarousel images={car.images} name={car.name} />
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300 z-[2]" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
            {car.name}
          </h3>
          <Car className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
        </div>

        <div className="flex-grow" />

        <div className="border-t border-primary/10 pt-4">
          <p className="text-foreground/50 text-xs">Contact us for pricing and availability</p>
        </div>

        <div className="mt-5 pt-4 border-t border-primary/10">
          <BookingButtons variant="compact" className="w-full" />
        </div>
      </div>
    </motion.div>
  );
}

export default function CarHire() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Static Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={carLamboStoFront}
          alt="Luxury Car Hire"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />

        <div ref={heroRef} className="container mx-auto px-6 relative z-10 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase">Back to Services</span>
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-primary tracking-[0.4em] uppercase text-sm mb-4 drop-shadow-lg"
          >
            Exotic Fleet
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            Luxury Car <span className="text-gradient-lime">Hire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-lg"
          >
            Experience Marbella in style with our exclusive selection of luxury vehicles.
            From supercars to premium SUVs, drive your dream car under the sun.
          </motion.p>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Our <span className="text-gradient-lime">Fleet</span>
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Prices vary depending on the season. Get in touch with your dates and preferences for a personalised quote.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryCars.map((car, index) => (
              <CarCard key={car.name} car={car} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Ready to <span className="text-gradient-lime">Drive</span>?
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto mb-8">
              Contact our concierge team to arrange your perfect luxury car experience.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <TestimonialsSlider />

      <Footer />
    </div>
  );
}
