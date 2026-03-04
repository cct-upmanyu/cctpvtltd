import { CRMComparisonTemplate } from "@/components/crm-comparison/CRMComparisonTemplate";
import { getComparisonBySlug } from "@/data/crmComparisonData";

export default function ZohoCRMvsDynamics() {
  const data = getComparisonBySlug("zoho-crm-vs-microsoft-dynamics");
  if (!data) return null;
  return <CRMComparisonTemplate data={data} />;
}
