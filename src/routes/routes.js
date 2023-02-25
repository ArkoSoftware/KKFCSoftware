import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Sales from "../pages/Sales/Sales";
import Inventory from "../pages/Inventory/Inventory";
import Purchase from "../pages/Purchase/Purchase";
import Vendors from "../pages/Vendors/Vendors";
import BaltraElectronics from "../pages/BaltraElectronics/BaltraElectronics";
import Bills from "../pages/Bills/Bills";
import NewBill from "../pages/Bills/NewBill";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/purchase",
        element: <Purchase />,
      },
      {
        path: "/purchase/vendors",
        element: <Vendors />,
      },
      {
        path: "/purchase/BaltraElectronics",
        element: <BaltraElectronics />,
      },
      {
        path: "/purchase/Bills",
        element: <Bills />,
      },
      {
        path: "/Bills/NewBill",
        element: <NewBill />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);
