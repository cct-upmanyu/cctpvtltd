import { CRMComparisonTemplate } from "@/components/crm-comparison/CRMComparisonTemplate";
import { getComparisonBySlug } from "@/data/crmComparisonData";

export default function ZohoCRMvsHubSpot() {
  const data = getComparisonBySlug("zoho-crm-vs-hubspot");
  if (!data) return null;
  return <CRMComparisonTemplate data={data} />;
}
