import TypewriterComponent from "typewriter-effect";
import moment from "moment";
import logo from "../../public/planet-earth.png";
import "animate.css";
import "./Header.css";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <div className="bgImage">
      <div className="relative">
        <div>
          <img className="logo react" src={logo} />
        </div>
        <div className="text-center pb-56">
          <h3 className="text-4xl font-serif font-extrabold text-blue-700 animate__animated animate__bounce animate__infinite">
            Welcome to <span className="">My</span>{" "}
          </h3>
          <h2 className="text-6xl font-serif text-red-700 font-extrabold">
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
          <p className="text-6xl font-extrabold bg-white bg-opacity-10">
            <span className="bg-white bg-opacity-100 text-opacity-0">
              World
            </span>
            <span className="bg-white bg-opacity-100 text-opacity-0">Tour</span>
          </p>
        </div>
        <div className="absolute top-5 right-5 ">
          <p className="text-3xl myElement font-serif text-pink-700 font-semibold">
            {moment().format("dddd, MMMM D, YYYY")}
          </p>
        </div>
        <div className="absolute bottom-16 left-80">
          <NavBar></NavBar>
        </div>
      </div>
    </div>
  );
};

export default Header;
