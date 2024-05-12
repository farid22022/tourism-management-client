import TypewriterComponent from "typewriter-effect";
import moment from "moment";
import logo from "../../public/planet-earth.png";
import "animate.css";
import "./Header.css";
import NavBar from "./NavBar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  // console.log(user.photoURL);
  
  const handleSignOut = () =>{
      logOut()
          .then()
          .catch()
  }

  return (
    <div className="bgImage">
      <div className="relative">
        <div>
          <img className="logo react" src={logo} />
        </div>
        <div className="text-center pb-56">
          <h3 className="text-8xl font-serif font-extrabold text-blue-700 animate__animated animate__bounce animate__infinite">
            Welcome to <span className="">My</span>{" "}
          </h3>
          <h2 className="text-7xl font-serif text-red-700 font-extrabold">
            <TypewriterComponent
              options={{
                strings: ["Tourism Management System"],
                autoStart: true,
                loop: true,
                delay: 50,
                // cursor: true
              }}
            />
          </h2>
        </div>
        <div>
          <p className="text-6xl font-extrabold bg-white bg-opacity-10 space-x-1">
            <span className="bg-transparent  text-white">
            <TypewriterComponent
              options={{
                strings: ["World"],
                autoStart: true,
                loop: true,
                delay: 50,
                // cursor: true
              }}
            />
            </span>
            <span className="bg-transparent text-opacity-0 "><TypewriterComponent
              options={{
                strings: ["Tour"],
                autoStart: true,
                loop: true,
                delay: 50,
                // cursor: true
              }}
            /></span>
          </p>
        </div>
        <div className="absolute top-5 right-5 ">
          <div className="relative space-y-3">
            <p className="text-3xl myElement font-serif text-pink-700 font-semibold">
              {moment().format("dddd, MMMM D, YYYY")}
            </p>
            <div className="grid grid-cols-1 absolute left-40 mb-12">
                <div className="w-20 btn btn-ghost btn-circle avatar  z-10 ">
                    <div className=" rounded-full">
                      {
                        user ?
                        
                        <div className="grid grid-cols-1">
                          
                          <img alt='' src={user.photoURL} />
                        </div>
                        :
                        <FaUserCircle></FaUserCircle>
                      }
                    </div>
                    <div>
                      {
                        user?
                        <Marquee><h2 className="text-xl text-amber-400">{user.email} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       </h2></Marquee>
                        :
                        <Marquee><h2>No User Found</h2></Marquee>
                      }
                      
                    </div>
                    
                </div>
                <div  className=" mt-40">
                  {
                    user ?
                    <div className="grid-cols-1">
                      <button onClick={handleSignOut} className="btn pt-3 pb-3 pr-4 pl-4 inline-block bg-transparent text-white border-2  border-sky-100">Sign Out</button>
                      {/* <Link to="/userprofile"><button className="btn pt-3 pb-3 pr-4 pl-4 inline-block bg-transparent text-white border-2  border-sky-100">Profile</button></Link> */}
                    </div>
                    :
                    <Link to="/signin">
                        <button className="btn btn-secondary pt-3 pb-3 pr-4 pl-4 inline-block bg-transparent text-white border-2  border-sky-100">Login</button>
                    </Link>
                    
                  }
                </div>
                
            </div>
          </div>
        </div>
        <div className="absolute bottom-16 left-80">
          <NavBar></NavBar>
        </div>
      </div>
    </div>
  );
};

export default Header;
