import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import zohoOneLogo from "@/assets/zoho-one-logo.png";

const zohoSuites = [
  { name: "CRM Plus", description: "Unified customer experience" },
  { name: "Finance Plus", description: "Complete finance suite" },
  { name: "People Plus", description: "HR & workforce management" },
  { name: "Workplace", description: "Collaboration tools" },
  { name: "Marketing Plus", description: "Marketing automation" },
  { name: "Service Plus", description: "Customer service" },
];

const zohoApps = [
  { name: "CRM", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm.png", color: "#E42527" },
  { name: "Books", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/books.png", color: "#4CAF50" },
  { name: "Creator", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/creator.png", color: "#00A1E0" },
  { name: "Desk", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/desk.png", color: "#009688" },
  { name: "People", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/people.png", color: "#4CAF50" },
  { name: "Recruit", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/recruit.png", color: "#FF6F00" },
  { name: "Projects", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/projects.png", color: "#F44336" },
  { name: "Campaigns", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/campaigns.png", color: "#6A1B9A" },
  { name: "Analytics", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/analytics.png", color: "#1976D2" },
  { name: "Inventory", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/inventory.png", color: "#F7981D" },
  { name: "Invoice", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/invoice.png", color: "#2196F3" },
  { name: "Mail", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/mail.png", color: "#4285F4" },
  { name: "SalesIQ", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/salesiq.png", color: "#7B1FA2" },
  { name: "Social", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/social.png", color: "#E91E63" },
  { name: "Flow", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/flow.png", color: "#00BCD4" },
  { name: "Sign", logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/sign.png", color: "#00BCD4" },
];

const AppCard = ({ app, index }: { app: typeof zohoApps[0]; index: number }) => {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center gap-1.5 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="rounded-2xl bg-white flex items-center justify-center p-3"
        style={{
          width: '64px',
          height: '64px',
          boxShadow: isHovered
            ? `0 8px 24px ${app.color}35, 0 0 0 2px ${app.color}`
            : '0 2px 12px rgba(0,0,0,0.06)',
          border: isHovered ? `2px solid ${app.color}` : '2px solid #F3F4F6',
          transform: isHovered ? 'scale(1.15) translateY(-4px)' : 'scale(1)',
          transition: 'all 0.3s ease',
        }}
      >
        {imgError ? (
          <div
            className="w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ backgroundColor: app.color }}
          >
            {app.name.substring(0, 2)}
          </div>
        ) : (
          <img
            src={app.logo}
            alt={`Zoho ${app.name}`}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <span
        className="text-[11px] font-semibold whitespace-nowrap"
        style={{ color: isHovered ? app.color : '#374151' }}
      >
        {app.name}
      </span>
    </motion.div>
  );
};

export function ZohoEcosystemImageSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[42%_58%] gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium mb-4">
              Zoho Premium Partner
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-6">
              Complete Zoho
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ecosystem Mastery
              </span>
            </h2>
            <p className="text-[#374151] text-base lg:text-lg mb-8 max-w-lg">
              As a certified Global Zoho Premium Partner and Creator Champions, we implement the full Zoho ecosystem—from individual apps to complete enterprise suites.
            </p>

            <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-8 max-w-lg">
              {zohoSuites.map((suite, index) => (
                <motion.div
                  key={suite.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-2 p-2.5 lg:p-3 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[#111827] text-xs lg:text-sm truncate">{suite.name}</h4>
                    <p className="text-[10px] lg:text-xs text-[#6B7280] truncate">{suite.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white border-0">
              <Link to="/zoho-solutions">
                Explore Zoho Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Side - Honeycomb Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            {/* Central Zoho One */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex flex-col items-center mb-2"
            >
              <img src={zohoOneLogo} alt="Zoho One" className="w-14 h-auto object-contain" />
              <span className="text-xs text-[#6B7280] mt-1 font-medium">Unified Business OS</span>
            </motion.div>

            {/* Apps Grid - staggered rows */}
            <div className="flex flex-col items-center gap-5">
              {/* Row 1 - 4 apps */}
              <div className="flex items-center justify-center gap-6">
                {zohoApps.slice(0, 4).map((app, i) => (
                  <AppCard key={app.name} app={app} index={i} />
                ))}
              </div>
              {/* Row 2 - 5 apps (offset) */}
              <div className="flex items-center justify-center gap-6">
                {zohoApps.slice(4, 9).map((app, i) => (
                  <AppCard key={app.name} app={app} index={i + 4} />
                ))}
              </div>
              {/* Row 3 - 4 apps */}
              <div className="flex items-center justify-center gap-6">
                {zohoApps.slice(9, 13).map((app, i) => (
                  <AppCard key={app.name} app={app} index={i + 9} />
                ))}
              </div>
              {/* Row 4 - 3 apps */}
              <div className="flex items-center justify-center gap-6">
                {zohoApps.slice(13, 16).map((app, i) => (
                  <AppCard key={app.name} app={app} index={i + 13} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
