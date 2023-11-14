import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from "./Home/RouteLayout";

import HomePage from '../Pages/HomePage';
import ExplorePage from '../Pages/ExplorePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, key: 'home' },
      { path: "/search", element: <p>search</p>, key: 'search' },
      { path: "/explore", element: <ExplorePage />, key: 'explore' },
    ],
  },
]);

function IndexRoutes() {
  return <RouterProvider router={router} />;
}

export default IndexRoutes;
