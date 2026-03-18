import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "financial-services")!;
export default function ZohoOneFinancialServices() { return <ZohoOneIndustryTemplate industry={industry} />; }
