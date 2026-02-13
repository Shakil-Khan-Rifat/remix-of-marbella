import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, MapPin, Plane, Crown, Globe, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Zap, label: "Fast Track & Speedy Bookings" },
  { icon: MapPin, label: "Your Dedicated Marbella Host" },
  { icon: Crown, label: "VIP Access & Priority Entry" },
  { icon: Globe, label: "Global Travel Itinerary Planning" },
  { icon: Plane, label: "Private Aviation on Request" },
  { icon: ShieldCheck, label: "Trusted Local Expertise" },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 bg-background border-y border-primary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary tracking-[0.4em] uppercase text-sm">
            The Amor VIP Advantage
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">
            Why Clients <span className="text-gradient-lime">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-primary/10 bg-charcoal-light/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground/80 text-sm font-medium leading-tight">
                {benefit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
