import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ZohoEcosystemSection } from "@/components/home/ZohoEcosystemSection";
import { AISolutionsSection } from "@/components/home/AISolutionsSection";
import { DataMigrationPreview } from "@/components/home/DataMigrationPreview";
import { IntegrationsPreview } from "@/components/home/IntegrationsPreview";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
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
        <DataMigrationPreview />
        <IntegrationsPreview />
        <IndustriesSection />
        <CaseStudiesPreview />
        <BlogPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
