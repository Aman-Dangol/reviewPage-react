import Stars from "./Stars";
import { REVIEWS } from "../constants/Reviews";
import StarCount from "./StarCount";
export default function SummaryReview() {
  const avg = (
    REVIEWS.reduce((acc, sum) => acc + parseInt(sum.stars), 0) / REVIEWS.length
  ).toFixed(1);
  return (
    <section className="flex flex-col border-2   justify-between  items-center gap-4 ">
      <div className="flex justify-center items-center gap-4  ">
        <Stars number={avg} width={"10px"} height={"45%"} />
        {/* <h3 className="bg-red-700">{avg}</h3> */}
        {avg}
      </div>
      <div className="w-[70%] [&>*]:mb-2 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarCount key={index} star={index + 1} />
        ))}
      </div>
    </section>
  );
}
