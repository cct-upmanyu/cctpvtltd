import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "media")!;
export default function ZohoOneMedia() { return <ZohoOneIndustryTemplate industry={industry} />; }
