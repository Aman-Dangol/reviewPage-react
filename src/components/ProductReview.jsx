import { REVIEWS } from "../constants/Reviews";
import Stars from "./Stars";
import { User } from "lucide-react";
import SummaryReview from "./SummaryReview";

export default function ProductReview() {
  return (
    <section className=" flex flex-col-reverse  md:grid-cols-2 md:grid">
      <div>
        {REVIEWS.map((review, index) => {
          return (
            <div key={index}>
              <div className="mb-4 flex flex-row gap-2">
                <User
                  color="white"
                  className="border-2 mt-1 bg-black rounded-full"
                />
                <div>
                  <p>{review.name}</p>
                  <Stars number={review.stars} width={20} height={20} />
                  <p>{review.comment}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <SummaryReview />
      </div>
    </section>
  );
}
