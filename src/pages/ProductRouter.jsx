import { lazy } from "react";

const LazyReview = lazy(() => import("../components/ProductReview"));
const LazyDesc = lazy(() => import("../components/ProductDescription"));
export const ProductRouter = [
  {
    path: "/product/:id/reviews",
    element: <LazyReview />,
  },
  {
    path: "/product/:id/discussion",
    element: <h1>hello</h1>,
  },
  {
    path: "/product/:id",
    element: <LazyDesc />,
  },
];
