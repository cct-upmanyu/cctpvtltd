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
import Industries from "./pages/Industries";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/crm-solutions" element={<CRMSolutions />} />
          <Route path="/data-migration" element={<DataMigration />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/custom-erp" element={<CustomERP />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;