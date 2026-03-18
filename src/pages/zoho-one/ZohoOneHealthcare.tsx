import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "healthcare")!;
export default function ZohoOneHealthcare() { return <ZohoOneIndustryTemplate industry={industry} />; }
