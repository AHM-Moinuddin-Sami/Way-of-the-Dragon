import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyClasses = () => {

    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { data: myClasses = [], isLoading:loading} = useQuery({
        queryKey: ['myClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/instructor/all/${user.email}`)
            return res.data;
        }
    })

    return (
        <div hidden={loading}>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Enrolled Students</th>
                            <th>Total Seats</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((item, index) => 
                            <tr className="w-full text-center overflow-hidden" key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td className="w-12 h-12">
                                    <img className="object-fill rounded-full" src={item.image} alt="Avatar Tailwind CSS Component" />
                                </td>
                                <td>
                                    <p>{item.name}</p>
                                </td>
                                <td className="uppercase">{item.status}</td>
                                <td>{item.price}$</td>
                                <td>{item.enrolledStudents}</td>
                                <td>{item.totalSeats}</td>
                                <td >
                                    {/* You can open the modal using ID.showModal() method */}
                                    <button disabled={item.feedback==="" || !item.feedback} className="btn" onClick={() => window.my_modal_3.showModal()}>See Feedback</button>
                                    <dialog id="my_modal_3" className="modal">
                                        <form method="dialog" className="modal-box">
                                            <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            <h3 className="font-bold text-lg">Admin Feedback</h3>
                                            <p className="py-4">{item.feedback}</p>
                                        </form>
                                    </dialog>
                                </td>
                                <td>
                                    
                                    <Link to={`/dashboard/instructor/update/${item._id}`}><button className="btn">Update</button></Link>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;