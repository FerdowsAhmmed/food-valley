import React from "react";
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Main from "./component/Layout/Main";
import Blog from "./component/Blog/Blog";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import Home from "./component/Home/Home";
import Allchefs from "./component/Chefs/AllShefs/Allchefs";
import ChefRecipe from "./component/ChefRecipe/ChefRecipe";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Page404 from "./404Page/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allChefs",
        element: <Allchefs />,
      },
      {
        path: ":id",
        element: 
          <PrivateRoute>
            <ChefRecipe />
          </PrivateRoute>
        ,
        loader: ({ params }) => fetch(`https://server-ferdowsahmmed.vercel.app/allData1`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
  
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
