"use client";

import { Amenity } from "@/types/types";
import { amenities as exportAmenities } from "@/lib/amenities";
import Title from "./Title";

function Amenities({ amenities }: { amenities: string }) {
  const amenitiesList: Amenity[] = JSON.parse(amenities as string);
  const noAmenities = amenitiesList.every((amenity) => !amenity.selected);

  if (noAmenities) {
    return null;
  }

  return (
    <div className="mt-4">
      <Title text="What this place offers" />
      <div className="mt-5 grid grid-cols-2 gap-x-4">
        {amenitiesList.map((amenity) => {
          if (!amenity.selected) {
            return null;
          }

          const matchingAmenity = exportAmenities.find(
            (exportAmenity) => exportAmenity.name === amenity.name,
          );

          return (
            <div
              key={amenity.name}
              className="mb-2 flex items-center gap-x-4 space-y-3"
            >
              {matchingAmenity && (
                <matchingAmenity.icon className="h-6 w-6 md:h-8 md:w-8" />
              )}
              <span className="font-light capitalize">{amenity.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Amenities;
