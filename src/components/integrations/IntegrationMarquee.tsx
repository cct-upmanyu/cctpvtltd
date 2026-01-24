import { motion } from "framer-motion";
import { integrations } from "@/data/integrationsData";

export const IntegrationMarquee = () => {
  // Split apps into two rows for variety
  const row1Apps = integrations.slice(0, Math.ceil(integrations.length / 2));
  const row2Apps = integrations.slice(Math.ceil(integrations.length / 2));

  return (
    <div className="relative w-full">
      {/* Dark gradient background using design tokens */}
      <div className="relative bg-dark-gradient rounded-3xl overflow-hidden py-16">
        {/* Subtle glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Row 1 - Scrolling Left */}
          <div className="overflow-hidden mb-6">
            <div className="flex animate-marquee-left">
              {[...row1Apps, ...row1Apps].map((app, index) => (
                <div
                  key={`row1-${app.id}-${index}`}
                  className="flex-shrink-0 mx-3"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300">
                    <img
                      src={app.logo}
                      alt={app.name}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Right */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee-right">
              {[...row2Apps, ...row2Apps].map((app, index) => (
                <div
                  key={`row2-${app.id}-${index}`}
                  className="flex-shrink-0 mx-3"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300">
                    <img
                      src={app.logo}
                      alt={app.name}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Button - Outside the dark box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mt-8"
      >
        <a
          href="#integrations"
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105"
        >
          100+ More Integrations
        </a>
      </motion.div>
    </div>
  );
};
