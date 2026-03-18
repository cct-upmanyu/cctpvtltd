import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "aviation")!;
export default function ZohoOneAviation() { return <ZohoOneIndustryTemplate industry={industry} />; }
