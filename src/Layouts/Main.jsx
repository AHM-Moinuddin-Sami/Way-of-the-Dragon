import { useEffect, useState } from "react";
import Footer from "../SharedComponents/Footer/Footer";
import NavigationBar from "../SharedComponents/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const Main = () => {
    const [showComponent, setShowComponent] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowComponent(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <div hidden={showComponent}>
                <NavigationBar></NavigationBar>
                <div className="w-10/12 mx-auto">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
            <div hidden={!showComponent}>Loading...</div>
        </>
    );
};

export default Main;