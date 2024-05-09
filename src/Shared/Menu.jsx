import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Menu = () => {

    const { user } = useContext(AuthContext);

    return (
        <ul className="menu md:grid-cols-1 menu-vertical lg:menu-horizontal bg-base-200 rounded-box left-80 space-x-6  ">
            <Link to="/"><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">Home</li></Link>
            <Link to="/addspots"><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">Add Tourists Spot</li></Link>
            <Link to=""><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">All Tourists Spot</li></Link>
            <Link to=""><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">My List </li></Link>
            <Link to="/signin"><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">Login</li></Link>
            <Link to=""><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">Register</li></Link>
            {
                user && 
                <Link to="/userprofile"><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">Profile</li></Link>
                
            }
        </ul>
    );
};

export default Menu;