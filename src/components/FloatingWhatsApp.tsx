import { motion } from "framer-motion";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WHATSAPP_URL = "https://wa.me/34600250154?text=Hi%2C%20I%20would%20like%20to%20make%20a%20booking";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-full h-full object-cover rounded-full"
      />
    </motion.a>
  );
}
