import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PlantDetails } from "./components/PlantDetails.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlantsOverview } from "./components/PlantsOverview.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PlantsOverview /> },
      { path: "/:id", element: <PlantDetails /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
