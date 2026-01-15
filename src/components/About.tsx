import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary tracking-[0.4em] uppercase text-sm"
          >
            Our Story
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 mb-8"
          >
            Two Decades of
            <span className="text-gradient-gold block">Excellence</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-px bg-gradient-gold mx-auto mb-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 text-foreground/70 text-lg leading-relaxed"
          >
            <p>
              Our story began with our CEO, a seasoned luxury expert who fell in love with Marbella's 
              vibrant scene, glamorous parties, world-class dining, stunning villas, and year-round sunshine.
            </p>
            <p>
              What started as a trusted point of contact for friends seeking insider tips quickly grew into a 
              thriving network. Word spread, and soon, friends and family turned to us for everything Marbella. 
              That spark ignited Amor Vip Concierge, a full-service business dedicated to turning vacation dreams into reality.
            </p>
            <p>
              With over two decades of expertise, we eliminate the stress of planning, offering seamless, 
              personalized services tailored to your unique desires. Whether it's a private yacht cruise, 
              a luxury villa stay, VIP nightclub access, or the hottest pool parties, we handle every detail, 
              ensuring an extraordinary experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 glass-card rounded-lg"
          >
            <p className="font-display text-2xl md:text-3xl text-foreground italic">
              "At Amor Vip, we don't just plan getaways, 
              <span className="text-gradient-gold"> we create unforgettable moments.</span>"
            </p>
            <p className="text-primary mt-4 tracking-wider text-sm uppercase">
              Let us elevate your escape
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
