import { Outlet, Link } from "react-router-dom";

const StudentDashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-4">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 gap-2 h-full bg-base-200 text-base-content">
                    <h3 className="mx-auto text-3xl">Student Options</h3>
                    <hr />
                    {/* Sidebar content here */}
                    <li className="w-full text-xl"><Link to={"/dashboard/student/selected"}>My Selected Classes</Link></li>
                    <li className="w-full text-xl"><Link to={"/dashboard/student/enrolled"}>My Enrolled Classes</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default StudentDashboard;