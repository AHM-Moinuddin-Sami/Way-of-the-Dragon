import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signIn } = useAuth();

    function firebaseErrorFormater(error) {
        let errMsg = 'An error occurred.';

        switch (error.code) {
            case 'auth/invalid-email':
            case 'auth/wrong-password':
            case 'auth/user-not-found':
            case 'auth/missing-email':
                errMsg = 'The provided email or password is invalid.';
                break;
        }

        return errMsg;
    }

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

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

    // const handleLogin = event => {
    //     event.preventDefault();
    //     const data = event.target;
    //     const email = data.email.value;
    //     const password = data.password.value;

    //     signIn(email, password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             navigate(from, { replace: true });
    //             setErrorMessage('');
    //             console.log(result)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             setErrorMessage(firebaseErrorFormater(error));
    //         })
    // }



    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1586941963134-6486b671b809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="min-w-[50vh] text-center lg:text-left text-base-200">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Enter your credentials to login.</p>
                </div>

                <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                    <div className="card-body">
                        <h3 className="text-center text-3xl font-semibold">Login</h3>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input className="rounded input-bordered input" {...register("password", {
                                    required: true
                                })} type="password" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                {
                                    errorMessage &&
                                    <h3 className='text-red-500'>{errorMessage}</h3>
                                }
                            </div>

                            <h3>Don't have an account?<Link to="/register" className="text-blue-500 font-semibold"> Register</Link></h3>
                        </form>
                    </div>

                </div>


            </div>
        </div >
    );
};

export default Login;
