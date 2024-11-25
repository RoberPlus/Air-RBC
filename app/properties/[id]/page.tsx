import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import BreadCrumbs from "@/components/properties/BreadCrumbs";
import ImageContainer from "@/components/properties/ImageContainer";
import ShareButton from "@/components/properties/ShareButton";
import { fetchPropertyDetails, findExistingReview } from "@/lib/actions";
import { redirect } from "next/navigation";
import PropertyRating from "../../../components/card/PropertyRating";
import PropertyDetails from "@/components/properties/PropertyDetails";
import UserInfo from "@/components/properties/UserInfo";
import Description from "@/components/properties/Description";
import Amenities from "@/components/properties/Amenities";
import ClientDynamicMap from "@/components/properties/ClientDynamicMap";
import SubmitReview from "../../../components/reviews/SubmitReview";
import PropertyReviews from "@/components/reviews/PropertyReviews";
import { auth } from "@clerk/nextjs/server";
import ClientBookingWrapper from "@/components/bookings/ClientBookingWrapper";
import Title from "@/components/properties/Title";
import HostCard from "@/components/properties/HostCard";
import { Separator } from "@/components/ui/separator";

type Params = {
  id: string;
};
interface PageProps {
  params: Promise<Params>;
}

const PropertyDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const property = await fetchPropertyDetails(id);

  if (!property) redirect("/");

  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };

  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;

  const { userId }: { userId: string | null } = await auth();
  const isNotOwner = property.profile.clerkId !== userId;
  const reviewDoesNotExist =
    userId && isNotOwner && !(await findExistingReview(userId, property.id));

  console.log(userId);
  return (
    <section className="md:p-5">
      <BreadCrumbs name={property.name} />
      <header className="mt-4 flex items-center justify-between">
        <h1 className="text-4xl font-bold">{property.tagline}</h1>
        <div className="flex items-center gap-x-4">
          <ShareButton name={property.name} propertyId={property.id} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />
      <section className="mt-5 gap-x-12 md:mt-12 lg:grid lg:grid-cols-12">
        <div className="flex flex-col space-y-10 lg:col-span-8">
          {/* Rating, Title, Details */}
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col justify-between space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <h1 className="text-2xl font-bold md:text-3xl">
                {property.name}
              </h1>
              <PropertyRating inPage propertyId={property.id} />
            </div>
            <PropertyDetails details={details} />
          </div>

          {/* Top Host Info */}
          <UserInfo profile={{ firstName, profileImage }} />

          <Description description={property.description} />

          <Amenities amenities={property.amenities} />

          {/* Reviews */}
          <PropertyReviews propertyId={property.id} />

          {/* Booking Calendar Mobile */}
          <div className="mt-5 flex flex-col items-center md:hidden">
            <Title text="Booking" />
            <ClientBookingWrapper
              propertyId={property.id}
              price={property.price}
              bookings={property.bookings}
            />
          </div>
          <Separator className="mt-4 flex md:hidden" />
          <ClientDynamicMap countryCode={property.country} />

          {/* Bottom Host Info */}
          <HostCard profile={{ firstName, profileImage }} />
        </div>

        {/* Booking Calendar Desktop */}
        <div className="mt-5 hidden h-full flex-1 flex-col md:col-span-4 md:flex">
          <div className="sticky top-5 flex flex-col text-center">
            <Title text="Booking" />

            <ClientBookingWrapper
              propertyId={property.id}
              price={property.price}
              bookings={property.bookings}
            />
          </div>
        </div>
      </section>
      {reviewDoesNotExist && userId && (
        <SubmitReview propertyId={property.id} />
      )}
    </section>
  );
};

export default PropertyDetailsPage;
