import { useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";
import anime from 'animejs';

const bannerImages = [
    "https://images.unsplash.com/photo-1514050566906-8d077bae7046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    "https://images.unsplash.com/photo-1611077479643-5b3c01381f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1056&q=80",
    "https://images.unsplash.com/photo-1628306938727-3c60ab7ac571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1512928735464-5cc10b1eb091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
]


export default function Banner() {

    const progressCircle = useRef(null);
    const imageRef = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(() => {
        const image = imageRef.current;
        const animation = anime({
            targets: image,
            rotate: "-1turn",
            duration: 10000,
            easing: "linear",
            loop: true,
        });

        return () => {
            animation.pause();
        };
    }, [])


    return (
        <div>
            <div className='relative pt-5 mb-20 min-h-fit'>
                <video className="top-0 left-0 absolute h-full w-full object-cover" autoPlay muted loop>
                    <source src="/firebg.mp4" type="video/mp4" />
                </video>

                <div className="hero min-h-max bg-base-200">

                    <div className="hero-content grid md:grid-cols-2">

                        <Swiper
                            effect={"cube"}
                            grabCursor={true}
                            loop={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            pagination={true}
                            modules={[EffectCube, Pagination, Autoplay]}
                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                            autoplay={{
                                delay: 3000, // Autoplay delay in milliseconds
                                disableOnInteraction: false // Allow interaction (swipe) to stop autoplay
                            }}
                            className="mySwiper md:h-[500px] md:w-[500px] w-[80vw] h-[50vh]"
                        >
                            {
                                bannerImages.map((img, i) =>
                                    <SwiperSlide key={i}>
                                        <img src={img} className=' object-contain' alt="Slide 1" />
                                    </SwiperSlide>
                                )
                            }

                            <div className="autoplay-progress" slot="container-end">
                                <svg viewBox="0 0 48 48" ref={progressCircle}>
                                    <circle cx="24" cy="24" r="20"></circle>
                                </svg>
                                <span ref={progressContent}></span>
                            </div>
                        </Swiper>
                        <div className='text-white'>
                            <h1 className="text-3xl section-title font-bold">Welcome <span className='text-red-600'>Aspirant</span>!</h1>
                            <p className=" pt-2 "><span className='section-title'> Here you will the path to strength with the help of our experienced trainers who are masters of their crafts. Raising your martial expertise is the goal of </span> <br /> <span className='text-3xl text-red-600 site-title'>Way of the Dragon</span></p>
                        </div>

                        <img ref={imageRef} className='md:col-span-2 w-36 h-36 md:w-72 md:h-72 mx-auto justify-center' src="https://i.ibb.co/MVgkP8Z/400129-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
