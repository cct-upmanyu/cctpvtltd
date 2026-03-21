import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ZohoEcosystemSection } from "@/components/home/ZohoEcosystemSection";
import { ZohoEcosystemImageSection } from "@/components/home/ZohoEcosystemImageSection";
import { AISolutionsSection } from "@/components/home/AISolutionsSection";
import { DataMigrationPreview } from "@/components/home/DataMigrationPreview";
import { IntegrationsPreview } from "@/components/home/IntegrationsPreview";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CaseStudiesAndBlog } from "@/components/home/CaseStudiesAndBlog";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GlobalPresenceSection } from "@/components/home/GlobalPresenceSection";
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
        <ZohoEcosystemImageSection />
        <AISolutionsSection />
        <DataMigrationPreview />
        <IntegrationsPreview />
        <IndustriesSection />
        <CaseStudiesAndBlog />
        <TestimonialsSection />
        <GlobalPresenceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
