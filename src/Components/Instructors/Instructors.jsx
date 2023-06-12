import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../SharedComponents/Section Title/SectionTitle";
import InstructorCard from "./InstructorCard/InstructorCard";

const Instructors = () => {

    const { data: instructors = [], isLoading: loading } = useQuery({
        queryKey: ['allInstructors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/instructors');
            return res.json();
        }
    })

    console.log(instructors);

    return (
        <div className="min-h-screen">
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