import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Boxes, Users, Wrench, BarChart3, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroUkBg from "@/assets/hero-uk-landmarks.png";

const trustBar = [
  "Zoho Premium Partner",
  "800+ implementations delivered",
  "12+ years collective team experience",
  "24–48 hour support response",
];

const pillars = [
  {
    icon: Boxes,
    title: "CRM + Finance",
    body: "A closed deal in Zoho CRM creates the right record in Zoho Books without manual re-entry.",
    link: { label: "See Zoho CRM services", to: "/zoho-crm" },
  },
  {
    icon: Users,
    title: "HR + Operations",
    body: "Zoho People Plus alongside operational apps so headcount, onboarding, and access provisioning stay in sync.",
    link: null as null | { label: string; to: string },
  },
  {
    icon: Wrench,
    title: "Custom applications",
    body: "Built in Zoho Creator for the parts of your business no off-the-shelf module covers.",
    link: { label: "See Zoho Creator development", to: "/zoho-creator" },
  },
  {
    icon: BarChart3,
    title: "Reporting",
    body: "Zoho Analytics pulling from CRM, Books, and custom modules into one governed reporting layer, rather than a spreadsheet stitched together monthly.",
    link: { label: "See Zoho Analytics", to: "/zoho-analytics" },
  },
];

const sectors = [
  {
    name: "Professional services",
    body: "Engagement-to-invoicing is the critical link — a signed engagement in CRM needs to generate the right billing profile in Books automatically, and time or project tracking needs to feed both client reporting and internal utilisation reporting from the same underlying data.",
  },
  {
    name: "Manufacturing and distribution",
    body: "Billing-to-fulfilment is the critical link — a closed sale needs to trigger the right inventory and fulfilment record without a coordinator manually re-keying it, and stock visibility needs to reach sales, not stay siloed in operations.",
  },
  {
    name: "Retail, consumer goods, and e-commerce",
    body: "Channel-to-inventory is the critical link — online and wholesale orders both need to draw from the same live stock figure, or one channel ends up over-committing inventory the other has already sold.",
  },
];

const phases = [
  { step: "Systems audit", body: "What you're running today, where the gaps and duplicate data entry actually are." },
  { step: "Architecture design", body: "One data model across CRM, Finance, HR, and any custom apps, reviewed with your team before build starts." },
  { step: "Phased rollout", body: "Modules brought online in an order that doesn't stop the business mid-transition." },
  { step: "Migration", body: "Existing CRM, finance, and HR data brought across with validation, not a one-shot import." },
  { step: "Training", body: "Role-based, so finance sees finance workflows and sales sees sales workflows, not one generic session." },
  { step: "Governance & support", body: "A 24–48 hour response window as the business grows into the system and new edge cases surface." },
];

const faqs = [
  {
    q: "We already have some Zoho apps live separately — can you connect what exists instead of starting over?",
    a: "Usually, yes. A systems audit tells us what's salvageable versus what needs rebuilding before we recommend either.",
  },
  {
    q: "How is this different from just turning on more Zoho One modules ourselves?",
    a: "Turning modules on is the easy part — the failure mode we see most is modules switched on with no shared data model between them. The audit and architecture design steps exist specifically to prevent that.",
  },
  {
    q: "Do we need every Zoho One app, or just the ones relevant to us?",
    a: "Just the relevant ones, in most cases. We scope the rollout to the apps your business actually needs connected, not all 45+ apps in the bundle regardless of use case — though the subscription itself covers access to the full suite if you grow into more of it later.",
  },
  {
    q: "What's the support commitment after go-live?",
    a: "A 24–48 hour response window on support requests, which matters most in the first few months as real usage surfaces what a phased rollout plan couldn't fully anticipate.",
  },
  {
    q: "How does Zoho One handle data governance across HR and Finance together?",
    a: "Access control, retention rules, and audit visibility are designed consistently across every connected app during the architecture phase — not handled separately per module, which is where governance gaps usually appear.",
  },
  {
    q: "Can we migrate from our current HR or finance system as part of this?",
    a: "Yes — existing CRM, finance, and HR data is brought across with validation as part of the migration phase, rather than starting every module from a blank account.",
  },
];

export default function ZohoOnePartnerUK() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Zoho One Partner UK | 800+ Implementations — ClubCode</title>
        <meta
          name="description"
          content="Zoho Premium Partner with 800+ implementations, delivering Zoho One across UK businesses — CRM, Books, People, Creator, and Analytics unified into one governed system."
        />
        <link rel="canonical" href="/zoho-one-partner-uk" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/zoho-one-partner-uk" />
        <meta property="og:title" content="Zoho One Partner UK | 800+ Implementations — ClubCode" />
        <meta
          property="og:description"
          content="Zoho One for UK businesses — CRM, Finance, HR, custom applications and analytics unified under one governed data model."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroUkBg} alt="UK skyline representing Zoho One delivery across Britain" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, #050F26 0%, rgba(9,24,56,0.94) 45%, rgba(11,28,61,0.55) 100%)" }} />
        </div>
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

            <h1 className="text-3xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] mb-6">
              A Zoho Premium Partner with 800+ implementations,
              <span className="block bg-gradient-to-r from-[#3FE0F0] to-[#7FB3FF] bg-clip-text text-transparent">
                now delivering Zoho One across the UK.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#CBD9EC] leading-relaxed mb-9 max-w-2xl">
              One connected system — CRM, Finance, HR, and custom applications — instead of the same fragmentation Zoho
              One was supposed to remove, just inside one subscription.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="heroDark" size="lg" asChild>
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="lg" asChild>
                <Link to="/zoho-partner-uk">
                  See How We Approach Implementation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#071633] border-y border-white/10">
        <div className="container-custom">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5">
            {trustBar.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-[#C7D6EA]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3FE0F0]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT ZOHO ONE ACTUALLY IS */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-14 h-[3px] bg-gradient-to-r from-[#C8102E] to-[#012169] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3D] leading-tight mb-6">
              What Zoho One actually is
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed mb-5">
              Zoho One bundles Zoho's CRM, Finance, HR, Operations, and custom-application tools (over 45 apps,
              depending on plan) under one subscription, positioned as a single operating system for the business
              rather than a single product.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-[#0B1C3D] leading-snug border-l-2 border-[#0EA5C6] pl-6">
              The bundling is real — the unification isn't automatic. Buying Zoho One switches on access to every app;
              it doesn't switch on a shared data model connecting them. That has to be designed and built, which is
              where most Zoho One rollouts we're brought in to fix actually went wrong.
            </p>
            <Link
              to="/zoho-one-premium-partner"
              className="inline-flex items-center gap-1.5 mt-7 text-sm font-semibold text-[#0EA5C6] hover:text-[#0B1C3D] transition-colors"
            >
              See our Zoho One service in detail
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHERE IMPLEMENTATIONS GO WRONG */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #EEF4FB 100%)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3D] leading-tight mb-6">
                The problem Zoho One is meant to solve — and where implementations go wrong
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                In practice, most implementations we're brought in to fix have this pattern: CRM, Books, and HR were
                switched on separately, by different teams, at different times, with no shared data model connecting
                them. The result is the same fragmentation Zoho One was supposed to remove — just inside one
                subscription instead of five.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed mt-5">
                We implement it as one system instead.
              </p>
            </motion.div>

            <div className="divide-y divide-[#DCE5F0]">
              {pillars.map((item, i) => (
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

      {/* SECTORS */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0B1C3D] mb-4 max-w-2xl"
          >
            Built for how each industry actually runs Zoho One
          </motion.h2>
          <p className="text-lg text-[#64748B] max-w-2xl mb-12">
            We've implemented Zoho One for businesses in three sectors, and the connection points that matter differ by
            industry.
          </p>

          <div className="space-y-10">
            {sectors.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 border-l-2 border-[#3FE0F0]/50 pl-6 md:pl-8 hover:border-[#0EA5C6] transition-colors"
              >
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#94A3B8] uppercase block mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-[#0B1C3D]">{s.name}</h3>
                </div>
                <p className="text-[#475569] leading-relaxed text-lg">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE — dark band */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #071633 0%, #0F2A5F 60%, #0B1C3D 100%)" }}>
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#3FE0F0]/10 blur-3xl" />
        <div className="container-custom relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ShieldCheck className="w-8 h-8 text-[#3FE0F0] mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              GDPR and data governance across every connected app
            </h2>
            <p className="text-lg text-[#C7D6EA] leading-relaxed border-l-2 border-[#C8102E] pl-6">
              Because Zoho One spans CRM, HR, and Finance, customer and employee data under GDPR flows through more
              systems than a single-product rollout — which makes a consistent data governance model across every
              connected app more important, not less. We design access control, retention rules, and audit visibility
              as part of the architecture design phase, applied consistently whether the data originates in CRM, People
              Plus, or Books.
            </p>
            <Link
              to="/data-migration"
              className="inline-flex items-center gap-1.5 mt-7 text-sm font-semibold text-[#3FE0F0] hover:text-white transition-colors"
            >
              See our data migration approach
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ROLLOUT */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #EEF4FB 100%)" }}>
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0B1C3D] mb-14 max-w-2xl"
          >
            What a Zoho One rollout looks like with us
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

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3D] mb-10">FAQs</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-[#E2E8F0]">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#0B1C3D] hover:text-[#0EA5C6]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#475569] text-base leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(120deg, #0B1C3D 0%, #12356F 100%)" }}>
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C8102E] via-white to-[#012169]" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Considering Zoho One, or already on it and it isn't connected properly?
            </h2>
            <p className="text-lg text-[#C7D6EA] mb-9">
              Talk to a Zoho One Solution Architect about a phased rollout or a systems audit of what you're running
              today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroDark" size="lg" asChild>
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="lg" asChild>
                <Link to="/zoho-partner-uk">
                  See How We Approach Implementation
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
