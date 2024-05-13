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
import Bangladesh from "../Pages/Bangladesh";
import MyList from "../Pages/MyList/MyList";
import AllComments from "../Shared/AllComments";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element: <House></House>,
                loader: () => fetch('https://tourism-management-server-jet.vercel.app/spot')
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
                loader: ()=> fetch('https://tourism-management-server-jet.vercel.app/spot')

            },
            {
                path: "/updatetourspot/:id",
                element: <UpdateTouristSpot></UpdateTouristSpot>,
                loader: ({params}) => fetch(`https://tourism-management-server-jet.vercel.app/spot/${params.id}`)
            },
            {
                path: "/userprofile",
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
                loader: ()=> fetch('https://tourism-management-server-jet.vercel.app/visitedspot')
            },
            {
                path: "/mylist",
                element:<PrivateRoute><MyList></MyList></PrivateRoute>,
                loader: ()=> fetch('https://tourism-management-server-jet.vercel.app/visitedspot')
            },
            {
                path: "/bangladesh",
                element: <Bangladesh></Bangladesh>,
                loader: ()=> fetch('https://tourism-management-server-jet.vercel.app/spot'),
            },
            {
                path: "/feed",
                element: <AllComments></AllComments>,
                loader: () => fetch('https://tourism-management-server-jet.vercel.app/feed')
            }
            

        ]
    }
]);

export default router;
