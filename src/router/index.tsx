

import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";


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
    }
]);

export default router;