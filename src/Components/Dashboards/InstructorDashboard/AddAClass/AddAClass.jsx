import { useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AddAClass = () => {
    const { user } = useAuth();

    const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            instructorName: user.displayName,
            instructorEmail: user.email,
        }
    });

    const [axiosSecure] = useAxiosSecure();

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();



    const handleClassAddition = async (item) => {
        const formData = new FormData();
        formData.append("image", item.photoFile[0])

        await fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const saveClass = { name: item.className, image: imgResponse.data.display_url, status: 'pending', enrolledStudents: 0, price: parseFloat(item.price), totalSeats: parseInt(item.availableSeats), instructorName: item.instructorName, instructorEmail: item.instructorEmail };
                    postItem(saveClass);
                }
            })


    }

    const postItem = async (saveClass) => {
        try {
            const response = await axiosSecure.post('https://way-of-the-dragon-server.vercel.app/classes', saveClass);
            if (response.data.insertedId) {
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Class added successfully.',
                    showConfirmButton: false,
                    timer: 2000
                });
            }


            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error('An error occurred while posting the item');
        }
    }

    const mutation = useMutation(handleClassAddition);

    const onSubmit = data => {
        mutation.mutate(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-control">

                <label className="">
                    <span className="">Class Name*</span>
                </label>
                <input className="rounded input-bordered input" {...register("className", { required: true })} />
                {errors.className && <span className="text-red-600">Name is required</span>}

                <label className="">
                    <span className="">Class Image*</span>
                </label>
                <input type="file" className="rounded file-input file-input-bordered w-full" {...register("photoFile", { required: true })} />
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

                <button type='submit' className="btn mt-3">Add Class</button>
                {
                    errorMessage &&
                    <h3 className='text-red-500'>{errorMessage}</h3>
                }

            </form>
        </div>
    );
};

export default AddAClass;