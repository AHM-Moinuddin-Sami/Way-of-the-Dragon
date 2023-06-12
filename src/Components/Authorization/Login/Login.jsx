import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signIn } = useAuth();

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;

                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200 " style={{ backgroundImage: `url("https://i.ibb.co/qmDvcyQ/pxfuel.jpg")`, backgroundSize: 'cover' }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/MVgkP8Z/400129-removebg-preview.png" alt="" />
                <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                    <div className="card-body">
                        <SectionTitle title={"Login"}></SectionTitle>
                        <hr />
                        <GoogleLogin></GoogleLogin>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-control ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input className="rounded input-bordered input" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-600">This field is required.</span>}
                            </div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="form-control">
                                <input className="rounded input-bordered input" {...register("password", {
                                    required: true
                                })} type={showPassword ? "text" : "password"} />
                                <label onClick={() => setShowPassword(!showPassword)} className="swap ml-auto mr-3 -mt-9">
                                    {
                                        showPassword ? <>Hide</> : <>Show</>
                                    }
                                </label>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600 mt-3">Password is required</p>}

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>

                            <h3>Don't have an account?<Link to="/register" className="text-blue-500 font-semibold"> Register</Link></h3>
                        </form>
                    </div>

                </div>
                <div className="min-w-[50vh] section-title text-center lg:text-left text-red-600">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Unlock your inner potential! Join us on a journey to enlightenment.</p>
                </div>

            </div>
        </div >
    );
};

export default Login;
