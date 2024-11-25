import { fetchPropertyRating, fetchPropertyReviews } from "@/lib/actions";
import Title from "@/components/properties/Title";
import ReviewCard from "./ReviewCard";
import Image from "next/image";

async function PropertyReviews({ propertyId }: { propertyId: string }) {
  const reviews = await fetchPropertyReviews(propertyId);
  const { rating } = await fetchPropertyRating(propertyId);

  if (reviews.length < 1) return null;

  return (
    <div className="mt-8">
      <Title text="Reviews" />
      <div className="flex justify-center space-x-4">
        <div className="relative h-[100px] w-[70px]">
          <Image
            fill
            alt="left laurel"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png"
          />
        </div>

        <div>
          <p className="mb-0.5 mt-0.5 text-7xl">{rating}</p>
        </div>

        <div className="relative h-[100px] w-[70px]">
          <Image
            fill
            alt="right laurel"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-3 text-center">
        <p className="text-2xl font-semibold">
          {Number(rating) > 2 ? "Guest favourite" : "Not the best"}
        </p>
        <p className="text-sm">
          {Number(rating) > 2
            ? "One of the most loved homes on Airbnb based on ratings, reviews and reliability"
            : "The reviews aren't the best, but you might want to give this property a chance"}
        </p>
      </div>
      <div className="mt-10 flex flex-col space-y-5">
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { firstName, profileImage } = review.profile;
          const reviewInfo = {
            comment,
            rating,
            name: firstName,
            image: profileImage,
          };

          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}

export default PropertyReviews;
