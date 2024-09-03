import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./Home";
import App from "../App";
import HomePage from "./HomePage";
import { ProductRouter } from "./ProductRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <Home />,
        children: [...ProductRouter],
      },
      {
        path: "/MyCart",
        element: <h1>this is your cart section</h1>,
      },
    ],
  },
]);
