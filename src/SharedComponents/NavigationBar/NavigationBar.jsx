// https://i.ibb.co/MVgkP8Z/400129-removebg-preview.png
import { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/Providers/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

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
                <Link className="md:text-3xl text-xl font-bold flex items-center"><img className="h-10 w-10 md:h-14 md:w-14" src="https://i.ibb.co/MVgkP8Z/400129-removebg-preview.png" alt="" /> <span>Way of the Dragon</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/allToys"}>All Toys</Link></li>
                    {
                        user && <>
                            <li><Link to={"/myToys"}>My Toys</Link></li>
                            <li><Link to={"/addToys"}>Add a Toy</Link></li>
                        </>
                    }
                    {
                        isAdmin && <li><Link to={"/dashboard/admin"}>Admin Dashboard</Link></li>
                    }
                    {
                        isInstructor && <li><Link to={"/dashboard/instructor"}>Instructor Dashboard</Link></li>
                    }
                    <li><Link to={"/blog"}>Blogs</Link></li>
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
                                <Link className='text-xl md:text-2xl text-white' onClick={logOut}><button>Logout</button></Link>
                            </div>
                        </>
                        :
                        <div className='flex order-2 md:order-3 text-white text-2xl gap-3'>
                            <Link to='/login'><button>Login</button></Link>
                        </div>

                }
            </div>
        </div>
    );
};

export default NavigationBar;