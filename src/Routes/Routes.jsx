import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import House from "../Shared/House";
import SpotCardDetails from "../Pages/SpotCardDetails/SpotCardDetails";
import UpdateTouristSpot from "../Pages/UpdateToristSpot/UpdateTouristSpot";
import SignIn from "../Pages/SignIn"
import UserProfile from "../Shared/UserProfile";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element: <House></House>,
                loader: () => fetch('http://localhost:5000/spot')
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addspots",
                element: <AddTouristsSpot></AddTouristsSpot>
            },
            {
                path: "/spotcarddetails/:_id",
                element: <PrivateRoute><SpotCardDetails></SpotCardDetails></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/spot')

            },
            {
                path: "/updatetourspot/:id",
                element: <UpdateTouristSpot></UpdateTouristSpot>,
                loader: ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
            },
            {
                path: "/userprofile",
                element:<UserProfile></UserProfile>,
                loader: ()=> fetch('http://localhost:5000/visitedspot')
            }

        ]
    }
]);

export default router;