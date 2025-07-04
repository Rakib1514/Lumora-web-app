import { createBrowserRouter } from "react-router";
import App from "../app/App";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import AddItem from "../pages/dashboard/add-item/AddItem";
import Analytics from "../pages/dashboard/analytics/Analytics";
import Profile from "../pages/dashboard/profile/Profile";
import Home from "../pages/home/Home";
import Collections from "../pages/collections/Collections";
import ProductDetails from "../pages/product-details/ProductDetails";

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: MainLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "/auth/sign-in",
            Component: SignIn,
          },
          {
            path: "/auth/sign-up",
            Component: SignUp,
          },
          {
            path: "/collections",
            Component: Collections,
          },
          {
            path: `/product/:_id`,
            Component: ProductDetails,
          },
        ],
      },
      {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: Analytics,
          },
          {
            path: "add-item",
            Component: AddItem,
          },
          {
            path: "profile",
            Component: Profile,
          },
        ],
      },
    ],
  },
]);
