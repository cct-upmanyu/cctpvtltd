import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-dark-gradient section-padding pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg text-[#E5E7EB]">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-light-gradient section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">1. Introduction</h2>
                <p className="text-[#374151]">
                  Welcome to Club Code Technology Pvt. Ltd. ("we," "our," or "us"). These Terms and Conditions govern your use of our services, 
                  including but not limited to Zoho implementation, AI solutions, CRM services, data migration, and custom development services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">2. Services</h2>
                <p className="text-[#374151]">
                  Club Code Technology provides professional IT consulting and implementation services. Our services include:
                </p>
                <ul className="list-disc pl-6 text-[#374151] mt-4 space-y-2">
                  <li>Zoho Suite implementation and customization</li>
                  <li>CRM consulting, implementation, and optimization</li>
                  <li>AI and automation solutions</li>
                  <li>Data migration services</li>
                  <li>Custom ERP and web development</li>
                  <li>Third-party integrations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">3. Service Limitations</h2>
                <p className="text-[#374151] mb-4">
                  While we strive to deliver excellent service, certain limitations apply:
                </p>
                
                <div className="bg-[#F5F7FB] border-l-4 border-[#3FE0F0] p-6 rounded-r-lg">
                  <h3 className="font-bold text-[#111827] mb-3">Data Migration Downtime</h3>
                  <p className="text-[#374151] mb-4">
                    System downtime during migration may vary based on:
                  </p>
                  <ul className="list-disc pl-6 text-[#374151] space-y-2">
                    <li>Daily transaction volume</li>
                    <li>Number of users</li>
                    <li>Source application limitations</li>
                    <li>Data complexity and volume</li>
                    <li>Number of custom fields and relationships</li>
                    <li>Integration requirements</li>
                  </ul>
                  <p className="text-[#374151] mt-4">
                    Downtime may be increased or reduced depending on data complexity and application constraints. 
                    We follow a controlled migration approach with planned downtime of up to 12 hours, scheduled strictly 
                    during non-working hours to avoid operational impact.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">4. Client Responsibilities</h2>
                <p className="text-[#374151]">
                  Clients agree to:
                </p>
                <ul className="list-disc pl-6 text-[#374151] mt-4 space-y-2">
                  <li>Provide accurate and complete information required for service delivery</li>
                  <li>Ensure timely access to necessary systems and personnel</li>
                  <li>Review and approve deliverables within agreed timelines</li>
                  <li>Maintain valid licenses for all third-party software</li>
                  <li>Comply with data protection regulations applicable to their jurisdiction</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">5. Intellectual Property</h2>
                <p className="text-[#374151]">
                  Custom code, configurations, and solutions developed specifically for clients become their property upon full payment. 
                  Our proprietary frameworks, tools, and methodologies remain our intellectual property.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">6. Confidentiality</h2>
                <p className="text-[#374151]">
                  We maintain strict confidentiality of all client data and business information. Our team members sign NDAs and 
                  follow enterprise-grade security protocols.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">7. Payment Terms</h2>
                <p className="text-[#374151]">
                  Payment terms are specified in individual project agreements. Standard terms include milestone-based payments 
                  for projects and monthly billing for ongoing services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">8. Limitation of Liability</h2>
                <p className="text-[#374151]">
                  Our liability is limited to the value of services contracted. We are not liable for indirect, consequential, 
                  or incidental damages arising from service delivery.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">9. Dispute Resolution</h2>
                <p className="text-[#374151]">
                  Any disputes shall be resolved through good-faith negotiation. If unresolved, disputes will be subject to 
                  arbitration in accordance with applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">10. Contact Information</h2>
                <p className="text-[#374151]">
                  For questions about these Terms & Conditions, please contact us at:
                </p>
                <p className="text-[#374151] mt-4">
                  <strong>Club Code Technology Pvt. Ltd.</strong><br />
                  Email: legal@clubcodetech.com<br />
                  Website: www.clubcodetech.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
