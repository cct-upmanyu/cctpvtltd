import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "education")!;
export default function ZohoOneEducation() { return <ZohoOneIndustryTemplate industry={industry} />; }
