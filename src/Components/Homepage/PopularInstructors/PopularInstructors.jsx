import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";
import { useState } from "react";
import anime from "animejs";

const PopularInstructors = () => {
    const { data: popularInstructors = [], isLoading: loading } = useQuery({
        queryKey: ["popularInstructors"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/instructors/popular");
            return res.json();
        },
    });

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleHover = (index) => {
        setHoveredItem(index);
        anime({
            targets: `.instructor-card-${index}`,
            scale: 1.2,
            duration: 500,
        });
    };

    const handleMouseExit = (index) => {
        setHoveredItem(null);
        anime({
            targets: `.instructor-card-${index}`,
            scale: 1,
            duration: 500,
        });
    };

    return (
        <div>
            <SectionTitle title={"Popular Instructors"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-8 justify-items-center">
                {popularInstructors.map((item, index) => (
                    <div
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleMouseExit(index)}
                        className={`relative instructor-card-${index}`}
                        key={item._id}
                    >
                        <img
                            className="object-cover border-primary border rounded-full h-72 w-72 md:h-96 md:w-96"
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

export default PopularInstructors;
