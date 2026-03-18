import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "nonprofits")!;
export default function ZohoOneNonprofits() { return <ZohoOneIndustryTemplate industry={industry} />; }
