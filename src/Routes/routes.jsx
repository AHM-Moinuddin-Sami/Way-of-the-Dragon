import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Authorization/Login/Login";
import Register from "../Components/Authorization/Register/Register";
import ManageUsers from "../Components/Dashboards/AdminDashboard/ManageUsers/ManageUsers";
import AdminDashboard from "../Layouts/AdminDashboard";
import AdminDashboardHome from "../Components/Dashboards/AdminDashboard/AdminDashboardHome";
import ManageClasses from "../Components/Dashboards/AdminDashboard/ManageClasses/ManageClasses";
import InstructorDashboard from "../Layouts/InstructorDashboard";
import InstructorDashboardHome from "../Components/Dashboards/InstructorDashboard/InstructorDashboardHome";
import AddAClass from "../Components/Dashboards/InstructorDashboard/AddAClass/AddAClass";
import MyClasses from "../Components/Dashboards/InstructorDashboard/MyClasses/MyClasses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "dashboard/admin",
                element: <AdminDashboard></AdminDashboard>,
                children: [
                    {
                        path: "",
                        element: <AdminDashboardHome></AdminDashboardHome>
                    },
                    {
                        path: "users",
                        element: <ManageUsers></ManageUsers>
                    },
                    {
                        path: "classes",
                        element: <ManageClasses></ManageClasses>
                    }
                ]
            },
            {
                path: "dashboard/instructor",
                element: <InstructorDashboard></InstructorDashboard>,
                children: [
                    {
                        path: "",
                        element: <InstructorDashboardHome></InstructorDashboardHome>
                    },
                    {
                        path: "addclass",
                        element: <AddAClass></AddAClass>
                    },
                    {
                        path: "myclasses",
                        element: <MyClasses></MyClasses>
                    }
                ]
            }
        ]
    }
]);

export default router;