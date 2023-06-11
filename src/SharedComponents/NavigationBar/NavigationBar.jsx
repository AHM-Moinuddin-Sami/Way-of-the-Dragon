// https://i.ibb.co/MVgkP8Z/400129-removebg-preview.png
import { useContext, useEffect, useRef, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/Providers/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useStudent from "../../Hooks/useStudent";
import "./NavigationBar.css"
import anime from "animejs";

const NavigationBar = () => {

    const [theme, setTheme] = useState("");
    const imageRef = useRef(null);

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    const { user, logOut } = useContext(AuthContext);
    const [loadingComplete, setLoadingComplete] = useState(false);


    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    // useEffect(() => {
    //     setLoadingComplete(false); // Reset the loading state when the component is mounted

    //     if (isAdminLoading || isInstructorLoading || isStudentLoading) {
    //         // Simulating loading completion after 3 seconds
    //         const timer = setTimeout(() => {
    //             setLoadingComplete(true);
    //         }, 3000);

    //         return () => clearTimeout(timer); // Clean up the timer when the component unmounts
    //     }

    //     return undefined;
    // }, [isAdminLoading, isInstructorLoading, isStudentLoading]);


    useEffect(() => {
        const image = imageRef.current;
        console.log("inside anime js hook")
        const animation = anime({
            targets: image,
            rotate: "1turn",
            duration: 8000,
            easing: "linear",
            loop: true,
        });

        return () => {
            animation.pause();
        };
    }, [])

    useEffect(() => {
        if (loadingComplete) {
            const image = imageRef.current;
            const animation = anime({
                targets: image,
                rotate: "1turn",
                duration: 8000,
                easing: "linear",
                loop: true,
            });

            return () => {
                animation.pause();
            };
        }
    }, [loadingComplete]);


    useEffect(() => {

        console.log("inside 2nd hook")
        document.querySelector('html').setAttribute('data-theme', theme);


    }, [theme]);

    const handleImageError = event => {
        event.target.src = "https://cdn-icons-png.flaticon.com/512/1159/1159740.png?w=826&t=st=1684510789~exp=1684511389~hmac=001c7068b857dcdf5d33ca46a56143913e082a0a3dff59fefd023af56e239687";
    }

    return (
        <div className="navbar bg-slate-200 bg-opacity-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/allToys"}>All Toys</Link></li>
                        {
                            user && <>
                                <li><Link to={"/myToys"}>My Toys</Link></li>
                                <li><Link to={"/addToys"}>Add a Toy</Link></li>
                            </>
                        }
                        <li><Link to={"/blog"}>Blogs</Link></li>
                    </ul>
                </div>
                <Link className="md:text-3xl text-xl font-bold flex items-center"><img ref={imageRef} className="h-10 w-10 md:h-14 md:w-14" src="https://i.ibb.co/MVgkP8Z/400129-removebg-preview.png" alt="" /> <span className="site-title">Way of the Dragon</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/classes"}>All Classes</Link></li>
                    <li><Link to={"/instructors"}>All Instructors</Link></li>

                    {
                        isAdmin && <li><Link to={"/dashboard/admin"}>Dashboard</Link></li>
                    }

                    {
                        isInstructor && <li><Link to={"/dashboard/instructor"}>Dashboard</Link></li>
                    }

                    {
                        isStudent && <li><Link to={"/dashboard/student"}>Dashboard</Link></li>
                    }
                    <li>
                        <button onClick={() => toggleTheme()} className="swap swap-rotate">

                            <input type="checkbox" />

                            <svg className={`fill-current w-5 h-5 ${theme === 'dark' ? 'swap-on' : 'swap-off'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            <svg className={`fill-current w-5 h-5 ${theme === 'dark' ? 'swap-off' : 'swap-on'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </button>



                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className='flex order-2 md:order-3 justify-center items-center gap-[1vh] md:gap-[2vh]'>
                                <div className={user.displayName ? `tooltip hover:tooltip-open tooltip-bottom` : ''} data-tip={user.displayName}>
                                    {
                                        user.photoURL ?
                                            <img className='rounded-full w-10 h-10' src={user.photoURL} onError={handleImageError} />
                                            :
                                            <FaRegUserCircle className='h-10 w-10 text-white'></FaRegUserCircle>
                                    }
                                </div>
                                <Link className='text-xl md:text-2xl ' onClick={logOut}><button>Logout</button></Link>
                            </div>
                        </>
                        :
                        <div className='flex order-2 md:order-3 text-2xl gap-3'>
                            <Link to='/login'><button>Login</button></Link>
                        </div>

                }
            </div>
        </div>
    );
};

export default NavigationBar;