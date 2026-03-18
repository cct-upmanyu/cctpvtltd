import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "logistics")!;
export default function ZohoOneLogistics() { return <ZohoOneIndustryTemplate industry={industry} />; }
