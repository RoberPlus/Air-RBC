import EmptyList from "@/components/home/EmptyList";
import { deleteReviewAction, fetchPropertyReviewsByUser } from "@/lib/actions";
import ReviewCard from "@/components/reviews/ReviewCard";
import Title from "@/components/properties/Title";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";

async function ReviewsPage() {
  const reviews = await fetchPropertyReviewsByUser();
  if (reviews.length === 0) return <EmptyList />;

  return (
    <>
      <Title text="Your Reviews" />
      <section className="mt-4 grid gap-8 md:grid-cols-2">
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { name, image, id } = review.property;
          const reviewInfo = {
            comment,
            rating,
            name,
            image,
            id,
          };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });

  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default ReviewsPage;
