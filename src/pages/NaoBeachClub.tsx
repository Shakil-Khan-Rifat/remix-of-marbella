import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Music, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingButtons from "@/components/BookingButtons";
import VenueGalleryCarousel from "@/components/VenueGalleryCarousel";
import naoHero from "@/assets/nao-hero.jpg";
import naoGallery1 from "@/assets/nao-gallery-1.jpg";
import naoGallery2 from "@/assets/nao-gallery-2.jpg";
import naoGallery3 from "@/assets/nao-gallery-3.jpg";
import naoGallery4 from "@/assets/nao-gallery-4.jpg";
import naoGallery5 from "@/assets/nao-gallery-5.jpg";

// Scroll to top on page load
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const galleryImages = [
  { src: naoGallery1, alt: "Naô Pool Club Daybed Lounge" },
  { src: naoGallery2, alt: "Naô Night Party" },
  { src: naoGallery3, alt: "Naô Pool Cabanas" },
  { src: naoGallery4, alt: "Naô Daytime Pool Party" },
  { src: naoGallery5, alt: "Naô Pool Party" },
];

const features = [
  { icon: "🍾", title: "Premium Service", description: "Dedicated VIP service with bottle packages and cabanas" },
  { icon: "🎵", title: "Live Entertainment", description: "World-class DJs and live performances throughout the season" },
  { icon: "🍽️", title: "Gourmet Dining", description: "Mediterranean fusion cuisine prepared by top chefs" },
];


export default function NaoBeachClub() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      {/* Static Hero Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={naoHero}
            alt="Naô Pool Club"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-20 left-0 right-0 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-8xl text-foreground"
          >
            <span className="text-gradient-lime">Naô Pool Club</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/70 mt-4 text-lg tracking-wider"
          >
            Marbella
          </motion.p>
        </div>
      </section>

      {/* Back Link */}
      <section className="container mx-auto px-6 py-8">
        <Link
          to="/beach-clubs"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">Back to Beach Clubs</span>
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary tracking-[0.4em] uppercase text-sm block mb-4">
                About The Venue
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                The Ultimate <span className="text-gradient-lime">Destination</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed mb-6">
                Naô Pool Club is the ultimate destination for luxury poolside partying, 
                renowned as one of the hottest and trendiest spots in Marbella. Experience 
                a vibrant fusion of exclusivity and celebration in this stunning venue.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-8">
                Boasting a stylish ambiance with chic decor, signature cocktails, and an 
                eclectic lineup of international guest DJs, Naô captivates with its Ibiza-esque 
                flair for mixing music genres like Tech House and Commercial House.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Puerto Banús, Marbella</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm">12:00 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Music className="w-5 h-5 text-primary" />
                  <span className="text-sm">Live Entertainment</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/70">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm">Dress Code: Beach Wear</span>
                </div>
              </div>
            </motion.div>

            <VenueGalleryCarousel images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              What Makes Naô <span className="text-gradient-lime">Special</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Experience <span className="text-gradient-lime">Naô</span>?
            </h2>
            <p className="text-foreground/60 mb-10">
              Contact our concierge team to secure your VIP reservation and experience 
              the best of Marbella's beach club scene.
            </p>
            <BookingButtons />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
