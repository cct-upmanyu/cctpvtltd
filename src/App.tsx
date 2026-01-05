import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ZohoSolutions from "./pages/ZohoSolutions";
import AISolutions from "./pages/AISolutions";
import CRMSolutions from "./pages/CRMSolutions";
import DataMigration from "./pages/DataMigration";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import CustomERP from "./pages/CustomERP";
import ThirdPartyIntegrations from "./pages/ThirdPartyIntegrations";
import ZohoExtensionDevelopment from "./pages/ZohoExtensionDevelopment";
import Industries from "./pages/Industries";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ZohoPartnerUK from "./pages/ZohoPartnerUK";
import ZohoPartnerUAE from "./pages/ZohoPartnerUAE";
import ZohoPartnerAustralia from "./pages/ZohoPartnerAustralia";
import ZohoPartnerCanada from "./pages/ZohoPartnerCanada";
import ZohoPartnerUSA from "./pages/ZohoPartnerUSA";
import ZohoPartnerIndia from "./pages/ZohoPartnerIndia";
import ZohoPartnerEurope from "./pages/ZohoPartnerEurope";
import ZohoOnePremiumPartner from "./pages/ZohoOnePremiumPartner";

// Industry Pages
import ManufacturingIndustry from "./pages/industries/ManufacturingIndustry";
import RetailIndustry from "./pages/industries/RetailIndustry";
import EducationIndustry from "./pages/industries/EducationIndustry";
import LogisticsIndustry from "./pages/industries/LogisticsIndustry";
import HealthcareIndustry from "./pages/industries/HealthcareIndustry";
import RealEstateIndustry from "./pages/industries/RealEstateIndustry";
import HospitalityIndustry from "./pages/industries/HospitalityIndustry";
import ITIndustry from "./pages/industries/ITIndustry";
import NonprofitIndustry from "./pages/industries/NonprofitIndustry";
import MediaIndustry from "./pages/industries/MediaIndustry";
import ProfessionalServicesIndustry from "./pages/industries/ProfessionalServicesIndustry";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/zoho-solutions" element={<ZohoSolutions />} />
          <Route path="/zoho-one-premium-partner" element={<ZohoOnePremiumPartner />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/crm-solutions" element={<CRMSolutions />} />
          <Route path="/data-migration" element={<DataMigration />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/custom-erp" element={<CustomERP />} />
          <Route path="/third-party-integrations" element={<ThirdPartyIntegrations />} />
          <Route path="/zoho-extension-development" element={<ZohoExtensionDevelopment />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          {/* Country-specific Zoho Partner pages */}
          <Route path="/zoho-partner-uk" element={<ZohoPartnerUK />} />
          <Route path="/zoho-partner-uae" element={<ZohoPartnerUAE />} />
          <Route path="/zoho-partner-australia" element={<ZohoPartnerAustralia />} />
          <Route path="/zoho-partner-canada" element={<ZohoPartnerCanada />} />
          <Route path="/zoho-partner-usa" element={<ZohoPartnerUSA />} />
          <Route path="/zoho-partner-india" element={<ZohoPartnerIndia />} />
          <Route path="/zoho-partner-europe" element={<ZohoPartnerEurope />} />
          {/* Industry-specific pages */}
          <Route path="/industries/manufacturing" element={<ManufacturingIndustry />} />
          <Route path="/industries/retail" element={<RetailIndustry />} />
          <Route path="/industries/education" element={<EducationIndustry />} />
          <Route path="/industries/logistics" element={<LogisticsIndustry />} />
          <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
          <Route path="/industries/real-estate" element={<RealEstateIndustry />} />
          <Route path="/industries/hospitality" element={<HospitalityIndustry />} />
          <Route path="/industries/it" element={<ITIndustry />} />
          <Route path="/industries/nonprofits" element={<NonprofitIndustry />} />
          <Route path="/industries/media" element={<MediaIndustry />} />
          <Route path="/industries/professional-services" element={<ProfessionalServicesIndustry />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;