import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "hospitality")!;
export default function ZohoOneHospitality() { return <ZohoOneIndustryTemplate industry={industry} />; }
