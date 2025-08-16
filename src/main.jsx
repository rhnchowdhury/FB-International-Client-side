import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/registration/SignUp/Signin.jsx";
import Login from "./components/registration/Login/Login.jsx";
import AuthProvider from "./components/auth/AuthProvider.jsx";
import DashboardLayout from "./components/layouts/dashboard/DashboardLayout.jsx";
import Dashboard from "./components/layouts/dashboardPage/Dashboard.jsx";
import Expense from "./components/pages/Expenses/Expense.jsx";
import ExpenseHistory from "./components/pages/Expenses/ExpenseHistory.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Signin />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/expenses",
        element: <Expense />,
      },
      {
        path: "/dashboard/expenses/history",
        element: <ExpenseHistory />,
      },
    ],
  },
  ,
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
