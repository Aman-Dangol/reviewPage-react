import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import { ProductRouter } from "./ProductRouter";
import { PRODUCT_LIST } from "../constants/ProductLists";
import Mycart from "./Mycart";
import { lazy } from "react";

const LazyHome = lazy(() => import("../pages/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => {
          return PRODUCT_LIST;
        },
      },
      {
        path: "/product/:id",
        element: <LazyHome />,
        children: ProductRouter,
      },
      {
        path: "/MyCart",
        element: <Mycart />,
      },
    ],
  },
]);
