import {  createBrowserRouter, redirect  } from "react-router";

import LoginPage from "../pages/Login"
import RegisterPage from "../pages/Registers"
import HomePage from "../pages/Home";

const middlewareLogin = () => {
  const token = localStorage.getItem("token")
  if (token) {
    return redirect("/")
  }
}

const middlewareHome = () => {
  const token = localStorage.getItem("token")
  if (!token) {
    return redirect("/login")
  }
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    loader: middlewareHome,
  },
  {
    path: "/login",
    Component: LoginPage,
    loader: middlewareLogin,
  },
  {
    path: "/register",
    Component: RegisterPage,
    loader: middlewareLogin,
  },
]);