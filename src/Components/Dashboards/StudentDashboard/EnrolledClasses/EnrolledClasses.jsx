import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import axios from "axios";
import SectionTitle from "../../../../SharedComponents/Section Title/SectionTitle";

const EnrolledClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: enrolledClasses = [], isLoading, refetch } = useQuery({
        queryKey: ["enrolledClasses"],
        queryFn: async () => {
            const res = await axiosSecure.get(
                `users/student/enrolled/${user.email}`
            );
            return res.data;
        },
    });

    console.log(enrolledClasses);

    const { data: items = [] } = useQuery({
        queryKey: ["items"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/classes`);
            return res.data;
        },
    });

    const filteredClasses = items.filter((item) =>
        enrolledClasses.includes(item._id)
    );

    if (isLoading) {
        return (
            <div className="h-[100vh] flex justify-center items-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <SectionTitle title={"Enrolled Classes"}></SectionTitle>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th>No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {enrolledClasses &&
                        filteredClasses.map((item, index) => (
                            <tr className="w-full text-center overflow-hidden" key={item._id}>
                                <td>{index + 1}</td>
                                <td className="w-12 h-12">
                                    <img className="object-fill rounded-full" src={item.image} />
                                </td>
                                <td>
                                    <p>{item.name}</p>
                                </td>
                                <td>{item.instructorName}</td>
                                <td>{item.instructorEmail}</td>
                                <td>{item.totalSeats - item.enrolledStudents}</td>
                                <td>{item.price}$</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnrolledClasses;
