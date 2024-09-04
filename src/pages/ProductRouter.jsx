import ProductReview from "../components/ProductReview";
import ProductDescription from "../components/ProductDescription";
import { lazy, Suspense } from "react";
import HomePage from "./HomePage";
export const ProductRouter = [
  {
    path: "/product/:id/reviews",
    lazy: () => {
      return {
        element: (
          <Suspense fallback={console.log("loading")}>
            <ProductReview />
          </Suspense>
        ),
      };
    },
  },
  {
    path: "/product/:id/discussion",
    lazy: () => {
      return {
        element: (
          <Suspense fallback={console.log("loading discussion")}>
            <h1>this is Discussion</h1>
          </Suspense>
        ),
      };
    },
  },
  {
    path: "/product/:id",
    element: <ProductDescription />,
  },
];
