'use client';

import { Amenity } from '@/types/types';
import { amenities as exportAmenities } from '@/lib/amenities';
import Title from './Title';

function Amenities({ amenities }: { amenities: string }) {
  const amenitiesList: Amenity[] = JSON.parse(amenities as string);
  const noAmenities = amenitiesList.every((amenity) => !amenity.selected);

  if (noAmenities) {
    return null;
  }

  return (
    <div className="mt-4">
      <Title text="What this place offers" />
      <div className="grid grid-cols-2 gap-x-4">
        {amenitiesList.map((amenity) => {
          if (!amenity.selected) {
            return null;
          }

          const matchingAmenity = exportAmenities.find(
            (exportAmenity) => exportAmenity.name === amenity.name
          );

          return (
            <div key={amenity.name} className="flex items-center gap-x-4 mb-2">
              {matchingAmenity && <matchingAmenity.icon className="w-4 h-4" />}
              <span className="font-light text-sm capitalize">{amenity.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Amenities;
