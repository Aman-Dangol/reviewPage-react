import { Navigate } from "react-router-dom";
import ProductReview from "../components/ProductReview";

export const ProductRouter = [
  {
    path: "/product/:id/reviews",
    element: <ProductReview />,
  },
  {
    path: "/product/:id/discussion",
    element: <h1>this is discussion</h1>,
  },
  {
    path: "/product/:id",
    element: <h1>this is details</h1>,
  },
];
