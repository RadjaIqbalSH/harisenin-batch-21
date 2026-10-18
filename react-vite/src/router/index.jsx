import {  createBrowserRouter  } from "react-router";

import LoginPage from "../pages/Login"
import RegisterPage from "../pages/Registers"
import HomePage from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
]);