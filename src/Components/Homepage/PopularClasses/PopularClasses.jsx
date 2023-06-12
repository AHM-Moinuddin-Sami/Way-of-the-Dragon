import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";
import { useState } from "react";
import anime from "animejs";

const Popularclasses = () => {
    const { data: popularclasses = [], isLoading: loading } = useQuery({
        queryKey: ["popularclasses"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/classes/popular");
            return res.json();
        },
    });

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleHover = (index) => {
        setHoveredItem(index);
        anime({
            targets: `.class-card-${index}`,
            scale: 1.2,
            duration: 500,
        });
    };

    const handleMouseExit = (index) => {
        setHoveredItem(null);
        anime({
            targets: `.class-card-${index}`,
            scale: 1,
            duration: 500,
        });
    };

    return (
        <div className="mt-auto">
            <SectionTitle title={"Popular classes"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-8 justify-items-center">
                {popularclasses.map((item, index) => (
                    <div
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleMouseExit(index)}
                        className={`relative class-card-${index}`}
                        key={item._id}
                    >
                        <img
                            className="object-cover border-primary border rounded-full w-72 h-72 md:h-96 md:w-96"
                            src={item.photo}
                            alt=""
                        />
                        {hoveredItem === index && (
                            <p className="text-3xl -mt-[50%] px-10 text-center text-red-600 bg-gradient-to-r from-transparent via-black to-transparent absolute top-full left-0 -translate-y-1/2 w-full py-4">
                                {item.name}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Popularclasses;
