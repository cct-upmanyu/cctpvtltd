import { CountryLandingPage } from "@/components/country/CountryLandingPage";
import { getCountryBySlug } from "@/data/countryData";

export default function ZohoPartnerUSA() {
  const country = getCountryBySlug("usa");
  if (!country) return null;
  return <CountryLandingPage country={country} />;
}
