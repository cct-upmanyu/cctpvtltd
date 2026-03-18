import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "retail")!;
export default function ZohoOneRetail() { return <ZohoOneIndustryTemplate industry={industry} />; }
