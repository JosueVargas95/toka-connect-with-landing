import { createBrowserRouter, Navigate } from "react-router";

import { HomePage } from "@/admin/pages/home/HomePage";
import { LoginPage } from "@/auth/pages/login/LoginPage";
import { UsersPage } from "@/admin/pages/users/UsersPage";
import { RegisterPage } from "@/auth/pages/register/RegisterPage";
import { lazy } from "react";
import { LandingPage } from "@/landing/pages/LandingPage";
import { LandingLayout } from "@/landing/layouts/LandingLayout";

const AuthLayout = lazy(() => import("@/auth/layouts/AuthLayout"));
const AdminLayout = lazy(() => import("@/admin/layouts/AdminLayout"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
