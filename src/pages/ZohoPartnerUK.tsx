import { CountryLandingPage } from "@/components/country/CountryLandingPage";
import { getCountryBySlug } from "@/data/countryData";

export default function ZohoPartnerUK() {
  const country = getCountryBySlug("uk");
  if (!country) return null;
  return <CountryLandingPage country={country} />;
}
