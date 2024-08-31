import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./home";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
