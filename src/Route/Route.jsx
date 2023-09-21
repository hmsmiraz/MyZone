import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Dashboard from "../Dashboard/Dashboard";

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
        path: "/Dashboard",
        element: <Dashboard></Dashboard>
      },
    ]
  }
]);

export default router;