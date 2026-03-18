import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "real-estate")!;
export default function ZohoOneRealEstate() { return <ZohoOneIndustryTemplate industry={industry} />; }
