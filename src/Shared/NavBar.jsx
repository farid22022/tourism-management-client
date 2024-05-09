import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box text-center space-x-2 md:opacity-70 ">
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950">Southeast Asia</li></Link>
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950"> Europe</li></Link>
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950">America</li></Link>
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950">Africa</li></Link>
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950">Middle East</li></Link>
            <Link to=""><li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950">Central Asia</li></Link>
        </ul>
    );
};

export default NavBar;