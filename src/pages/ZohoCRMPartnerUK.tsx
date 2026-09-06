import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Compass, Settings2, MoveRight, Workflow, ShieldCheck } from "lucide-react";
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

const lifecycle = [
  {
    icon: Compass,
    title: "Implementation",
    body: "We map your actual sales pipeline, approval chains, and reporting needs before a single module is configured — not after.",
    link: null as null | { label: string; to: string },
  },
  {
    icon: Settings2,
    title: "Customisation",
    body: "Custom modules, layouts, validation rules, workflow automation, and Blueprint-driven process enforcement, so the CRM reflects how your team works rather than the other way round.",
    link: { label: "See Zoho CRM services", to: "/zoho-crm" },
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
    body: "Connecting Zoho CRM to Zoho Books, Zoho Creator apps, and the third-party tools your business already runs on, so data moves once and stays accurate everywhere.",
    link: { label: "See integration services", to: "/third-party-integrations" },
  },
];

const sectors = [
  {
    name: "Professional services",
    body: "The CRM has to double as an engagement tracker — from proposal to signed contract to active delivery — with billing tied to Zoho Books so a signed engagement generates the right invoice profile automatically. We build client onboarding as an enforced Blueprint stage sequence, not a checklist someone has to remember to follow, so nothing slips through between sales and delivery handoff.",
  },
  {
    name: "Manufacturing and distribution",
    body: "Sales reps need live stock visibility while quoting, not a static price list disconnected from what's actually in the warehouse. We integrate CRM with your inventory or ERP system so a quote reflects real, current stock, and closed orders flow through to fulfilment without manual re-keying — a common source of order errors we're regularly brought in to fix after the fact.",
  },
  {
    name: "Retail, consumer goods, and e-commerce",
    body: "Wholesale and online channels typically run on separate systems that don't share stock data, so a wholesale rep can promise inventory an online order has already committed. We connect the e-commerce platform, CRM, and Books so stock updates in real time across every channel a customer might order through.",
  },
];

const phases = [
  { step: "Discovery", body: "Mapping your current sales process, data sources, and reporting gaps, including where your team currently works around the CRM rather than through it." },
  { step: "Design", body: "A data model and workflow design reviewed with your team before build starts, so surprises surface at design review, not at go-live." },
  { step: "Build & configure", body: "Modules, automation, layouts, and integrations, built to the design your team already signed off on." },
  { step: "Migrate", body: "Data brought across with field-by-field validation, not a bulk import you find the gaps in six months later." },
  { step: "Train & go live", body: "Role-based training on the system your team will actually use day to day, not one all-staff walkthrough." },
  { step: "Support", body: "A 24–48 hour response window on support requests, because the weeks after go-live are when real usage surfaces the edge cases discovery didn't catch." },
];

const faqs = [
  {
    q: "How long does a Zoho CRM implementation take?",
    a: "It depends on scope — a straightforward implementation with clean data typically moves faster than a migration carrying years of custom fields and history. We give you a specific timeline at the design stage, once we've actually seen your data and process, not before.",
  },
  {
    q: "Can you migrate us from Salesforce or HubSpot without losing our history?",
    a: "Yes — that's a core part of what we do, with field-by-field validation rather than a bulk export/import that quietly drops custom fields or attachment history.",
  },
  {
    q: "Why would we move off Salesforce or Dynamics to Zoho CRM?",
    a: "Usually cost and customisation flexibility — Zoho CRM's per-user licensing is materially lower than Salesforce or Dynamics 365 Sales at comparable functionality tiers, and Zoho Creator lets us build custom logic Salesforce or Dynamics would need separate paid add-ons for. We can walk through current like-for-like pricing during a consultation, since public pricing on all three platforms changes periodically.",
  },
  {
    q: "What happens if something breaks after go-live?",
    a: "Support requests get a response within 24–48 hours. The first few months after go-live are when real usage surfaces issues discovery didn't catch, so this window matters more than it sounds.",
  },
  {
    q: "Do you only work with large enterprises?",
    a: "No — our 800+ implementations span professional services, manufacturing and distribution, and retail/e-commerce businesses of varying sizes, not only large enterprise accounts.",
  },
  {
    q: "Is our data handled in a GDPR-compliant way?",
    a: "Yes — field-level access control, retention rules, and consent tracking are built into the CRM data model at the design stage, not added afterward.",
  },
  {
    q: "Can you build custom functionality Zoho CRM doesn't have out of the box?",
    a: "Yes, through Zoho Creator — custom applications and workflow logic that extend beyond standard CRM configuration, built to integrate with your CRM data rather than sit disconnected from it.",
  },
  {
    q: "What if we already have a CRM and just want it fixed, not replaced?",
    a: "We regularly inherit CRM instances that were implemented once and never properly adopted. A short discovery review tells us whether it's a configuration fix or something that needs migrating to a cleaner setup — we'll tell you honestly which one it is before recommending either.",
  },
];

export default function ZohoCRMPartnerUK() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Zoho CRM Partner UK | 800+ Implementations — ClubCode</title>
        <meta
          name="description"
          content="Zoho Premium Partner with 800+ CRM and ERP implementations. UK-based Zoho CRM implementation, customisation, and migration from Salesforce, HubSpot, or legacy systems."
        />
        <link rel="canonical" href="/zoho-crm-partner-uk" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/zoho-crm-partner-uk" />
        <meta property="og:title" content="Zoho CRM Partner UK | 800+ Implementations — ClubCode" />
        <meta
          property="og:description"
          content="Zoho Premium Partner with 800+ implementations, delivering Zoho CRM implementation, customisation, and migration for UK businesses."
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
          <img src={heroUkBg} alt="London skyline representing UK Zoho CRM delivery" className="w-full h-full object-cover" />
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
              Zoho CRM Premium Partner,
              <span className="block bg-gradient-to-r from-[#3FE0F0] to-[#7FB3FF] bg-clip-text text-transparent">
                delivered at scale across the UK.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#CBD9EC] leading-relaxed mb-9 max-w-2xl">
              UK businesses use us to implement, customise, and migrate Zoho CRM because we design the system around
              how their sales process actually runs — not a generic default their team abandons within a year.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="heroDark" size="lg" asChild>
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="lg" asChild>
                <Link to="/case-studies">
                  See CRM Case Studies
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

      {/* WHAT ZOHO CRM REPLACES */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-14 h-[3px] bg-gradient-to-r from-[#C8102E] to-[#012169] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3D] leading-tight mb-6">
              What Zoho CRM actually replaces
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed mb-5">
              Most businesses evaluating Zoho CRM are replacing one of three things: a spreadsheet-based sales process
              that's outgrown itself, an existing CRM (Salesforce, HubSpot, Dynamics, or a legacy system) that's become
              expensive or hard to customise, or a CRM that was implemented once, badly, and never properly adopted.
            </p>
            <p className="text-lg text-[#475569] leading-relaxed mb-5">
              Zoho CRM covers the same core ground as Salesforce or Dynamics 365 Sales — pipeline management,
              automation, forecasting, custom objects — at a materially lower licensing cost per user, which is why UK
              businesses moving off Salesforce or Dynamics for cost reasons land here most often.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-[#0B1C3D] leading-snug border-l-2 border-[#0EA5C6] pl-6">
              The platform itself isn't usually the reason a CRM project succeeds or fails, though. The implementation
              is.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY UK BUSINESSES */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #EEF4FB 100%)" }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C3D] leading-tight mb-6">
                Why UK businesses bring their Zoho CRM projects to us
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed">
                We are not a new entrant testing the UK market — we are a Zoho Premium Partner with 800+ CRM and ERP
                implementations behind us, and UK delivery is a core part of how we work. Most CRM problems aren't
                platform problems; they're implementation problems. A CRM configured around generic defaults, rather
                than how your sales process actually runs, ends up under-used within a year. That's the gap an
                established partner exists to close.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed mt-5">
                We cover the full Zoho CRM lifecycle — from first implementation through customisation, migration, and
                long-term support.
              </p>
              <Link
                to="/zoho-partner-uk"
                className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[#0EA5C6] hover:text-[#0B1C3D] transition-colors"
              >
                See how we approach UK delivery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="divide-y divide-[#DCE5F0]">
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

      {/* SECTORS */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0B1C3D] mb-4 max-w-2xl"
          >
            Built for how each industry actually sells
          </motion.h2>
          <p className="text-lg text-[#64748B] max-w-2xl mb-12">
            We've delivered Zoho CRM specifically in three sectors, and the CRM configuration looks materially
            different in each.
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

      {/* GDPR + TEAM — dark band */}
      <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #071633 0%, #0F2A5F 60%, #0B1C3D 100%)" }}>
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#3FE0F0]/10 blur-3xl" />
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ShieldCheck className="w-8 h-8 text-[#3FE0F0] mb-5" />
            <h2 className="text-3xl font-bold text-white mb-6">GDPR-aware by design, not retrofitted</h2>
            <p className="text-lg text-[#C7D6EA] leading-relaxed border-l-2 border-[#C8102E] pl-6">
              UK and EU customer and prospect data has to be handled under GDPR from the point it enters the CRM — not
              patched in after a data protection review flags a gap. We design CRM data models with field-level access
              control, data retention rules, and consent tracking built into the initial configuration, so compliance
              is part of the architecture rather than a separate project layered on afterward.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h2 className="text-3xl font-bold text-white mb-6 mt-0 lg:mt-[3.25rem]">Who's actually building it</h2>
            <p className="text-lg text-[#C7D6EA] leading-relaxed border-l-2 border-[#3FE0F0] pl-6">
              CRM projects go wrong most often when the person configuring the system has never had to run a sales team
              on it. Our team includes Zoho Solution Architects with over 15 years of combined enterprise CRM and
              integration delivery experience, including hands-on Salesforce integration work — the kind of background
              that catches a migration edge case before it becomes a data-loss incident, not after. Across the wider
              team, our certified specialists cover Zoho CRM, Zoho One, Zoho Creator, Zoho Books, and Salesforce
              integration — not a single generalist consultant spread across every module.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
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
              Ready to fix how your team uses CRM?
            </h2>
            <p className="text-lg text-[#C7D6EA] mb-9">
              Talk to a Zoho CRM Solution Architect about implementation, customisation, or migrating from your current
              system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="heroDark" size="lg" asChild>
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="lg" asChild>
                <Link to="/case-studies">
                  See CRM Case Studies
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
