import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Bed, Bath, Waves, MapPin, Users, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import HeroCarousel from "@/components/HeroCarousel";

import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";
import villa5 from "@/assets/villa-5.jpg";
import villa6 from "@/assets/villa-6.jpg";
import villa7 from "@/assets/villa-7.jpg";
import villa8 from "@/assets/villa-8.jpg";

const heroImages = [villa1, villa2, villa3, villa4, villa5, villa6, villa7, villa8];
import villaImagine from "@/assets/villa-imagine-new.jpg";
import villaNuevaAndalucia from "@/assets/villa-nueva-andalucia.png";
import villaMarbellamar from "@/assets/villa-marbellamar.png";
import villaCollectionGoldenMile from "@/assets/villa-collection-golden-mile.png";
import villaCasaLux from "@/assets/villa-casa-lux.png";
import villaLasDosTorres from "@/assets/villa-las-dos-torres.png";

interface Villa {
  name: string;
  description: string;
  beds: number;
  baths: number;
  guests?: number;
  images: string[];
  detailsPdf?: string;
}

const villas: Villa[] = [
  {
    name: "Villa Imagine",
    description: "Nestled in the prestigious hills of Monte Mayor, Benahavis, Villa Imagine represents the pinnacle of luxury living where elegance and sophistication meet unparalleled privacy and breathtaking sea and mountain views. This detached 6-bedroom, 5-bathroom villa features 472m² of built space, a private heated infinity pool, and a sprawling 3,100m² garden plot with panoramic views of the Mediterranean.",
    beds: 6,
    baths: 5,
    guests: 12,
    images: [villaImagine],
    detailsPdf: "/villas/villa-imagine.pdf",
  },
  {
    name: "Nueva Andalucía",
    description: "Step into refined luxury with this exquisite villa, perfectly situated in the prestigious and highly sought-after enclave of Nueva Andalucía—just moments from world-class amenities and the shimmering Mediterranean coastline. Set on a generous 500+ square meter plot with over 200 square meters of thoughtfully designed living space, this residence seamlessly blends elegance, comfort, and functionality. The open-plan living area features a recently renovated kitchen with premium appliances, expansive sliding doors opening onto a beautifully landscaped terrace with a heated private pool.",
    beds: 4,
    baths: 4,
    guests: 8,
    images: [villaNuevaAndalucia],
    detailsPdf: "/villas/nueva-andalucia.pdf",
  },
  {
    name: "Marbellamar Marbella Golden Mile",
    description: "Casa Del Sol is a stunning, newly reformed three-storey townhouse in Marbellamar, on the best beach in Marbella. Just 100 meters from sandy Casablanca beach, surrounded by celebrity hangouts. Walk to the old town of Marbella, the famous Marbella Club, and top quality bars and restaurants. This luxurious property sleeps up to ten guests and provides modern bathrooms, power showers, cotton sheets, maid service, and over 100 international TV channels.",
    beds: 5,
    baths: 4,
    guests: 10,
    images: [villaMarbellamar],
    detailsPdf: "/villas/marbellamar.pdf",
  },
  {
    name: "The Collection Marbella Golden Mile",
    description: "Located just 200 meters from the iconic Puente Romano Beach Resort & Spa, this stunning semi-detached villa offers an unparalleled five-star luxury experience on Marbella's Golden Mile. This four-level villa features a private 4x8m pool with tranquil waterfalls, an outdoor grill for alfresco dining, and a state-of-the-art outdoor cinema with a 200-inch projector. The 50 sqm rooftop terrace is the crown jewel, featuring a private jacuzzi with panoramic sea and mountain views.",
    beds: 4,
    baths: 4,
    guests: 8,
    images: [villaCollectionGoldenMile],
    detailsPdf: "/villas/collection-golden-mile.pdf",
  },
  {
    name: "Casa Lux Villa",
    description: "Elegant Marbella Villa located in the sought-after Linda Vista, San Pedro Beach side area. This luxury villa offers refined living just moments from the beach with bright, spacious interiors, a fully equipped kitchen, manicured garden, heated pool, and generous terraces. South-East orientation with parking, air conditioning, and central heating included.",
    beds: 5,
    baths: 5,
    guests: 10,
    images: [villaCasaLux],
    detailsPdf: "/villas/casa-lux.pdf",
  },
  {
    name: "Las Dos Torres",
    description: "Discover the ultimate in luxury and privacy at Las Dos Torres, a stunning contemporary Andalusian-style villa nestled in the exclusive gated community of Monte Mayor in Benahavís. This exquisite property offers 24-hour security, breathtaking sea and mountain views, and unparalleled serenity just 15 minutes from the vibrant Costa del Sol.",
    beds: 4,
    baths: 5,
    guests: 8,
    images: [villaLasDosTorres],
    detailsPdf: "/villas/las-dos-torres.pdf",
  },
];

function VillaCard({ villa, index }: { villa: Villa; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isSingleImage = villa.images.length === 1;

  const handleSeeMore = () => {
    if (villa.detailsPdf) {
      window.open(villa.detailsPdf, "_blank");
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-charcoal-light rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Section - Single or Grid */}
      {isSingleImage ? (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={villa.images[0]}
            alt={villa.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
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
      )}

      {/* Villa Details */}
      <div className="p-6 flex flex-col flex-grow">
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

        {villa.detailsPdf && (
          <button
            onClick={handleSeeMore}
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 text-sm font-medium transition-colors mb-4"
          >
            See More <ExternalLink className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Spacer to push buttons to bottom */}
        <div className="flex-grow" />

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
        <HeroCarousel images={heroImages} alt="Luxury Villa Rental" />

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
