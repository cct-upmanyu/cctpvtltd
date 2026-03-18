import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "pr-marketing")!;
export default function ZohoOnePRMarketing() { return <ZohoOneIndustryTemplate industry={industry} />; }
