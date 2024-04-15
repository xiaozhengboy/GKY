import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import NotFound from '@/pages/NotFound'
import AuthRoute from "@/components/AuthRoute";

import { createBrowserRouter } from 'react-router-dom'
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'article',
                element: <Article />
            },
            {
                path: 'publish',
                element: <Publish />
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router