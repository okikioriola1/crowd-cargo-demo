// import { lazy } from "react";

import WithDashboardLayout from "../components/layout/index";
import Home from "../pages/home/index";
import Login from "../pages/login/index";
import Verification from "../pages/verification/index";
// const Home = lazy(() => import("../pages/home/index"));
// const Login = lazy(() => import("../pages/login/index"));

interface RouteItem {
    path: string;
    exact: boolean;
    component: React.FC; // Or your specific component type
  }

const routes: RouteItem[] = [
    {
      path: "/dashboard",
      component: WithDashboardLayout(Home),
      exact: true,
    },
    {
        path: "/",
        component: Login,
        exact: true,
      },
      {
        path: "/verify",
        component: Verification,
        exact: true,
      }

]

export default routes