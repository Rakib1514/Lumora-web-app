import { createBrowserRouter } from "react-router";
import App from "../app/App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";

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
            path: "/auth/signin",
            Component: SignIn,
          },
        ],
      },
    ],
  },
]);
