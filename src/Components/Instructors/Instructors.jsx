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
        <div>
            <SectionTitle title={"All Instructors"}></SectionTitle>
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
    );
};

export default Instructors;