import { useEffect, useRef, useState } from "react";
import Footer from "../SharedComponents/Footer/Footer";
import NavigationBar from "../SharedComponents/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import LoadingPage from "../SharedComponents/LoadingPage/LoadingPage";

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

    const pathRef = useRef(null);

    const { pathLength } = useSpring({
        from: { pathLength: 0 },
        to: { pathLength: 1 },
        config: { duration: 3000 },
    });

    return (
        <>
            <div hidden={showComponent}>
                <NavigationBar></NavigationBar>
                <div className="w-10/12 min-h-[80vh] mx-auto">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>

            <div hidden={!showComponent}>
                <LoadingPage ></LoadingPage>
            </div>
        </>
    );
};

export default Main;