import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/service.json')
            },
            {
                path: '/detail/:id',
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;