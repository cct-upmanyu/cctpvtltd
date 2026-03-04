import { CRMComparisonTemplate } from "@/components/crm-comparison/CRMComparisonTemplate";
import { getComparisonBySlug } from "@/data/crmComparisonData";

export default function ZohoCRMvsFreshsales() {
  const data = getComparisonBySlug("zoho-crm-vs-freshsales");
  if (!data) return null;
  return <CRMComparisonTemplate data={data} />;
}
