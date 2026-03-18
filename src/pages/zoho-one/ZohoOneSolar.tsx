import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "solar-renewable")!;
export default function ZohoOneSolar() { return <ZohoOneIndustryTemplate industry={industry} />; }
