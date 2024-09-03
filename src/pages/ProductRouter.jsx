import ProductReview from "../components/ProductReview";
import ProductDescription from "../components/ProductDescription";
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
    element: <ProductDescription />,
  },
];
