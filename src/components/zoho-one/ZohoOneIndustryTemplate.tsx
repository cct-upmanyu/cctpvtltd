import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, AlertTriangle, Lightbulb } from "lucide-react";
import type { ZohoOneIndustry } from "@/data/zohoOneIndustryData";

interface Props {
  industry: ZohoOneIndustry;
}

export default function ZohoOneIndustryTemplate({ industry }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{industry.metaTitle}</title>
        <meta name="description" content={industry.metaDescription} />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0B1C3D] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3FE0F0]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#4DA3FF]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#3FE0F0]/30 bg-[#3FE0F0]/10 text-[#3FE0F0] text-sm font-medium mb-6">
              Zoho One Industry Solution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{industry.heroTitle}</h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">{industry.heroSubtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroPrimary" size="xl" asChild>
                <Link to="/contact">Book a Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/contact?demo=true">Get a Custom Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Why {industry.name} Businesses Choose <span className="text-primary">Zoho One</span>
            </h2>
            <p className="text-[#374151] text-lg leading-relaxed">
              {industry.name} organizations face unique operational challenges that generic software can't solve. Zoho One provides 45+ integrated applications
              that work together seamlessly, giving {industry.name.toLowerCase()} businesses a unified platform to manage every aspect of their operations—from
              customer relationships and project management to finance and HR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4 inline mr-1" /> Industry Challenges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Key Challenges in {industry.name}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industry.challenges.map((challenge, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-red-100 bg-red-50/30 hover:shadow-md transition-all">
                <h3 className="text-lg font-semibold text-[#111827] mb-2">{challenge.title}</h3>
                <p className="text-[#374151] text-sm">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoho Solutions */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4 inline mr-1" /> Zoho One Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              How Zoho One Solves It
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industry.zohoSolutions.map((solution, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all">
                <h3 className="text-lg font-semibold text-[#111827] mb-2">{solution.title}</h3>
                <p className="text-[#374151] text-sm mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {solution.apps.map(app => (
                    <span key={app} className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{app}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Apps */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Recommended Zoho Apps for {industry.name}
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {industry.recommendedApps.map(app => (
              <motion.span key={app} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="px-4 py-2 bg-[#0B1C3D] text-white text-sm font-medium rounded-full flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3FE0F0]" />
                {app}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      {industry.workflow && (
        <section className="bg-light-gradient section-padding">
          <div className="container-custom max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Zap className="w-4 h-4 inline mr-1" /> Custom Workflow
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">{industry.workflow.title}</h2>
            </motion.div>
            <div className="space-y-4">
              {industry.workflow.steps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-[#111827] font-medium">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-[#111827]">Explore Related Solutions</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Zoho CRM", to: "/zoho-crm" },
              { label: "Zoho Creator", to: "/zoho-creator" },
              { label: "Zoho Books", to: "/zoho-books" },
              { label: "Zoho Analytics", to: "/zoho-analytics" },
              { label: "Industries", to: "/industries" },
              { label: "Contact Us", to: "/contact" },
            ].map(link => (
              <Link key={link.to} to={link.to} className="px-4 py-2 rounded-full border border-gray-200 text-[#374151] text-sm hover:border-primary hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1C3D] section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your {industry.name} Operations?
            </h2>
            <p className="text-[#E5E7EB] text-lg mb-8">
              Get a personalized Zoho One implementation plan tailored to your {industry.name.toLowerCase()} business. Our experts will map your workflows and recommend the perfect app stack.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroPrimary" size="xl" asChild>
                <Link to="/contact">Book a Free Consultation <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/contact?demo=true">Get a Custom Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
