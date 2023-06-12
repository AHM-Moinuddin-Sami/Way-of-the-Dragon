import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../SharedComponents/Section Title/SectionTitle";
import InstructorCard from "./InstructorCard/InstructorCard";
import { Helmet } from "react-helmet-async";

const Instructors = () => {

    const { data: instructors = [], isLoading: loading } = useQuery({
        queryKey: ['allInstructors'],
        queryFn: async () => {
            const res = await fetch('https://way-of-the-dragon-server.vercel.app/instructors');
            return res.json();
        }
    })

    return (
        <div className="md:w-10/12 min-h-[80vh] mx-auto">
            <Helmet>
                <title>
                    All Instructors | Way of the Dragon
                </title>
            </Helmet>
            <SectionTitle title={"All Instructors"}></SectionTitle>
            <div className="grid grid-cols-3 gap-3">
                {
                    instructors.map(instructor =>
                        <InstructorCard
                            key={instructor._id}
                            name={instructor.name}
                            photo={instructor.photo}
                            phone={instructor.phoneNumber}
                            email={instructor.email}
                        ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;