import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div data-theme="light"  className="mx-auto max-w-8xl">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;