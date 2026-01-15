import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Bed, Bath, Waves, MapPin, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";

import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";
import villa5 from "@/assets/villa-5.jpg";
import villa6 from "@/assets/villa-6.jpg";
import villa7 from "@/assets/villa-7.jpg";
import villa8 from "@/assets/villa-8.jpg";
import monteMayor1 from "@/assets/villa-monte-mayor-1.png";
import monteMayor2 from "@/assets/villa-monte-mayor-2.png";
import monteMayor3 from "@/assets/villa-monte-mayor-3.png";
import monteMayor4 from "@/assets/villa-monte-mayor-4.png";
import atalayaGolf1 from "@/assets/villa-atalaya-golf-1.png";
import atalayaGolf2 from "@/assets/villa-atalaya-golf-2.png";
import atalayaGolf3 from "@/assets/villa-atalaya-golf-3.png";
import atalayaGolf4 from "@/assets/villa-atalaya-golf-4.png";
import elParaiso1 from "@/assets/villa-el-paraiso-1.png";
import elParaiso2 from "@/assets/villa-el-paraiso-2.png";
import elParaiso3 from "@/assets/villa-el-paraiso-3.png";
import elParaiso4 from "@/assets/villa-el-paraiso-4.png";
import sierraBlanca1 from "@/assets/villa-sierra-blanca-1.png";
import sierraBlanca2 from "@/assets/villa-sierra-blanca-2.png";
import sierraBlanca3 from "@/assets/villa-sierra-blanca-3.png";
import sierraBlanca4 from "@/assets/villa-sierra-blanca-4.png";
import villaAtalaya1 from "@/assets/villa-atalaya-1.png";
import villaAtalaya2 from "@/assets/villa-atalaya-2.png";
import villaAtalaya3 from "@/assets/villa-atalaya-3.png";
import villaAtalaya4 from "@/assets/villa-atalaya-4.png";
import lasDos1 from "@/assets/villa-las-dos-torres-1.png";
import lasDos2 from "@/assets/villa-las-dos-torres-2.png";
import lasDos3 from "@/assets/villa-las-dos-torres-3.png";
import lasDos4 from "@/assets/villa-las-dos-torres-4.png";
import losFlamingos1 from "@/assets/villa-los-flamingos-1.png";
import losFlamingos2 from "@/assets/villa-los-flamingos-2.png";
import losFlamingos3 from "@/assets/villa-los-flamingos-3.png";
import losFlamingos4 from "@/assets/villa-los-flamingos-4.png";
import elToro1 from "@/assets/villa-el-toro-1.png";
import elToro2 from "@/assets/villa-el-toro-2.png";
import elToro3 from "@/assets/villa-el-toro-3.png";
import elToro4 from "@/assets/villa-el-toro-4.png";

interface Villa {
  name: string;
  description: string;
  beds: number;
  baths: number;
  guests?: number;
  images: string[];
}

const villas: Villa[] = [
  {
    name: "Villa Monte Mayor",
    description: "Nestled in the prestigious hills of Monte Mayor, Benahavis, Villa Imagine is a sanctuary of elegance, designed for those who seek the perfect blend of luxury, privacy, and breathtaking views. Just moments from Marbella and Estepona, this exceptional retreat offers an unparalleled escape for discerning travellers.",
    beds: 5,
    baths: 6,
    guests: 11,
    images: [monteMayor1, monteMayor2, monteMayor3, monteMayor4],
  },
  {
    name: "Villa Atalaya Golf",
    description: "Relax in this calm, stylish space. The villa has everything you need for a fabulous holiday. The outdoor area is the star of this villa and has a heated 9.5mx5m pool with an electric cover that's secure for children. This modern Villa, in the Marbella area, is a short drive to the beach and next to Atalaya Golf. Recently built, it enjoys four large terraces, including a roof terrace and a chillout area with a covered dining table with seating for 12 and a large sofa, many sun beds and garden.",
    beds: 6,
    baths: 8,
    guests: 12,
    images: [atalayaGolf1, atalayaGolf2, atalayaGolf3, atalayaGolf4],
  },
  {
    name: "Villa El Paraiso",
    description: "Modern frontline golf villa with luxury qualities and exceptional finishes. Located in a privileged location in El Campanario. The villa consists of ground floor, upper floor and living and bright basement with a large cinema room and an area with access to a patio. The villa consists mainly of 4 bedrooms and 5 bathrooms. 2 bedrooms with ensuite bathroom on the upper floor, 1 bedroom with bathroom on the ground floor and 1 bedroom with bathroom on the basement floor.",
    beds: 4,
    baths: 6,
    guests: 8,
    images: [elParaiso1, elParaiso2, elParaiso3, elParaiso4],
  },
  {
    name: "Villa Sierra Blanca",
    description: "Villa Mozart, located in the prestigious Sierra Blanca, Marbella, is a modern masterpiece spanning four luxurious levels. This 6-bedroom, 9-bathroom villa offers breathtaking sea and mountain views from three floors and features a rooftop entertainment area with a full-size swimming pool and exquisite interiors designed for ultimate comfort.",
    beds: 6,
    baths: 9,
    guests: 12,
    images: [sierraBlanca1, sierraBlanca2, sierraBlanca3, sierraBlanca4],
  },
  {
    name: "Villa Atalaya",
    description: "Villa Mozart, located in the prestigious Sierra Blanca, Marbella, is a modern masterpiece spanning four luxurious levels. This 6-bedroom, 9-bathroom villa offers breathtaking sea and mountain views from three floors and features a rooftop entertainment area with a full-size swimming pool and exquisite interiors designed for ultimate comfort.",
    beds: 5,
    baths: 4,
    guests: 10,
    images: [villaAtalaya1, villaAtalaya2, villaAtalaya3, villaAtalaya4],
  },
  {
    name: "Villa Las Dos Torres",
    description: "Las Dos Torres is a luxurious Andalusian-style villa featuring four spacious bedrooms, each with its own en-suite bathroom. Set in the exclusive gated community of Monte Mayor in Benahavís, this elegant property offers breathtaking views of the Mediterranean Sea and surrounding mountains. The villa is designed with an open-plan layout, filled with natural light from its double-height ceilings and expansive windows.",
    beds: 4,
    baths: 5,
    guests: 8,
    images: [lasDos1, lasDos2, lasDos3, lasDos4],
  },
  {
    name: "Villa Los Flamingos",
    description: "Enjoy ultimate luxury at our golf villa in Los Flamingos, Costa del Sol. This peaceful, gated community offers stunning views of the coast, Andalusian hills, and the Mediterranean Sea. The gated community is secure, with amazing golf views, a fantastic pool, and a barbecue area. Residents can access three 18-hole golf courses, the Michael Campbell Golf Academy, and the luxurious Anantara Villa Padierna Palace Resort with its spa, restaurants, and private beach club. Just 3 km from the beach and close to Puerto Banús, Marbella, and Estepona, this villa perfectly blends tranquility and convenience.",
    beds: 4,
    baths: 5,
    guests: 8,
    images: [losFlamingos1, losFlamingos2, losFlamingos3, losFlamingos4],
  },
  {
    name: "Villa El Toro",
    description: "A Vibrant villa in the epicenter of Nueva Andalucía. El Toro has a modern design and a spacious layout, located a stone's throw from the bullring and Centro Plaza. Close to numerous restaurants, shops with walking distance to Puerto Banus and the beach makes this the perfect location for those you enjoy Marbella's social life and want to be in the mix. Waking up to unbeatable views of La Concha, having a coffee with views to the sea, and enjoying the privacy of your garden while listening to the intoxicating sound of the waterfall from the refreshing pool is what this villa offers.",
    beds: 6,
    baths: 6,
    guests: 12,
    images: [elToro1, elToro2, elToro3, elToro4],
  },
];

function VillaCard({ villa, index }: { villa: Villa; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-charcoal-light rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500"
    >
      {/* 4 Image Grid */}
      <div className="grid grid-cols-2 gap-1">
        {villa.images.slice(0, 4).map((image, imgIndex) => (
          <div key={imgIndex} className="aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={`${villa.name} - Image ${imgIndex + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Villa Details */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-2xl md:text-3xl text-foreground">
            {villa.name}
          </h3>
          <Home className="w-6 h-6 text-primary/50" />
        </div>

        <p className="text-foreground/60 text-sm mb-4 leading-relaxed">
          {villa.description}
        </p>

        {/* Specs */}
        <div className="flex flex-wrap gap-4 mb-4 text-foreground/60 text-sm">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-primary/70" />
            <span>Beds: {villa.beds}</span>
          </div>
          {villa.guests && (
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-primary/70" />
              <span>Guests: {villa.guests}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-primary/70" />
            <span>Bath: {villa.baths}</span>
          </div>
        </div>

        {/* Booking Buttons */}
        <BookingButtons variant="cta" />
      </div>
    </motion.div>
  );
}

export default function VillaRental() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={villa1}
            alt="Luxury Villa Rental"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
        </div>

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
            className="inline-block text-primary tracking-[0.4em] uppercase text-sm mb-4"
          >
            Exclusive Properties
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            Villa <span className="text-gradient-lime">Rentals</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Experience one of our carefully curated, handpicked villas in Marbella. Every holiday home we offer is personally vetted and inspected by Amor VIP. 
            Wake up to sunshine, take a refreshing dip in your private pool, and let us handle all of your concierge needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-foreground/60"
          >
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              <span>8+ Luxury Villas</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-5 h-5 text-primary" />
              <span>Private Pools</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Prime Locations</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Villas Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Our <span className="text-gradient-lime">Properties</span>
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Handpicked luxury villas with stunning views, private pools, and exceptional amenities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {villas.map((villa, index) => (
              <VillaCard key={villa.name} villa={villa} index={index} />
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
              Find Your Perfect <span className="text-gradient-lime">Villa</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto mb-8">
              Contact our concierge team to find the ideal villa for your Marbella getaway. 
              We'll match you with a property that exceeds your expectations.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
