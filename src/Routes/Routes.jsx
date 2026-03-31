import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installed from "../Pages/Installed";
import AppDetails from "../Pages/AppDetails";
import ErrorPageApp from "../Pages/ErrorPageApp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/apps',
                element: <Apps />
            },
            {
                path: '/installation',
                element: <Installed />
            },
            {
                path: '/appDetails/:id',
                element: <AppDetails />,
                errorElement: <ErrorPageApp />
            },
        ]
    },
    // {
    //     path: '*',
    //     element: <ErrorPage />
    // }

])

export default router