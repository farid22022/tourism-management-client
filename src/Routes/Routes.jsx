import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Login from "../Pages/Login/Login";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import House from "../Shared/House";
import SpotCardDetails from "../Pages/SpotCardDetails/SpotCardDetails";
import UpdateTouristSpot from "../Pages/UpdateToristSpot/UpdateTouristSpot";


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
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/addspots",
                element: <AddTouristsSpot></AddTouristsSpot>
            },
            {
                path: "/spotcarddetails/:_id",
                element: <SpotCardDetails></SpotCardDetails>,
                loader: ()=> fetch('http://localhost:5000/spot')

            },
            {
                path: "/updatetourspot/:id",
                element: <UpdateTouristSpot></UpdateTouristSpot>,
                loader: ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
            }

        ]
    }
]);

export default router;