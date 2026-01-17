import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, Clock, Music, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import fitzImg from "@/assets/nightclub-fitz.png";
import fitzFloorPlan from "@/assets/fitz-floor-plan.png";
import fitzDj from "@/assets/fitz-dj.png";
import fitzCrowd from "@/assets/fitz-crowd.png";
import fitzPerformance from "@/assets/fitz-performance.png";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const galleryImages = [
  { src: fitzImg, alt: "FITZ Main Bar" },
  { src: fitzDj, alt: "FITZ DJ Booth" },
  { src: fitzCrowd, alt: "FITZ Dance Floor" },
  { src: fitzPerformance, alt: "FITZ Live Performance" },
];

const features = [
  { icon: "🎵", title: "Premium Sound", description: "State-of-the-art sound system for an immersive audio experience" },
  { icon: "✨", title: "Light Shows", description: "Stunning visual displays and cutting-edge lighting design" },
  { icon: "🍾", title: "VIP Service", description: "Exclusive bottle service with dedicated staff" },
  { icon: "🎧", title: "Top DJs", description: "World-class DJs and live performances nightly" },
];

const priceList = [
  { name: "Orange 1st Floor", capacity: "Up to 5", price: "€500" },
  { name: "Green 1st Floor", capacity: "Up to 5", price: "€700" },
  { name: "Blue 1st Floor", capacity: "Up to 5", price: "€1000" },
  { name: "Dark Blue 1st Floor", capacity: "Up to 5", price: "€2000" },
  { name: "Green 1st Floor", capacity: "Up to 10", price: "€2500" },
  { name: "Red 1st Floor", capacity: "Up to 5", price: "€3000" },
  { name: "Gold 1st Floor", capacity: "Up to 7", price: "€5000" },
  { name: "Pink 2nd Floor", capacity: "Up to 5", price: "€300" },
  { name: "Dark Green 2nd Floor", capacity: "Up to 5", price: "€750" },
  { name: "Yellow 2nd Floor", capacity: "Up to 5", price: "€1000" },
  { name: "Box 1 2nd Floor", capacity: "Up to 7", price: "€2000" },
  { name: "Box 2 2nd Floor", capacity: "Up to 7", price: "€2000" },
  { name: "Purple 2nd Floor", capacity: "Up to 5", price: "€5000" },
  { name: "Red Balcony 2nd Floor", capacity: "Up to 15", price: "€5000" },
];

export default function FitzPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      {/* Hero Image Carousel */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/30 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-background/50 transition-all duration-300">
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-background/30 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-background/50 transition-all duration-300">
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {galleryImages.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-primary" : "bg-foreground/40"}`} />
          ))}
        </div>

        <div className="absolute bottom-20 left-0 right-0 z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-6xl md:text-8xl text-foreground">
            <span className="text-gradient-lime">FITZ</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-foreground/70 mt-4 text-lg tracking-wider">
            Nightclub • Marbella
          </motion.p>
        </div>
      </section>

      {/* Back Link */}
      <section className="container mx-auto px-6 py-8">
        <Link to="/nightclubs" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">Back to Nightclubs</span>
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-primary tracking-[0.4em] uppercase text-sm block mb-4">About The Venue</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Premier <span className="text-gradient-lime">Nightlife Hotspot</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-6">
                Fitz Marbella is a premier nightlife hotspot in Puerto Banús, blending luxury with high-energy entertainment. Its sleek design, state-of-the-art sound, and vibrant atmosphere create the perfect setting for unforgettable nights.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-8">
                With top DJs, live performances, and expertly crafted cocktails, Fitz delivers an electrifying experience in the heart of Marbella's nightlife scene.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Puerto Banús</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">12:00 AM - 7:00 AM</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-sm">House, EDM, Commercial</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Dress to Impress</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <img src={fitzImg} alt="FITZ Marbella" className="w-full h-[500px] object-cover rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent" />
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              What Makes FITZ <span className="text-gradient-lime">Special</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center p-6 bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Table Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              VIP Table <span className="text-gradient-lime">Reservations</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Reserve your VIP table and experience FITZ in style. Prices include bottle service minimum.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-charcoal-light rounded-2xl border border-primary/10 overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-4 p-4 bg-background/30 border-b border-primary/10">
              <span className="text-foreground font-medium text-sm uppercase tracking-wider">Table</span>
              <span className="text-foreground font-medium text-sm uppercase tracking-wider text-center">Capacity</span>
              <span className="text-foreground font-medium text-sm uppercase tracking-wider text-right">Price</span>
            </div>
            <div className="divide-y divide-primary/5">
              {priceList.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="grid grid-cols-3 gap-4 p-4 hover:bg-background/20 transition-colors duration-300"
                >
                  <span className="text-foreground/80 text-sm">{item.name}</span>
                  <span className="text-foreground/60 text-sm text-center">{item.capacity}</span>
                  <span className="text-primary font-medium text-sm text-right">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Venue <span className="text-gradient-lime">Floor Plan</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Explore our two-floor layout featuring premium VIP tables across Primera Planta and Segunda Planta
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-background/50">
              <img 
                src={fitzFloorPlan} 
                alt="FITZ Marbella Floor Plan" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Experience <span className="text-gradient-lime">FITZ</span>?
            </h2>
            <p className="text-foreground/60 mb-10">
              Contact our concierge team to secure your VIP table and skip the line at Marbella's hottest nightclub.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
