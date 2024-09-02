import { REVIEWS } from "../constants/Reviews";
import Stars from "./Stars";
import { User } from "lucide-react";
export default function ProductReview() {
  return (
    <section>
      {REVIEWS.map((review) => {
        return (
          <div className="mb-4">
            <div className="flex">
              <User width={20} />
              <p>{review.name}</p>
            </div>
            <Stars number={review.stars} />
            <p>{review.comment}</p>
          </div>
        );
      })}
    </section>
  );
}
