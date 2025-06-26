import { createBrowserRouter } from "react-router";
import App from "../app/App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import Analytics from "../pages/dashboard/analytics/Analytics";
import Profile from "../pages/dashboard/profile/Profile";
import ManageItems from "../pages/dashboard/manage-items/ManageItems";

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
            path: "manage-items",
            Component: ManageItems,
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
