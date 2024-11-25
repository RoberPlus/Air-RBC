import { findCountryByCode } from "@/lib/countries";
import Flag from "react-world-flags";

function CountryFlagAndName({ countryCode }: { countryCode: string }) {
  const validCountry = findCountryByCode(countryCode);
  const countryName =
    validCountry!.name.length > 20
      ? `${validCountry!.name.substring(0, 20)}...`
      : validCountry!.name;

  return (
    <span className="flex items-center justify-start gap-2">
      <Flag code={countryCode} style={{ width: 30, height: 30 }} />
      {countryName}
    </span>
  );
}
export default CountryFlagAndName;
