import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Menu from "../Shared/Menu";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div data-theme="light">
            <Header></Header>
            <NavBar/>
            <Menu/>
            <Outlet></Outlet>
            <Footer></Footer>
            <h2>Root</h2>
        </div>
    );
};

export default Root;