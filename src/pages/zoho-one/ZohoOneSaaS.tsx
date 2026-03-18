import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "saas-technology")!;
export default function ZohoOneSaaS() { return <ZohoOneIndustryTemplate industry={industry} />; }
