import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div data-theme="light">
            <Outlet></Outlet>
            <Footer></Footer>
            <h2>Root</h2>
        </div>
    );
};

export default Root;