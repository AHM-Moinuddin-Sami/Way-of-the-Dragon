import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {

    const { id } = useParams();

    console.log(id);

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");

    const { data: item = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/classes/update/${id}`)
            return res.data;
        }
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            className: item.name,
            availableSeats: item.totalSeats,
            price: item.price,
            photoURL: item.image
        }
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.patch(
                `http://localhost:5000/classes/update/${id}`,
                {
                    name: data.className,
                    totalSeats: data.availableSeats,
                    price:data.price,
                    image:data.photoURL
                }
            );
            console.log(response.data); // Response from the backend
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${item.name} successfully updated!`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate(-1);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h3 className="text-center text-2xl text-primary-content">Update Class Information</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="form-control">

                <label className="">
                    <span className="">Class Name*</span>
                </label>
                <input defaultValue={item.name} className="rounded input-bordered input" {...register("className", { required: true })} />
                {errors.className && <span className="text-red-600">Name is required</span>}

                <label className="">
                    <span className="">Class Image*</span>
                </label>
                <input defaultValue={item.image} className="rounded input-bordered input" {...register("photoURL", { required: true })} />
                {errors.photoURL && <span className="text-red-600">Class photo is required.</span>}

                <label>Available Seats</label>
                <input defaultValue={item.totalSeats} className="rounded input-bordered input" type="text" inputMode="numeric" {...register("availableSeats", {
                    required: true,
                    pattern: {
                        value: /^[0-9]*$/,
                        message: 'Please enter a valid number',
                    },
                })} />
                {errors.availableSeats && <span className="text-red-600">{errors.availableSeats.message}</span>}

                <label>Price</label>
                <input defaultValue={item.price} className="rounded input-bordered input" {...register("price", {
                    required: true,
                    pattern: {
                        value: /^[0-9]*$/,
                        message: 'Please enter a valid number',
                    },
                })} />
                {errors.price && <span className="text-red-600">{errors.price.message}</span>}

                <button type='submit' className="btn mt-3">Add Class</button>
                {
                    errorMessage &&
                    <h3 className='text-red-500'>{errorMessage}</h3>
                }

            </form>
        </div>
    );
};

export default UpdateClass;