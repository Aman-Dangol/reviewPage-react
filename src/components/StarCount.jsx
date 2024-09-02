import { REVIEWS } from "../constants/Reviews";

export default function StarCount({ star }) {
  const totalStars = REVIEWS.length;
  const nStars = REVIEWS.filter((review, index) => review.stars == star).length;
  const percentage = ((nStars / totalStars) * 100).toFixed(2);

  return (
    <div className="flex gap-2">
      <span>{star}</span>
      <div className="w-full bg-slate-600">
        <div
          className={` h-6  bg-yellow-400`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span>{nStars}</span>
    </div>
  );
}
