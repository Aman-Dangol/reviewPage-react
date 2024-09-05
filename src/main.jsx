import { StrictMode, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<>Test Loading</>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </StrictMode>
);
