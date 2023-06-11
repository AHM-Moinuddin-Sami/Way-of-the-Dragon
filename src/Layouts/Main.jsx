import Footer from "../SharedComponents/Footer/Footer";
import NavigationBar from "../SharedComponents/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const Main = () => {

    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="w-10/12 mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;