import { motion } from "framer-motion";
import { integrations } from "@/data/integrationsData";

export const IntegrationMarquee = () => {
  // Split apps into two rows for variety
  const row1Apps = integrations.slice(0, Math.ceil(integrations.length / 2));
  const row2Apps = integrations.slice(Math.ceil(integrations.length / 2));

  return (
    <div className="relative w-full">
      {/* Marquee rows */}
      <div className="space-y-6">
        {/* Row 1 - Scrolling Left */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-left">
            {[...row1Apps, ...row1Apps].map((app, index) => (
              <div
                key={`row1-${app.id}-${index}`}
                className="flex-shrink-0 mx-3"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl bg-white/95 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                  <img
                    src={app.logo}
                    alt={app.name}
                    className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
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
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl bg-white/95 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                  <img
                    src={app.logo}
                    alt={app.name}
                    className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
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

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <a
          href="#integrations"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
        >
          100+ More Integrations
        </a>
      </motion.div>
    </div>
  );
};
