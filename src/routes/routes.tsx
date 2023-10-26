// import { lazy } from "react";

import WithDashboardLayout from "../components/layout/index";
import Home from "../pages/home/index";
import Login from "../pages/login/index";
import Verification from "../pages/verification/index";
// const Home = lazy(() => import("../pages/home/index"));
// const Login = lazy(() => import("../pages/login/index"));


const routes = [
    {
      path: "/dashboard",
      component: WithDashboardLayout(Home),
      protected: false,
      exact: true,
    },
    {
        path: "/",
        component: Login,
        protected: false,
        exact: true,
      },
      {
        path: "/verify",
        component: Verification,
        protected: false,
        exact: true,
      }

]

export default routes