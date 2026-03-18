import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "professional-services")!;
export default function ZohoOneProfessionalServices() { return <ZohoOneIndustryTemplate industry={industry} />; }
