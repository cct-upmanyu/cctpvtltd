import { CRMComparisonTemplate } from "@/components/crm-comparison/CRMComparisonTemplate";
import { getComparisonBySlug } from "@/data/crmComparisonData";

export default function ZohoCRMvsMonday() {
  const data = getComparisonBySlug("zoho-crm-vs-monday-crm");
  if (!data) return null;
  return <CRMComparisonTemplate data={data} />;
}
