import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "@/index.scss";
import Layout from "@comp/Layout";

const App = lazy(() => import("@comp/App.tsx"));
const AboutPage = lazy(() => import("@/pages/AboutPage.tsx"));

const router = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
