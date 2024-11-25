"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comment from "./Comment";
import { redirect } from "next/navigation";

type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
    id?: string;
  };
  children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  const handleClick = () => {
    if (reviewInfo.id) {
      redirect(`/properties/${reviewInfo.id}`);
    } else {
      return null;
    }
  };

  return (
    <Card className="relative">
      <CardHeader
        onClick={handleClick}
        className={`${reviewInfo.id && "cursor-pointer"}`}
      >
        <div className="flex items-center">
          <img
            src={reviewInfo.image}
            alt="profile"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h3 className="mb-1 text-sm font-bold capitalize">
              {reviewInfo.name}
            </h3>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
      {/* delete button later */}
      <div className="absolute right-3 top-3">{children}</div>
    </Card>
  );
}

export default ReviewCard;
