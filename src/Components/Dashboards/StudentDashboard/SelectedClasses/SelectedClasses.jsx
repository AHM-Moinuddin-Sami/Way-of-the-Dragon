import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedClasses = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClasses = [], isLoading, refetch } = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/users/student/select/${user.email}`)
            return res.data;
        }
    })

    const { data: items = [] } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/classes`)
            return res.data;
        }
    })

    console.log(items);

    console.log(selectedClasses);

    const filteredClasses = items.filter(item => selectedClasses.includes(item._id))

    if (isLoading) {
        return <div>Loading...</div>;
    }


    const handleDelete = async (id, name) => {
        console.log(id, name)
        try {
            const response = await axios.patch(
                `http://localhost:5000/users/student/select/delete/${user.email}`,
                {
                    id: id
                }
            );
            refetch();
            console.log(response.data); // Response from the backend
            Swal.fire({
                icon: 'success',
                title: `${name} successfully deleted from selected classes!`,
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-center">
                        <th>No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedClasses &&
                        filteredClasses.map((item, index) =>
                            <tr className="w-full text-center overflow-hidden" key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
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
                                <td className="join join-vertical">
                                    <Link
                                        to={`/dashboard/student/payment/${item._id}`}
                                        className="btn btn-success hover:bg-none join-item"
                                    >
                                        pay</Link>
                                    <button onClick={() => handleDelete(item._id, item.name)} className="btn btn-error join-item">delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SelectedClasses;