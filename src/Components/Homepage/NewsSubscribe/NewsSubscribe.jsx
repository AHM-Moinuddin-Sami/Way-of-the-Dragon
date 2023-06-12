import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SectionTitle from '../../../SharedComponents/Section Title/SectionTitle';

const NewsSubscribe = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleSubscribe = async data => {
        await fetch(`https://way-of-the-dragon-server.vercel.app/subscribe/${data.email}`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(item => {

                if (item.insertedId) {
                    reset();
                    Swal.fire({
                        icon: 'success',
                        title: 'Subscribed to newsletter successfully.',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
                else {
                    reset();
                    Swal.fire({
                        icon: 'error',
                        title: `${item.message}`,
                        showConfirmButton: false,
                        timer: 2000
                    })

                }
            })
    }

    return (
        <div className='text-center mt-10 py-10 flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-primary'>
            <SectionTitle title={"Subscribe to Our Newsletter"}></SectionTitle>
            <p>Subscribe to our newsletter to get the latest news about our services as well as our instructors!</p>
            <form onSubmit={handleSubmit(handleSubscribe)} className="form-control">
                <label className="">
                    <span className="">Your Email*</span>
                </label>
                <input className="rounded input-bordered input" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-600">This field is required.</span>}
                <button type='submit' className="btn mt-3">Subscribe</button>
            </form>
        </div>
    );
};

export default NewsSubscribe;