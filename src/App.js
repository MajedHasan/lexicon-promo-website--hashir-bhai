import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import V1Login from './pages/v1/V1Login';
import V1Verification from './pages/v1/V1Verification';
import V1ForgetPassword from './pages/v1/V1ForgetPassword';
import V1Authentication from './pages/v1/V1Authentication';
import V1ChangePassword from './pages/v1/V1ChangePassword';
import V1DahsboardLayout from './components/V1DahsboardLayout';
import V1Dashboard from './pages/v1/V1Dashboard';
import V1NewOrders from "./pages/v1/V1NewOrders"
import V1Settings from './pages/v1/V1Settings';
import V1Accounts from './pages/v1/V1Accounts';
import V1CurrentOrders from './pages/v1/V1CurrentOrders';
import V1Collaterals from './pages/v1/V1Collaterals';
import V2DahsboardLayout from './components/V2DashboardLayout';
import V2Dashboard from './pages/v2/V2Dashboard';
import V2Login from './pages/v2/V2Login';
import V2Settings from './pages/v2/V2Settings';
import V2NewOrders from './pages/v2/V2NewOrders';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: "test"
    },
    {
      path: "/v1",
      children: [
        {
          path: "/v1/login",
          element: <V1Login />
        },
        {
          path: "/v1/verification",
          element: <V1Verification />
        },
        {
          path: "/v1/forgetpassword",
          element: <V1ForgetPassword />
        },
        {
          path: "/v1/authentication",
          element: <V1Authentication />
        },
        {
          path: "/v1/changepassword",
          element: <V1ChangePassword />
        },
      ]
    },
    {
      path: "/v1/dashboard",
      element: <V1DahsboardLayout />,
      children: [
        {
          path: "/v1/dashboard",
          element: <V1Dashboard />
        },
        {
          path: "/v1/dashboard/neworders",
          element: <V1NewOrders />
        },
        {
          path: "/v1/dashboard/currentorders",
          element: <V1CurrentOrders />
        },
        {
          path: "/v1/dashboard/collaterals",
          element: <V1Collaterals />
        },
        {
          path: "/v1/dashboard/accounts",
          element: <V1Accounts />
        },
        {
          path: "/v1/dashboard/settings",
          element: <V1Settings />
        },
      ]
    },
    {
      path: "/v2",
      children: [
        {
          path: "/v2/login",
          element: <V2Login />
        }
      ]
    },
    {
      path: "/v2/dashboard",
      element: <V2DahsboardLayout />,
      children: [
        {
          path: "/v2/dashboard",
          element: <V2Dashboard />
        },
        {
          path: "/v2/dashboard/neworders",
          element: <V2NewOrders />
        },
        {
          path: "/v2/dashboard/settings",
          element: <V2Settings />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
