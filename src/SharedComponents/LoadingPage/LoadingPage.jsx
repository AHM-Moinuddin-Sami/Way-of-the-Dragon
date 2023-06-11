import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./loadingPage.css";

const LoadingPage = () => {
    // const imageRef = useRef(null);

    // useEffect(() => {
    //     const image = imageRef.current;

    //     const animation = anime({
    //         targets: image,
    //         rotate: "1turn",
    //         duration: 8000,
    //         easing: "linear",
    //         loop: true,
    //     });

    //     return () => {
    //         animation.pause();
    //     };
    // }, []);

    return (
        <div>
            {/* <img src="https://tenor.com/view/on-fire-flames-sphere-red-circle-gif-16278404" alt="" />
            <img
                ref={imageRef}
                src="https://i.ibb.co/MVgkP8Z/400129-removebg-preview.png"
                alt=""
            /> */}
        </div>
    );
};

export default LoadingPage;
