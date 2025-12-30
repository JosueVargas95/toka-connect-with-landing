import { createBrowserRouter, Navigate } from "react-router";
import { lazy } from "react";

import { LoginPage } from "@/auth/pages/login/LoginPage";
import { RegisterPage } from "@/auth/pages/register/RegisterPage";
import { LandingPage } from "@/landing/pages/LandingPage";
import { LandingLayout } from "@/landing/layouts/LandingLayout";
import { ManagementPage } from "@/admin/pages/management/ManagementPage";
import { CreditCardsPage } from "@/admin/pages/credit-cards/CreditCardsPage";
import { FundsPage } from "@/admin/pages/funds/FundsPage";
import { ExpensesPage } from "@/admin/pages/expenses/ExpensesPage";
import { ReductionPage } from "@/admin/pages/reductions/ReductionPage";
import { CFDIPage } from "@/admin/pages/cfdis/CFDIPage";

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
      },
      {
        path: "administracion",
        element: <ManagementPage />,
      },
      {
        path: "tarjetas",
        element: <CreditCardsPage />,
      },
      {
        path: "fondos",
        element: <FundsPage />,
      },
      {
        path: "gastos",
        element: <ExpensesPage />,
      },
      {
        path: "decrementos",
        element: <ReductionPage />,
      },
      {
        path: "cfdi",
        element: <CFDIPage />,
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
