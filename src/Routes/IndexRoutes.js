import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from "./Home/RouteLayout";

import HomePage from '../Pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/search", element: <p>search</p> },
      { path: "/profile", element: <p>profile</p> },
    ],
  },
]);

function IndexRoutes() {
  return <RouterProvider router={router} />;
}

export default IndexRoutes;
