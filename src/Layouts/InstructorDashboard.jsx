import { Helmet } from "react-helmet-async";
import { Outlet, Link } from "react-router-dom";

const InstructorDashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Admin Dashboard | Way of the Dragon</title>
            </Helmet>
            <div className="drawer md:w-10/12 min-h-[80vh] mx-auto lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col m-4">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open options</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full gap-2 bg-base-200 text-base-content">

                        <h3 className="mx-auto text-3xl">Instructor Options</h3>
                        <hr />
                        <li className="w-full text-xl"><Link to={"/dashboard/instructor/addclass"}>Add A Class</Link></li>
                        <li className="w-full text-xl"><Link to={"/dashboard/instructor/myclasses"}>My Classes</Link></li>
                        <hr />
                        <li className="w-full text-xl"><Link to={"/dashboard/instructor"}>Dashboard Home</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboard;