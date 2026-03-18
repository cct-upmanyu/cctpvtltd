import { zohoOneIndustries } from "@/data/zohoOneIndustryData";
import ZohoOneIndustryTemplate from "@/components/zoho-one/ZohoOneIndustryTemplate";
const industry = zohoOneIndustries.find(i => i.slug === "recruitment-staffing")!;
export default function ZohoOneRecruitment() { return <ZohoOneIndustryTemplate industry={industry} />; }
