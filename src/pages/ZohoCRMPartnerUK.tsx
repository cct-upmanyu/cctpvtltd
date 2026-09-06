import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Compass, Settings2, MoveRight, Workflow } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import heroUkBg from "@/assets/hero-uk-landmarks.png";

const lifecycle = [
  {
    icon: Compass,
    title: "Implementation",
    body: "We map your actual sales pipeline, approval chains, and reporting needs before a single module is configured — not after.",
  },
  {
    icon: Settings2,
    title: "Customisation",
    body: "Custom modules, layouts, validation rules, workflow automation, and Blueprint-driven process enforcement, so the CRM reflects how your team works rather than the other way round.",
    link: null,
  },
  {
    icon: MoveRight,
    title: "Migration",
    body: "Moving CRM data from Salesforce, HubSpot, or a legacy system into Zoho CRM without losing history, custom fields, or reporting continuity.",
    link: { label: "See our migration approach", to: "/data-migration" },
  },
  {
    icon: Workflow,
    title: "Integration",
    body: "Connecting Zoho CRM to Zoho Books, Zoho Creator apps, and third-party tools your business already runs on, so data moves once and stays accurate everywhere.",
    link: { label: "See integration services", to: "/third-party-integrations" },
  },
];

const phases = [
  { step: "Discovery", body: "Mapping your current sales process, data sources, and reporting gaps." },
  { step: "Design", body: "A data model and workflow design reviewed with your team before build starts." },
  { step: "Build & configure", body: "Modules, automation, layouts, and integrations." },
  { step: "Migrate", body: "Data brought across with validation, not just a bulk import." },
  { step: "Train & go live", body: "Your team trained on the system they'll actually use." },
  { step: "Support", body: "Post-launch tuning as real usage surfaces edge cases the discovery phase didn't catch." },
];

export default function ZohoCRMPartnerUK() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Zoho CRM Partner UK | Implementation, Customisation & Migration</title>
        <meta
          name="description"
          content="Certified Zoho CRM Partner serving UK businesses. CRM implementation, customisation, and migration from Salesforce, HubSpot, or legacy systems — built on a Zoho Premium Partner foundation."
        />
        <link rel="canonical" href="/zoho-crm-partner-uk" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/zoho-crm-partner-uk" />
        <meta property="og:title" content="Zoho CRM Partner UK | Implementation, Customisation & Migration" />
        <meta
          property="og:description"
          content="Zoho Premium Partner delivering Zoho CRM implementation, customisation, and migration for UK businesses."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroUkBg} alt="London skyline representing UK Zoho CRM delivery" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, #050F26 0%, rgba(9,24,56,0.94) 45%, rgba(11,28,61,0.55) 100%)" }} />
        </div>
        {/* UK accent ribbon */}
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#C8102E] via-[#FFFFFF] to-[#012169]" />

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-5 w-8 overflow-hidden rounded-[3px] shadow-lg">
                <span className="w-1/3 bg-[#012169]" />
                <span className="w-1/3 bg-white" />
                <span className="w-1/3 bg-[#C8102E]" />
              </span>
              <span className="text-[#9FD9FF] text-sm font-semibold tracking-[0.18em] uppercase">
                Zoho Premium Partner · United Kingdom
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.05] mb-6">
              Zoho CRM Partner,
              <span className="block bg-gradient-to-r from-[#3FE0F0] to-[#7FB3FF] bg-clip-text text-transparent">
                United Kingdom
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-medium mb-5">
              Zoho CRM, implemented properly the first time.
            </p>
            <p className="text-lg text-[#CBD9EC] leading-relaxed mb-9 max-w-2xl">
              ClubCode Technology is a Zoho Premium Partner delivering Zoho CRM implementation, customisation, and
              migration for UK businesses. We build CRM systems your sales, marketing, and support teams actually
              use — not another tool bolted onto spreadsheets.
            </p>

            <Button variant="heroDark" size="lg" asChild>
              <Link to="/contact">
                Book a CRM consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* WHY UK BUSINESSES — editorial split + lifecycle as flowing rows */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-14 h-[3px] bg-gradient-to-r from-[#C8102E] to-[#012169] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3D] leading-tight mb-6">
                Why UK businesses bring their Zoho CRM projects to us
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                Most CRM problems aren't platform problems — they're implementation problems. A CRM configured around
                generic defaults, rather than how your sales process actually runs, ends up under-used within a year.
                That's the gap we close.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed mt-5">
                As a Zoho Premium Partner, we work across the full Zoho CRM lifecycle.
              </p>
            </motion.div>

            <div className="divide-y divide-[#E2E8F0]">
              {lifecycle.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex gap-6 py-7 first:pt-0"
                >
                  <item.icon className="w-6 h-6 mt-1 shrink-0 text-[#0EA5C6] transition-transform group-hover:translate-x-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#0B1C3D] mb-2">{item.title}</h3>
                    <p className="text-[#475569] leading-relaxed">{item.body}</p>
                    {item.link && (
                      <Link
                        to={item.link.to}
                        className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#0EA5C6] hover:text-[#0B1C3D] transition-colors"
                      >
                        {item.link.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR UK — dark editorial band */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #071633 0%, #0F2A5F 60%, #0B1C3D 100%)" }}>
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#3FE0F0]/10 blur-3xl" />
        <div className="container-custom relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Built for how UK businesses actually operate
            </h2>
            <p className="text-lg text-[#C7D6EA] leading-relaxed mb-6 border-l-2 border-[#C8102E] pl-6">
              UK implementations carry their own requirements — GDPR-compliant data handling, UK-specific reporting
              periods, and integration with UK accounting and finance tools. Our team designs CRM data models with these
              requirements in from day one, not retrofitted after go-live.
            </p>
            <p className="text-lg text-[#C7D6EA] leading-relaxed border-l-2 border-[#3FE0F0] pl-6">
              Our Zoho Solution Architects bring over 15 years of combined enterprise CRM and integration delivery
              experience, including direct Salesforce integration expertise — useful when a migration project needs both
              systems talking to each other during transition, not just a one-time export/import.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROCESS — vertical timeline, not boxes */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #EEF4FB 100%)" }}>
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0B1C3D] mb-14 max-w-2xl"
          >
            What implementation actually looks like
          </motion.h2>

          <div className="relative pl-8 md:pl-0">
            <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-[#3FE0F0] via-[#94A3B8]/40 to-transparent md:-translate-x-1/2" />
            {phases.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`relative md:w-1/2 pb-12 last:pb-0 ${i % 2 === 0 ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"}`}
              >
                <span
                  className={`absolute top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#0EA5C6] -left-[29px] md:left-auto ${
                    i % 2 === 0 ? "md:-right-2" : "md:-left-2"
                  }`}
                />
                <span className="text-xs font-bold tracking-[0.2em] text-[#94A3B8] uppercase">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-[#0B1C3D] mt-2 mb-2">{p.step}</h3>
                <p className="text-[#475569] leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(120deg, #0B1C3D 0%, #12356F 100%)" }}>
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C8102E] via-white to-[#012169]" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Ready to fix how your team uses CRM?
            </h2>
            <p className="text-lg text-[#C7D6EA] mb-9">
              Talk to a Zoho CRM Solution Architect about implementation, customisation, or migrating from your current
              system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroDark" size="lg" asChild>
                <Link to="/contact">
                  Book a consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="lg" asChild>
                <Link to="/case-studies">
                  See CRM case studies
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
