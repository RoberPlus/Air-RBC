import Image from "next/image";
import Link from "next/link";
import CountryFlagAndName from "./CountryFlagAndName";
import PropertyRating from "./PropertyRating";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { PropertyCardProps } from "@/types/types";
import { formatCurrency } from "@/lib/utils";

function PropertyCard({ property }: { property: PropertyCardProps }) {
  const { name, image, price } = property;
  const { country, id: propertyId, tagline } = property;

  return (
    <article className="group relative">
      <Link href={`/properties/${propertyId}`}>
        <div className="relative mb-2 h-[300px] overflow-hidden rounded-md">
          <Image
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            alt={name}
            className="items- transform rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="mt-1 font-semibold">
            {name.length >= 30 ? `${name.substring(0, 30)}...` : name}
          </h3>
          <PropertyRating inPage={false} propertyId={propertyId} />
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {tagline.length >= 40 ? `${tagline.substring(0, 40)}...` : tagline}
        </p>
        <div className="mt-1 flex items-center justify-between">
          <p className="mt-1">
            <span className="font-semibold">{formatCurrency(price)} </span>
            USD night
          </p>
          <CountryFlagAndName countryCode={country} />
        </div>
      </Link>
      <div className="z-5 absolute right-5 top-5">
        <FavoriteToggleButton propertyId={propertyId} />
      </div>
    </article>
  );
}
export default PropertyCard;
