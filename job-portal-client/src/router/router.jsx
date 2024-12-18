import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SIgnIn/SignIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Page Not Found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>,
        }
      ]
    },
  ]);

export default router;