import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import beachClubImg from "@/assets/service-beach-club.png";
import yachtImg from "@/assets/service-yacht.png";
import nightclubImg from "@/assets/service-nightclub.png";
import villaImg from "@/assets/service-villa.png";
import carImg from "@/assets/car-hire-hero.jpg";


import lifestyleImg from "@/assets/service-lifestyle.jpg";

const services = [
  {
    title: "Beach Clubs",
    description: "VIP access to the most exclusive beach clubs on the Costa del Sol",
    image: beachClubImg,
    link: "/beach-clubs",
  },
  {
    title: "Yacht Charter",
    description: "Private luxury yacht experiences along the Mediterranean coastline",
    image: yachtImg,
    link: "/yacht-charter",
  },
  {
    title: "Nightlife",
    description: "Skip the lines with VIP entry to Marbella's hottest venues",
    image: nightclubImg,
    link: "/nightclubs",
  },
  {
    title: "Villa Rental",
    description: "Stunning private villas with pools and panoramic sea views",
    image: villaImg,
    link: "/villa-rental",
  },
  {
    title: "Car Hire",
    description: "Luxury and exotic car rentals for the ultimate driving experience",
    image: carImg,
    link: "/car-hire",
  },
  {
    title: "Lifestyle Management",
    description: "Complete luxury concierge—from airport pickup to every detail of your stay",
    image: lifestyleImg,
    link: "/lifestyle-management",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const CardContent = (
    <>
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.h3
          className="font-display text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
        >
          {service.title}
        </motion.h3>
        <p className="text-foreground/70 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {service.description}
        </p>
        <div className="h-0.5 w-0 bg-gradient-lime mt-4 group-hover:w-16 transition-all duration-500" />
      </div>
    </>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
    >
      {service.link ? (
        <Link to={service.link} className="block w-full h-full">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-charcoal-light">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary tracking-[0.4em] uppercase text-sm"
          >
            What We Offer
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-6"
          >
            Our <span className="text-gradient-lime">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/60 max-w-2xl mx-auto"
          >
            From group itineraries to personal concierge hosting, we're your one-stop shop 
            for an unforgettable Marbella experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-12 py-4 bg-gradient-lime text-primary-foreground font-medium tracking-wider uppercase text-sm hover:scale-105 transition-transform"
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
