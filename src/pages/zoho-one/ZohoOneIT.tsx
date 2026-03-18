import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "information-technology")!;
export default function ZohoOneIT() { return <ZohoOneIndustryTemplate industry={industry} />; }
