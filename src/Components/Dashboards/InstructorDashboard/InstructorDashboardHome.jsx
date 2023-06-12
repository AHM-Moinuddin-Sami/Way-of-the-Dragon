import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const InstructorDashboardHome = () => {

    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { data: myClasses = [] } = useQuery({
        queryKey: ['myClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/instructor/all/${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle title={"Instructor Dashboard"}></SectionTitle>
        </div>
    );
};

export default InstructorDashboardHome;