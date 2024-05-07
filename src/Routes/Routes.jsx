import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/addspots",
                element: <AddTouristsSpot></AddTouristsSpot>
            }

        ]
    }
]);

export default router;