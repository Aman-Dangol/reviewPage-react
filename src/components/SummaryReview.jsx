import Stars from "./Stars";
import { REVIEWS } from "../constants/Reviews";
import StarCount from "./StarCount";
export default function SummaryReview() {
  const avg = (
    REVIEWS.reduce((acc, sum) => acc + parseInt(sum.stars), 0) / REVIEWS.length
  ).toFixed(1);
  return (
    <section className="flex flex-col border-2   justify-between px-[20%] items-center gap-4 ">
      <div className="flex justify-between w-full px-5 items-center">
        <Stars number={avg} width="50" height="50" />
        <h3 >{avg}</h3>
      </div>
      <div className="w-full [&>*]:mb-2 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarCount key={index} star={index + 1} />
        ))}
      </div>
    </section>
  );
}
