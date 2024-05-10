import { Link } from "react-router-dom";
import BangladeshSpot from "../Pages/BangladeshSpot/BangladeshSpot";

const NavBar = () => {
  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box text-center space-x-2 md:opacity-70 ">
      <Link to="">
        <li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950">
          <button
            className="btn "
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Southeast Countries
          </button>
          <dialog id="my_modal_3" className="modal bg-transparent">
            <div className="modal-box bg-transparent">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">We Have Enlisted:</h3>
              <p className="py-4">
                <BangladeshSpot></BangladeshSpot>
              </p>
              <p>Please Esc button for Escape!!</p>
            </div>
          </dialog>
        </li>
      </Link>
      <Link to="">
        <li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950">
          {" "}
          Europe
        </li>
      </Link>
      <Link to="">
        <li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950">
          America
        </li>
      </Link>
      <Link to="">
        <li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950">
          Africa
        </li>
      </Link>
      <Link to="">
        <li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950">
          Middle East
        </li>
      </Link>
      <Link to="">
        <li className="btn btn-ghost border-b-cyan-500 border-b-4 text-2xl font-serif font-semibold text-slate-950">
          Central Asia
        </li>
      </Link>
    </ul>
  );
};

export default NavBar;
