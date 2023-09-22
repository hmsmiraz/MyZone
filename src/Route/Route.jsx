import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Pages/Products/Products";
import ProductDetails from "../ProductDetails/ProductDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/EditProfile/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children : [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/Products",
        element: <Products></Products>,
        loader : ()=>fetch(`https://dummyjson.com/products`)
      },

      {
        path: "/Products/:id",
        element: <ProductDetails></ProductDetails>,
        loader : (object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
      },

      {
        path: "/Dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children : [
            {
                path : "/Dashboard",
                element : <Dashboard></Dashboard>
            },
            {
                path : "/Dashboard/profile",
                element : <Profile></Profile>
            },
            {
                path : "/Dashboard/editProfile",
                element : <EditProfile></EditProfile>
            },
        ]
      },
    ]
  }
]);

export default router;