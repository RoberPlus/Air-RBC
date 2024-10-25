import Image from 'next/image';
import Link from 'next/link';
import CountryFlagAndName from './CountryFlagAndName';
import PropertyRating from './PropertyRating';
import FavoriteToggleButton from './FavoriteToggleButton';
import { PropertyCardProps } from '@/types/types';
import { formatCurrency } from '@/lib/utils';

function PropertyCard({ property }: { property: PropertyCardProps }) {
  const { name, image, price } = property;
  const { country, id: propertyId, tagline } = property;

  return (
    <article className="group relative">
      <Link href={`/properties/${propertyId}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
          <Image
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            alt={name}
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500 items-"
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold mt-1">
            {name.length >= 30 ? `${name.substring(0, 35)}...` : name}
          </h3>
          <PropertyRating inPage={false} propertyId={propertyId} />
        </div>
        <p className="text-sm mt-1 text-muted-foreground ">
          {tagline.length >= 40 ? `${tagline.substring(0, 40)}...` : tagline}
        </p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm mt-1 ">
            <span className="font-semibold">{formatCurrency(price)} </span>
            USD night
          </p>
          <CountryFlagAndName countryCode={country} />
        </div>
      </Link>
      <div className="absolute top-5 right-5 z-5">
        <FavoriteToggleButton propertyId={propertyId} />
      </div>
    </article>
  );
}
export default PropertyCard;
