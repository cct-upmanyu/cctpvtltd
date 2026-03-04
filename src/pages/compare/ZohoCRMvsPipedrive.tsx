import { CRMComparisonTemplate } from "@/components/crm-comparison/CRMComparisonTemplate";
import { getComparisonBySlug } from "@/data/crmComparisonData";

export default function ZohoCRMvsPipedrive() {
  const data = getComparisonBySlug("zoho-crm-vs-pipedrive");
  if (!data) return null;
  return <CRMComparisonTemplate data={data} />;
}
