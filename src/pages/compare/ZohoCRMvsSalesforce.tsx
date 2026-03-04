import { CRMComparisonTemplate } from "@/components/crm-comparison/CRMComparisonTemplate";
import { getComparisonBySlug } from "@/data/crmComparisonData";

export default function ZohoCRMvsSalesforce() {
  const data = getComparisonBySlug("zoho-crm-vs-salesforce");
  if (!data) return null;
  return <CRMComparisonTemplate data={data} />;
}
