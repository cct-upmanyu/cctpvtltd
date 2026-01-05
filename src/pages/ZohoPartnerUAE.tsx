import { CountryLandingPage } from "@/components/country/CountryLandingPage";
import { getCountryBySlug } from "@/data/countryData";

export default function ZohoPartnerUAE() {
  const country = getCountryBySlug("uae");
  if (!country) return null;
  return <CountryLandingPage country={country} />;
}
