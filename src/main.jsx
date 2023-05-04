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
import Registration from "./component/Registration/Registration";
import Home from "./component/Home/Home";
import Allchefs from "./component/Chefs/AllShefs/Allchefs";
import ChefRecipe from "./component/ChefRecipe/ChefRecipe";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";


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
        path: "/allChefs",
        element: <Allchefs></Allchefs>,
      },
      {
        path: ":id",
        element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/allData1`)
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
        path: "/registration",
        element: <Registration></Registration>,
      },
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);