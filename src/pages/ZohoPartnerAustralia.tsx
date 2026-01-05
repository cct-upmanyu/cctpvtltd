import { CountryLandingPage } from "@/components/country/CountryLandingPage";
import { getCountryBySlug } from "@/data/countryData";

export default function ZohoPartnerAustralia() {
  const country = getCountryBySlug("australia");
  if (!country) return null;
  return <CountryLandingPage country={country} />;
}
