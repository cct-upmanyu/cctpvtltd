import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "manufacturing")!;
export default function ZohoOneManufacturing() { return <ZohoOneIndustryTemplate industry={industry} />; }
