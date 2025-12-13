import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ZohoEcosystemSection } from "@/components/home/ZohoEcosystemSection";
import { AISolutionsSection } from "@/components/home/AISolutionsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <CapabilitiesSection />
        <ZohoEcosystemSection />
        <AISolutionsSection />
        <IndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;