import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { feature: "All-in-One Business OS (50+ Apps)", zoho: true, salesforce: false, hubspot: false },
  { feature: "Built-in AI (Zia)", zoho: true, salesforce: true, hubspot: false },
  { feature: "Low-Code App Builder (Creator)", zoho: true, salesforce: false, hubspot: false },
  { feature: "Unified Data Model", zoho: true, salesforce: false, hubspot: false },
  { feature: "Starting Price (per user/mo)", zoho: "$14", salesforce: "$25", hubspot: "$20" },
  { feature: "Enterprise Suite Price", zoho: "$52", salesforce: "$300+", hubspot: "$150+" },
  { feature: "No Hidden Add-On Costs", zoho: true, salesforce: false, hubspot: false },
  { feature: "Native Finance, HR, & IT Management", zoho: true, salesforce: false, hubspot: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <span className="text-[#111827] font-semibold text-sm">{value}</span>;
  return value
    ? <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
    : <XCircle className="w-5 h-5 text-red-400/60 mx-auto" />;
}

export function ComparisonEngine() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)" }}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Zoho vs. Salesforce vs. HubSpot
          </h2>
          <p className="text-[#374151] text-lg max-w-2xl mx-auto">
            See why leading US businesses choose Zoho for superior ROI, AI-readiness, and unified data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0B1C3D]">
                  <th className="text-left text-white/80 font-semibold p-4 min-w-[200px]">Feature</th>
                  <th className="text-center p-4 min-w-[120px]">
                    <span className="text-[#3FE0F0] font-bold">Zoho</span>
                  </th>
                  <th className="text-center text-white/70 font-semibold p-4 min-w-[120px]">Salesforce</th>
                  <th className="text-center text-white/70 font-semibold p-4 min-w-[120px]">HubSpot</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="p-4 text-[#374151] font-medium">{row.feature}</td>
                    <td className="p-4 text-center"><CellValue value={row.zoho} /></td>
                    <td className="p-4 text-center"><CellValue value={row.salesforce} /></td>
                    <td className="p-4 text-center"><CellValue value={row.hubspot} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Button variant="heroLight" size="lg" asChild>
            <Link to="/compare/zoho-crm-vs-salesforce">
              Full Salesforce Comparison <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="heroSecondary" size="lg" asChild>
            <Link to="/compare/zoho-crm-vs-hubspot">
              Full HubSpot Comparison <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
