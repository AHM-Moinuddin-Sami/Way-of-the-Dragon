import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyClasses = () => {

    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [errorMessage, setErrorMessage] = useState("");

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/all/${user.email}`)
            return res.data;
        }
    })

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>

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
                            classes.map((item, index) => <tr className="w-full text-center overflow-hidden" key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td className="w-12 h-12">
                                    <img className="object-fill rounded-full" src={item.image} alt="Avatar Tailwind CSS Component" />
                                </td>
                                <td>
                                    <p>{item.name}</p>
                                </td>
                                <td>{item.status}</td>
                                <td>{item.price}$</td>
                                <td>{item.enrolledStudents}</td>
                                <td>{item.totalSeats}</td>
                                <td >{/* You can open the modal using ID.showModal() method */}
                                    <button className="btn" onClick={() => window.my_modal_3.showModal()}>See Feedback</button>
                                    <dialog id="my_modal_3" className="modal">
                                        <form method="dialog" className="modal-box">
                                            <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            <h3 className="font-bold text-lg">Admin Feedback</h3>
                                            <p className="py-4">{item.feedback}</p>
                                        </form>
                                    </dialog></td>
                                <td>
                                    <Link><button className="btn">Update</button></Link>
                                    {/* You can open the modal using ID.showModal() method */}
                                    {/* <button className="btn" onClick={() => window.my_modal_4.showModal()}>update</button>
                                    <dialog id="my_modal_4" className="modal">
                                        <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="form-control modal-box">

                                            <label className="">
                                                <span className="">Class Name*</span>
                                            </label>
                                            <input className="rounded input-bordered input" {...register("className", { required: true })} />
                                            {errors.className && <span className="text-red-600">Name is required</span>}

                                            <label className="">
                                                <span className="">Class Image*</span>
                                            </label>
                                            <input className="rounded input-bordered input" {...register("photoURL", { required: true })} />
                                            {errors.photoURL && <span className="text-red-600">Class photo is required.</span>}

                                            <label className="">
                                                <span className="">Instructor Name*</span>
                                            </label>
                                            <input defaultValue={user.displayName} placeholder={user.displayName} disabled={true} className="rounded input-bordered input" {...register("instructorName")} />
                                            {errors.instructorName && <span className="text-red-600">Name is required</span>}

                                            <label className="">
                                                <span className="">Instructor Email*</span>
                                            </label>
                                            <input defaultValue={user.email} placeholder={user.email} disabled={true} className="rounded input-bordered input" {...register("instructorEmail")} />
                                            {errors.instructorEmail && <span className="text-red-600">This field is required.</span>}

                                            <label>Available Seats</label>
                                            <input className="rounded input-bordered input" type="text" inputMode="numeric" {...register("availableSeats", {
                                                required: true,
                                                pattern: {
                                                    value: /^[0-9]*$/,
                                                    message: 'Please enter a valid number',
                                                },
                                            })} />
                                            {errors.availableSeats && <span className="text-red-600">{errors.availableSeats.message}</span>}

                                            <label>Price</label>
                                            <input className="rounded input-bordered input" {...register("price", {
                                                required: true,
                                                pattern: {
                                                    value: /^[0-9]*$/,
                                                    message: 'Please enter a valid number',
                                                },
                                            })} />
                                            {errors.price && <span className="text-red-600">{errors.price.message}</span>}

                                            <div className="">
                                                <button type='submit' className="btn mt-3">Add Class</button>
                                                <button className="btn mt-3">Close</button>
                                            </div>
                                            {
                                                errorMessage &&
                                                <h3 className='text-red-500'>{errorMessage}</h3>
                                            }

                                        </form>
                                    </dialog> */}

                                    {/* You can open the modal using ID.showModal() method */}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;