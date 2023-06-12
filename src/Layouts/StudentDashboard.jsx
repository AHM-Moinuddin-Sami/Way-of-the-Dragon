import { Helmet } from "react-helmet-async";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBookmark, FaMoneyBillAlt } from "react-icons/fa";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

const StudentDashboard = () => {

    return (
        <div>
            <Helmet>
                <title>
                    Student Dashboard | Way of the Dragon
                </title>
            </Helmet>
            <div className="drawer md:w-10/12 min-h-[80vh] mx-auto lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col m-4">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open options</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 gap-2 h-full bg-base-200 text-base-content">
                        <h3 className="mx-auto text-3xl">Student Options</h3>
                        <hr />
                        {/* Sidebar content here */}
                        <li className="w-full text-xl"><Link to={"/dashboard/student/selected"}><FaBookmark></FaBookmark> My Selected Classes</Link></li>
                        <li className="w-full text-xl"><Link to={"/dashboard/student/enrolled"}><MdAssignmentTurnedIn></MdAssignmentTurnedIn>My Enrolled Classes</Link></li>
                        <li className="w-full text-xl"><Link to={"/dashboard/student/paymentHistory"}><FaMoneyBillAlt></FaMoneyBillAlt> My Payment History</Link></li>
                        <hr />
                        <li className="w-full text-xl"><Link to={"/dashboard/student"}><AiOutlineMenu></AiOutlineMenu>Dashboard Home</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;