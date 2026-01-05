import { CountryLandingPage } from "@/components/country/CountryLandingPage";
import { getCountryBySlug } from "@/data/countryData";

export default function ZohoPartnerIndia() {
  const country = getCountryBySlug("india");
  if (!country) return null;
  return <CountryLandingPage country={country} />;
}
