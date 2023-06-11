import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";
import { useRef } from "react";
import anime from "animejs";

const PopularClasses = () => {
    const { data: popularClasses = [], isLoading: loading } = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes/popular');
            return res.json();
        }
    })

    const boxRef = useRef(null);

    const handleHover = () => {
        anime({
            targets: boxRef.current,
            scale: 1.2,
            duration: 500,
            //   easing: "easeInOutQuad",
        });
    };

    const handleMouseExit = () => {
        anime({
            targets: boxRef.current,
            scale: 1,
            duration: 500,
            //   easing: "easeInOutQuad",
        });
    };

    return (
        <div>
            <SectionTitle title={"Popular Classes"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-8 border border-primary">
                {popularClasses.map(item => (
                    <div
                        className="border-primary border relative"
                        ref={boxRef}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseExit}
                        key={item._id}
                    >
                        <img className="object-cover" src={item.image} alt="" />
                        <p className="text-3xl px-10 text-center text-red-600 bg-gradient-to-r from-transparent via-black to-transparent  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default PopularClasses;