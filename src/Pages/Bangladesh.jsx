import { Link, useLoaderData } from "react-router-dom";
import Abangladesh from "./Abangladesh";
import Menu from "../Shared/Menu";


const Bangladesh = () => {

    const BangladeshSpots = useLoaderData();


    return (
        <div className="grid-cols-1">
            <div>
                <Menu></Menu>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:pl-12">
            {
                BangladeshSpots.map(bangladesh =><Abangladesh
                key={bangladesh._id}
                bangladesh={bangladesh}
                ></Abangladesh>)
            }
            
        </div>
        <div className="text-center mt-12">
            <h2 className="text-3xl font-extrabold text-green-950">Do You Want To add More ?</h2>
            <Link className="text-xl font-extrabold text-blue-950 border-spacing-1 border-sky-950" to="/addspots">Add More !!</Link>
        </div>

        </div>
    );
};

export default Bangladesh;