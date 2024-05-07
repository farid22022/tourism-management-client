import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box text-center space-x-2">
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold">Southeast Asia</li></Link>
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold"> Europe</li></Link>
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold">America</li></Link>
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold">Africa</li></Link>
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold">Middle East</li></Link>
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold">Central Asia</li></Link>
        </ul>
    );
};

export default NavBar;