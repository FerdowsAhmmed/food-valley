import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


import Main from "./component/Layout/Main";
import Blog from "./component/Blog/Blog";
import Login from "./component/Login/Login";
import Logout from "./component/Logout/Logout";
import Registration from "./component/Registration/Registration";
import Home from "./component/Home/Home";
import Allchefs from "./component/Chefs/AllShefs/Allchefs";
import ChefRecipe from "./component/ChefRecipe/ChefRecipe";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/logout",
        element: <Logout></Logout>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/allChefs",
        element: <Allchefs></Allchefs>,
      },
      {
        path: "/allRecipe",
        element: <ChefRecipe></ChefRecipe>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);