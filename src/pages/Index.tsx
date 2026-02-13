import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <FAQ />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
