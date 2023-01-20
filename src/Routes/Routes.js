import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Booking from "../Pages/DashBoard/Booking/Booking";
import AllUsers from "../Pages/DashBoard/DashBoard/All Users/AllUsers";
import About from "../Pages/Home/About/About";
import Blogs from "../Pages/Home/Blogs/Blogs";
import Categories from "../Pages/Home/Categories/Categories";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import NotFound from "./Not Found/NotFound";
import AdminRoute from "./Private Route/AdminRoute/AdminRoute";
import PrivateRoute from "./Private Route/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <Categories></Categories>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b612-used-products-resale-server-side-khsultana-khsultana.vercel.app/product/${params.id}`
          ),
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Booking></Booking>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
