import Stars from "./Stars";
import { REVIEWS } from "../constants/Reviews";
import { useState } from "react";

export default function SummaryReview() {
  const avg = (
    REVIEWS.reduce((acc, sum) => acc + parseInt(sum.stars), 0) / REVIEWS.length
  ).toFixed(1);
  return (
    <section className="flex justify-between px-[20%] items-center gap-4 ">
      <Stars number={avg} width="50" height="50" /> <h3>{avg}</h3>
    </section>
  );
}
