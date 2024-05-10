import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Fade } from "react-awesome-reveal";


const Menu = () => {

    const { user } = useContext(AuthContext);

    return (
        <ul className="menu md:grid-cols-1 menu-vertical lg:menu-horizontal bg-base-200 rounded-box left-80 space-x-6 lg:pl-12 ">
            <Link to="/"><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">Home</li></Link>
            <Link to="/addspots"><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">Add Tourists Spot</li></Link>
            <Link to=""><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">All Tourists Spot</li></Link>
            <Link to="/signin"><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">Login</li></Link>
            <Link to="/register"><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">Register</li></Link>
            {
                user && 
                <Fade>
                <div className="spsce-x-6">
                    <Link to="/userprofile"><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold mr-6">Profile</li></Link>
                    <Link to="/mylist"><li className="btn btn-ghost border-fuchsia-500 border-b-4 bg-purple-300 text-2xl font-serif font-semibold">My List </li></Link>
                </div>
                </Fade>
                
            }
        </ul>
    );
};

export default Menu;