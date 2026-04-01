import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import EmergencyNumbers from "@/components/EmergencyNumbers";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <Features />
      <HowItWorks />
      <EmergencyNumbers />
      <Stats />
      <CTASection />
      <Footer />
    </main>
  );
}
