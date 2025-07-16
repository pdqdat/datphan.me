import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "@/scss/index.scss";
import Layout from "@comp/Layout";

const Home = lazy(() => import("@pages/Home"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));

const router = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
