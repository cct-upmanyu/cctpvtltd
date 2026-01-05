import { CountryLandingPage } from "@/components/country/CountryLandingPage";
import { getCountryBySlug } from "@/data/countryData";

export default function ZohoPartnerCanada() {
  const country = getCountryBySlug("canada");
  if (!country) return null;
  return <CountryLandingPage country={country} />;
}
