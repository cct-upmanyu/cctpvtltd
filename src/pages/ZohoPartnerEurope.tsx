import { CountryLandingPage } from "@/components/country/CountryLandingPage";
import { getCountryBySlug } from "@/data/countryData";

export default function ZohoPartnerEurope() {
  const country = getCountryBySlug("europe");
  if (!country) return null;
  return <CountryLandingPage country={country} />;
}
