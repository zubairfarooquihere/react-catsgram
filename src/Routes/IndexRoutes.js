import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from "./Home/RouteLayout";

import HomePage from "../Pages/HomePage";
import ExplorePage from "../Pages/ExplorePage";
import MessagePage from "../Pages/MessagePage";
//git push -u origin main
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/search", element: <p>search</p> },
      { path: "/explore", element: <ExplorePage /> },
      { path: "/message", element: <MessagePage /> },
    ],
  },
]);

function IndexRoutes() {
  return <RouterProvider router={router} />;
}

export default IndexRoutes;
