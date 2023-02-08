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
          path: "/v1/dashboard/accounts",
          element: <V1Accounts />
        },
        {
          path: "/v1/dashboard/settings",
          element: <V1Settings />
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
