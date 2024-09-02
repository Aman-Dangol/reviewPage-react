import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./Home";
import App from "../App";
import ProductReview from "../components/ProductReview";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/reviews",
            element: <ProductReview />,
          },
          {
            path: "/discussion",
            element: <h1>this is discussion</h1>,
          },
          {
            path: "/",
            element: <h1>this is details</h1>,
          },
        ],
      },
    ],
  },
]);
