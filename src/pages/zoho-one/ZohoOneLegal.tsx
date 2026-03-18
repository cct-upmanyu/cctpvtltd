import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "legal")!;
export default function ZohoOneLegal() { return <ZohoOneIndustryTemplate industry={industry} />; }
