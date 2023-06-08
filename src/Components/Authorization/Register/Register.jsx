import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {

    const [terms, setTerms] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const { signUp, updateUserProfile } = useAuth();

    const onSubmit = data => {

        if (data.password !== data.confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        signUp(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email, gender: data.gender, phoneNumber: data.phoneNumber, address: data.address, photo: data.photoURL }
                        console.log(savedUser)
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };

    // const handleRegistration = event => {
    //     event.preventDefault();

    //     const name = event.target.name.value;
    //     const photo = event.target.photo.value;
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;

    //     signUp(email, password)
    //         .then(result => {
    //             const createdUser = result.user;
    //             createdUser.photoURL = photo;
    //             createdUser.displayName = name;
    //             setErrorMessage('');
    //             navigate("/");
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             setErrorMessage(firebaseErrorFormater(error));
    //         })
    // }

    const handleTerms = (event) => {
        setTerms(event.target.checked);
    }

    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80")` }}>
            <div className='mx-auto w-11/12 md:w-1/2 bg-white p-8 mt-2 rounded'>

                <h3 className='text-center font-semibold text-4xl'>Registration</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="form-control">

                    <label className="">
                        <span className="">Your Name</span>
                    </label>
                    <input className="rounded" {...register("name", { required: true })} />
                    {errors.name && <span className="text-red-600">Name is required</span>}

                    <label className="">
                        <span className="">Your Email*</span>
                    </label>
                    <input {...register("email", { required: true })} />
                    {errors.email && <span>This field is required.</span>}

                    <label className="">
                        <span className="">Your Password*</span>
                    </label>
                    <input className="w-full" {...register("password", {
                        required: true,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                        minLength: 6
                        })} type="password" />
                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}


                    <label>Confirm Password:</label>
                    <input {...register("confirmPassword", { required: true })} type="password" />
                    {errors.confirmPassword && <span>This field is required.</span>}
                    {errorMessage && <span>{errorMessage}</span>}

                    <label className="">
                        <span className="">Photo URL</span>
                    </label>
                    <input {...register("photoURL", { required: true })} />
                    {errors.photoURL && <span>This field is required.</span>}

                    <label>Gender:</label>
                    <select {...register("gender")}>
                        <option value="">Prefer not to divulge</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>


                    <label>Phone Number:</label>
                    <input type="text" {...register("phoneNumber")} />

                    <label>Address:</label>
                    <input {...register("address")} />

                    <div className="flex mt-3">
                        <span className="mr-3">Accept Terms and Conditions</span>
                        <input onClick={handleTerms} type="checkbox" className="checkbox" />
                    </div>

                    <button type='submit' disabled={!terms} className="btn mt-3">Register</button>

                    {
                        errorMessage &&
                        <h3 className='text-red-500'>{errorMessage}</h3>
                    }

                    <h3 className='mt-3'>Already have an account? <Link className='text-blue-500 font-semibold' to='/login'>Login</Link></h3>
                </form>
            </div>
        </div>
    );
};

export default Register;