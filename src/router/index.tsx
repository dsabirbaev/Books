

import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";

import SingUp from "../pages/Auth/SignUp";
import SingIn from "../pages/Auth/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/signup",
        element: <SingUp />
    },
    {
        path: "/signin",
        element: <SingIn />
    }
]);

export default router;