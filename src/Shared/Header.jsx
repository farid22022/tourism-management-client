import TypewriterComponent from "typewriter-effect";
import moment from "moment";
import logo from "../../public/planet-earth.png";
import 'animate.css';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <div className="relative">
                <div>
                    <img className="logo react" src={logo}/>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-serif font-bold text-blue-400 animate__animated animate__bounce animate__infinite">Welcome to <span className="">My</span> </h3>
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
                <div className="absolute top-5 right-5">
                    <p className="text-2xl myElement font-serif text-pink-700 font-semibold">{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
