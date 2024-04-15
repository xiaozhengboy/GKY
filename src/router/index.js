import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/login',
        element: <Layout></Layout>
    }
])

export default router