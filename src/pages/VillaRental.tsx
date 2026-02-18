import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Bed, Bath, Users, MessageCircle, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialsSlider from "@/components/TestimonialsSlider";

import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";
import villa5 from "@/assets/villa-5.jpg";
import villa6 from "@/assets/villa-6.jpg";
import villa7 from "@/assets/villa-7.jpg";
import villa8 from "@/assets/villa-8.jpg";

const heroImages = [villa1, villa2, villa3, villa4, villa5, villa6, villa7, villa8];
import villaImagine1 from "@/assets/villa-imagine-1.jpg";
import villaImagine2 from "@/assets/villa-imagine-2.jpg";
import villaImagine3 from "@/assets/villa-imagine-3.jpg";
import villaImagine4 from "@/assets/villa-imagine-4.jpg";
import villaImagine5 from "@/assets/villa-imagine-5.jpg";
import villaImagine6 from "@/assets/villa-imagine-6.jpg";
import villaImagine7 from "@/assets/villa-imagine-7.jpg";
import villaImagine8 from "@/assets/villa-imagine-8.jpg";
import villaNuevaAndalucia from "@/assets/villa-nueva-andalucia.png";
import villaMarbellamar from "@/assets/villa-marbellamar.png";
import villaCollectionGoldenMile from "@/assets/villa-collection-golden-mile.png";
import villaLaRosa1 from "@/assets/villa-la-rosa-1.jpg";
import villaLaRosa2 from "@/assets/villa-la-rosa-2.jpg";
import villaLaRosa3 from "@/assets/villa-la-rosa-3.jpg";
import villaLaRosa4 from "@/assets/villa-la-rosa-4.jpg";
import villaLaRosa5 from "@/assets/villa-la-rosa-5.jpg";
import villaLaRosa6 from "@/assets/villa-la-rosa-6.jpg";
import villaLaRosa7 from "@/assets/villa-la-rosa-7.jpg";
import villaLaRosa8 from "@/assets/villa-la-rosa-8.jpg";


import villaBenvano1 from "@/assets/villa-benvano-new-1.jpg";
import villaBenvano2 from "@/assets/villa-benvano-new-2.jpg";
import villaBenvano3 from "@/assets/villa-benvano-new-3.jpg";
import villaBenvano4 from "@/assets/villa-benvano-new-4.jpg";
import villaBenvano5 from "@/assets/villa-benvano-new-5.jpg";
import villaBenvano6 from "@/assets/villa-benvano-new-6.jpg";
import villaBenvano7 from "@/assets/villa-benvano-new-7.jpg";
import villaBenvano8 from "@/assets/villa-benvano-new-8.jpg";
import villaBenvano9 from "@/assets/villa-benvano-new-9.jpg";
import villaBenvano10 from "@/assets/villa-benvano-new-10.jpg";
import villaAtalaya1 from "@/assets/villa-atalaya-1.png";
import villaAtalaya2 from "@/assets/villa-atalaya-2.png";
import villaAtalaya3 from "@/assets/villa-atalaya-3.png";
import villaAtalaya4 from "@/assets/villa-atalaya-4.png";
import villaAtalaya5 from "@/assets/villa-atalaya-5.png";
import villaAtalaya6 from "@/assets/villa-atalaya-6.png";
import villaAtalaya7 from "@/assets/villa-atalaya-7.png";
import villaAtalaya8 from "@/assets/villa-atalaya-8.png";
import villaAtalaya9 from "@/assets/villa-atalaya-9.png";
import villaAtalaya10 from "@/assets/villa-atalaya-10.png";
import villaLayla1 from "@/assets/villa-layla-1.png";
import villaLayla2 from "@/assets/villa-layla-2.png";
import villaLayla3 from "@/assets/villa-layla-3.png";
import villaLayla4 from "@/assets/villa-layla-4.png";
import villaLayla5 from "@/assets/villa-layla-5.png";
import villaLayla6 from "@/assets/villa-layla-6.png";
import villaLayla7 from "@/assets/villa-layla-7.png";
import villaLayla8 from "@/assets/villa-layla-8.png";
import villaLayla9 from "@/assets/villa-layla-9.png";
import villaLayla10 from "@/assets/villa-layla-10.png";
import villaAma1 from "@/assets/villa-ama-1.png";
import villaAma2 from "@/assets/villa-ama-2.png";
import villaAma3 from "@/assets/villa-ama-3.png";
import villaAma4 from "@/assets/villa-ama-4.png";
import villaAma5 from "@/assets/villa-ama-5.png";
import villaAma6 from "@/assets/villa-ama-6.png";
import villaAma7 from "@/assets/villa-ama-7.png";
import villaAma8 from "@/assets/villa-ama-8.png";
import villaTorro1 from "@/assets/villa-torro-1.png";
import villaTorro2 from "@/assets/villa-torro-2.png";
import villaTorro3 from "@/assets/villa-torro-3.png";
import villaTorro4 from "@/assets/villa-torro-4.png";
import villaTorro5 from "@/assets/villa-torro-5.png";
import villaTorro6 from "@/assets/villa-torro-6.png";
import villaTorro7 from "@/assets/villa-torro-7.png";
import villaTorro8 from "@/assets/villa-torro-8.png";
import villaTorro9 from "@/assets/villa-torro-9.png";
import villaTorro10 from "@/assets/villa-torro-10.png";
import villaMozart1 from "@/assets/villa-mozart-1.png";
import villaMozart2 from "@/assets/villa-mozart-2.png";
import villaMozart3 from "@/assets/villa-mozart-3.png";
import villaMozart4 from "@/assets/villa-mozart-4.png";
import villaMozart5 from "@/assets/villa-mozart-5.png";
import villaMozart6 from "@/assets/villa-mozart-6.png";
import villaMozart7 from "@/assets/villa-mozart-7.png";
import villaMozart8 from "@/assets/villa-mozart-8.png";
import villaMozart9 from "@/assets/villa-mozart-9.png";
import villaPedro1 from "@/assets/villa-pedro-1.png";
import villaPedro2 from "@/assets/villa-pedro-2.png";
import villaPedro3 from "@/assets/villa-pedro-3.png";
import villaPedro4 from "@/assets/villa-pedro-4.png";
import villaPedro5 from "@/assets/villa-pedro-5.png";
import villaPedro6 from "@/assets/villa-pedro-6.png";
import villaPedro7 from "@/assets/villa-pedro-7.png";
import villaPedro8 from "@/assets/villa-pedro-8.png";
import villaPedro9 from "@/assets/villa-pedro-9.png";
import villaTropic1 from "@/assets/villa-tropic-1.png";
import villaTropic2 from "@/assets/villa-tropic-2.png";
import villaTropic3 from "@/assets/villa-tropic-3.png";
import villaTropic4 from "@/assets/villa-tropic-4.png";
import villaTropic5 from "@/assets/villa-tropic-5.png";
import villaTropic6 from "@/assets/villa-tropic-6.png";
import villaTropic7 from "@/assets/villa-tropic-7.png";
import villaTropic8 from "@/assets/villa-tropic-8.png";
import villaTropic9 from "@/assets/villa-tropic-9.png";
import villaTropic10 from "@/assets/villa-tropic-10.png";

const WHATSAPP_URL = "https://wa.me/34600250154?text=Hi%2C%20I%20would%20like%20to%20make%20a%20booking";

interface Villa {
  name: string;
  slug: string;
  description: string;
  beds: number;
  baths: number;
  guests?: number;
  images: string[];
}

const villas: Villa[] = [
  {
    name: "Villa Imagine",
    slug: "villa-imagine",
    description: "A private luxury villa set in the exclusive hills of Monte Mayor, offering panoramic sea and mountain views with complete privacy. Villa Imagine blends contemporary design with effortless indoor-outdoor living, featuring a heated infinity pool, expansive terraces, and refined open-plan interiors flooded with natural light.",
    beds: 5,
    baths: 5,
    guests: 11,
    images: [villaImagine1, villaImagine2, villaImagine3, villaImagine4, villaImagine5, villaImagine6, villaImagine7, villaImagine8],
  },
  {
    name: "Villa Benvano",
    slug: "villa-benvano",
    description: "A refined three-level luxury villa set within the prestigious Los Flamingos community, offering panoramic golf and Mediterranean sea views in a serene, private setting. Designed for elevated living, Villa Benvano combines architectural elegance with exceptional comfort. The villa features four en-suite bedrooms, accessed across three floors via a private elevator. Light-filled living and dining spaces open onto expansive terraces with a heated infinity pool, covered lounge, and outdoor dining—ideal for relaxed entertaining. A rooftop terrace delivers sweeping views across the golf course and coastline. For leisure and wellness, guests enjoy a private cinema room, Technogym fitness area, billiards room, and a SONOS multi-room audio system throughout. A two-car garage and shaded porch ensure seamless arrivals and departures. An elegant retreat for discreet luxury stays close to Marbella's golf, beaches, and fine dining.",
    beds: 4,
    baths: 4,
    guests: 8,
    images: [villaBenvano1, villaBenvano2, villaBenvano3, villaBenvano4, villaBenvano5, villaBenvano6, villaBenvano7, villaBenvano8, villaBenvano9, villaBenvano10],
  },
  {
    name: "Villa Atalaya",
    slug: "villa-atalaya",
    description: "A modern luxury villa located in the sought-after Atalaya area, offering privacy, space, and effortless access to Marbella's lifestyle. Designed for relaxed contemporary living, Villa Atalaya combines clean architectural lines with comfortable indoor-outdoor flow. The villa features an open-plan living and dining area filled with natural light, leading directly onto a treeline garden terrace and heated swimming pool. Accommodation includes five well-appointed bedrooms, three with en-suite bathrooms, complemented by additional guest bathrooms. A private cinema room adds an extra layer of comfort for evenings at home. Located just 15 minutes from Puerto Banús and close to local amenities, the villa offers convenience without compromising on tranquillity. A stylish, well-balanced retreat for refined Marbella stays.",
    beds: 5,
    baths: 5,
    guests: 10,
    images: [villaAtalaya1, villaAtalaya2, villaAtalaya3, villaAtalaya4, villaAtalaya5, villaAtalaya6, villaAtalaya7, villaAtalaya8, villaAtalaya9, villaAtalaya10],
  },
  {
    name: "Villa Layla",
    slug: "villa-layla",
    description: "Set in the heart of Nueva Andalucía's prestigious Golf Valley, Villa Layla occupies one of Marbella's most sought-after residential addresses. Surrounded by renowned golf courses, including Las Brisas, the villa enjoys uninterrupted views toward La Concha and a peaceful, private setting defined by natural beauty. With an eastern orientation, the property is filled with soft morning light and enjoys sunshine throughout the day. Despite its tranquil position, Villa Layla is just minutes from Puerto Banús, leading international schools, and Marbella's finest dining, shopping, and lifestyle destinations. A refined Golf Valley residence offering privacy, views, and immediate access to Marbella's elite lifestyle.",
    beds: 5,
    baths: 5,
    guests: 10,
    images: [villaLayla1, villaLayla2, villaLayla3, villaLayla4, villaLayla5, villaLayla6, villaLayla7, villaLayla8, villaLayla9, villaLayla10],
  },
  {
    name: "Villa Ama",
    slug: "villa-ama",
    description: "A stunning sophisticated residence nestled in the picturesque landscape of lower Nueva Andalucía. Across two floors, it unveils expansive windows and inviting terraces with breathtaking views of La Concha and the Mediterranean. Features include a welcoming courtyard, separate guesthouse, marble infinity pool, and interiors finished with noble materials such as marble and wood in an ethereal palette.",
    beds: 5,
    baths: 5,
    guests: 10,
    images: [villaAma1, villaAma2, villaAma3, villaAma4, villaAma5, villaAma6, villaAma7, villaAma8],
  },
  {
    name: "Villa Torro",
    slug: "villa-torro",
    description: "A vibrant contemporary villa located in the heart of Nueva Andalucía, just moments from Centro Plaza, the bullring, and within walking distance of Puerto Banús and the beach. Villa Torro offers the ideal balance between privacy and immediate access to Marbella's social and lifestyle scene. Set across two levels with six en-suite bedrooms, swimming pool, jacuzzi, gazebo, and a rooftop lounge with panoramic views of La Concha.",
    beds: 6,
    baths: 6,
    guests: 12,
    images: [villaTorro1, villaTorro2, villaTorro3, villaTorro4, villaTorro5, villaTorro6, villaTorro7, villaTorro8, villaTorro9, villaTorro10],
  },
  {
    name: "Villa La Rosa",
    slug: "villa-la-rosa",
    description: "Enjoy relaxed luxury in this beautiful Spanish-style villa, perfect for families and groups. Lounge by the pool, unwind in the jacuzzi, or cook in the fully equipped outdoor kitchen while taking in stunning views of La Concha mountain. Local bars and restaurants are just a short walk away.\n\nThe villa features five spacious en-suite bedrooms sleeping up to 12 guests, including a family room and a luxurious master suite with walk-in wardrobe, bath, and mountain views. Inside, you'll find a stylish lounge with IPTV, dining area, and fully equipped kitchen.\n\nOutside, enjoy the large saltwater pool surrounded by palm trees, sunset drinks on the terrace, and evening ambience in the beautifully lit gardens — ideal for unforgettable stays in Marbella.",
    beds: 5,
    baths: 5,
    guests: 12,
    images: [villaLaRosa1, villaLaRosa2, villaLaRosa3, villaLaRosa4, villaLaRosa5, villaLaRosa6, villaLaRosa7, villaLaRosa8],
  },
  {
    name: "Villa Pedro",
    slug: "villa-pedro",
    description: "A refined beachside villa located within a gated community in San Pedro de Alcántara, offering privacy, comfort, and close proximity to the sea. Features spacious living areas with fireplace, private cinema room, games room, and garden with sea views.",
    beds: 5,
    baths: 5,
    guests: 10,
    images: [villaPedro1, villaPedro2, villaPedro3, villaPedro4, villaPedro5, villaPedro6, villaPedro7, villaPedro8, villaPedro9],
  },
  {
    name: "Villa Tropic",
    slug: "villa-tropic",
    description: "A private tropical-style villa set on a quiet cul-de-sac in Puerto Banus, offering complete privacy and a relaxed luxury atmosphere. Features an open-plan living space with bi-folding doors, swimming pool, jacuzzi, and landscaped tropical surroundings.",
    beds: 4,
    baths: 4,
    guests: 8,
    images: [villaTropic1, villaTropic2, villaTropic3, villaTropic4, villaTropic5, villaTropic6, villaTropic7, villaTropic8, villaTropic9, villaTropic10],
  },
  {
    name: "Villa Mozart",
    slug: "villa-mozart",
    description: "A contemporary four-level luxury villa located in the prestigious gated community of Sierra Blanca. Villa Mozart offers panoramic sea and mountain views, refined interiors, and exceptional privacy just minutes from the Golden Mile and Puerto Banús. Features a rooftop terrace with full-size swimming pool.",
    beds: 6,
    baths: 9,
    guests: 12,
    images: [villaMozart1, villaMozart2, villaMozart3, villaMozart4, villaMozart5, villaMozart6, villaMozart7, villaMozart8, villaMozart9],
  },
];

function VillaCard({ villa, index }: { villa: Villa; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Link to={`/villa-rental/${villa.slug}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-charcoal-light rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-500 flex flex-col h-full cursor-pointer"
      >
      {/* Single Image Thumbnail */}
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={villa.images[0]}
          alt={villa.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Villa Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-2xl md:text-3xl text-foreground">
            {villa.name}
          </h3>
          <Home className="w-6 h-6 text-primary/50" />
        </div>

        <p className="text-foreground/60 text-sm mb-4 leading-relaxed line-clamp-3">
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

        {/* Spacer to push buttons to bottom */}
        <div className="flex-grow" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-lime text-primary-foreground font-medium tracking-wider uppercase text-xs rounded-lg hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire</span>
          </a>
          <Link
            to={`/villa-rental/${villa.slug}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-primary/30 text-foreground font-medium tracking-wider uppercase text-xs rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Eye className="w-4 h-4" />
            <span>See Details</span>
          </Link>
        </div>
      </div>
    </motion.div>
    </Link>
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

      <TestimonialsSlider />

      <Footer />
    </div>
  );
}
