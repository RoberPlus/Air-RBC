import { FaStar } from "react-icons/fa";
import { fetchPropertyRating } from "@/lib/actions";

async function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) {
  const { rating, count } = await fetchPropertyRating(propertyId);

  if (count === 0) return null;

  const className = `flex gap-1 w-100 items-center md:justify-between ${
    inPage ? "text-md" : "text-xs"
  }`;
  const countText = count > 1 ? "reviews" : "review";
  const countValue = `(${count}) ${inPage ? countText : ""}`;

  return (
    <div>
      <span className={className}>
        <FaStar className="h-3 w-3" />
        <p>{rating}</p>
        <p>{countValue}</p>
      </span>
    </div>
  );
}

export default PropertyRating;
