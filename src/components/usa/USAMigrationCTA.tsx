import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function USAMigrationCTA() {
  return (
    <section className="py-12" style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #F0FDFF 0%, #E8F4FD 50%, #EFF6FF 100%)" }}
        >
          {/* Left content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3 leading-tight">
              Looking to Migrate from Salesforce, HubSpot, or Legacy ERP?
            </h2>
            <p className="text-[#374151] text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              Connect with our certified Zoho specialists who will streamline your migration process and maximize your platform's performance. One step away from transforming your operational efficiency!
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="heroLight" size="lg" asChild>
                <Link to="/data-migration">
                  Request Migration Assessment
                </Link>
              </Button>
              <Button variant="heroSecondary" size="lg" asChild>
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>

          {/* Right decorative element */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0">
            <div className="relative w-28 h-28">
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full bg-[#3FE0F0]/10" />
              {/* Inner circle with arrow */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="absolute inset-3 rounded-full bg-[#3FE0F0]/15 flex items-center justify-center"
              >
                <ArrowRight className="w-8 h-8 text-[#0B1C3D]/60" />
              </motion.div>
              {/* Decorative dots */}
              <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-[#3FE0F0]/15" />
              <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-[#3FE0F0]/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
