import { motion } from "framer-motion";
import cctLogo from "@/assets/cct-logo.png";

interface IntegrationApp {
  id: string;
  name: string;
  logo: string;
}

interface IntegrationSolarSystemProps {
  apps?: IntegrationApp[];
  showMoreCount?: number;
}

const defaultApps: IntegrationApp[] = [
  { id: "shopify", name: "Shopify", logo: "https://cdn.brandfetch.io/shopify.com/w/512/h/512/logo" },
  { id: "stripe", name: "Stripe", logo: "https://cdn.brandfetch.io/stripe.com/w/512/h/512/logo" },
  { id: "hubspot", name: "HubSpot", logo: "https://cdn.brandfetch.io/hubspot.com/w/512/h/512/logo" },
  { id: "salesforce", name: "Salesforce", logo: "https://cdn.brandfetch.io/salesforce.com/w/512/h/512/logo" },
  { id: "mailchimp", name: "Mailchimp", logo: "https://cdn.brandfetch.io/mailchimp.com/w/512/h/512/logo" },
  { id: "slack", name: "Slack", logo: "https://cdn.brandfetch.io/slack.com/w/512/h/512/logo" },
  { id: "zoho", name: "Zoho", logo: "https://cdn.brandfetch.io/zoho.com/w/512/h/512/logo" },
  { id: "quickbooks", name: "QuickBooks", logo: "https://cdn.brandfetch.io/quickbooks.intuit.com/w/512/h/512/logo" },
  { id: "whatsapp", name: "WhatsApp", logo: "https://cdn.brandfetch.io/whatsapp.com/w/512/h/512/logo" },
  { id: "googlesheets", name: "Google Sheets", logo: "https://cdn.brandfetch.io/google.com/w/512/h/512/logo" },
  { id: "xero", name: "Xero", logo: "https://cdn.brandfetch.io/xero.com/w/512/h/512/logo" },
  { id: "pipedrive", name: "Pipedrive", logo: "https://cdn.brandfetch.io/pipedrive.com/w/512/h/512/logo" },
];

export function IntegrationSolarSystem({ 
  apps = defaultApps, 
  showMoreCount = 100 
}: IntegrationSolarSystemProps) {
  // Position apps in orbital rings
  const innerRing = apps.slice(0, 4);
  const outerRing = apps.slice(4, 12);

  return (
    <div className="relative w-full py-16">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,85%,50%)] via-[hsl(200,80%,45%)] to-[hsl(210,90%,40%)] rounded-3xl overflow-hidden">
        {/* Subtle orbital lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
          <ellipse cx="400" cy="250" rx="150" ry="100" fill="none" stroke="white" strokeWidth="1" />
          <ellipse cx="400" cy="250" rx="280" ry="180" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-[450px] md:min-h-[500px]">
        {/* Center Hub - ClubCode Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute z-20"
        >
          <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-2xl shadow-2xl flex items-center justify-center p-3">
            <img 
              src={cctLogo} 
              alt="ClubCode Technology" 
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Inner Ring Apps */}
        {innerRing.map((app, index) => {
          const angle = (index / innerRing.length) * 360 - 45; // Start from top-left
          const radius = 140; // Inner radius
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * (radius * 0.7); // Elliptical

          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center p-2.5 hover:scale-110 transition-transform cursor-pointer"
              >
                <img 
                  src={app.logo} 
                  alt={app.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${app.name}&background=0D8ABC&color=fff&size=64`;
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Outer Ring Apps */}
        {outerRing.map((app, index) => {
          const angle = (index / outerRing.length) * 360 + 22.5; // Offset for variety
          const radius = 260; // Outer radius
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * (radius * 0.65); // More elliptical

          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
              className="absolute hidden md:block"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center p-2 hover:scale-110 transition-transform cursor-pointer"
              >
                <img 
                  src={app.logo} 
                  alt={app.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${app.name}&background=0D8ABC&color=fff&size=64`;
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}

        {/* "100+ More Apps" Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="absolute bottom-8 md:bottom-12"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-2.5 shadow-lg border border-white/50">
            <span className="text-sm md:text-base font-semibold text-[hsl(210,85%,40%)]">
              {showMoreCount}+ More Apps
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}