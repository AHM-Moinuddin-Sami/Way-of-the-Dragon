import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";
import { FaUsers } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

const AdminDashboardHome = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const { data: classes = [], isLoading: loading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/classes/all')
            return res.data;
        }
    })

    const instructors = users.filter(user => user.role === 'instructor');
    const students = users.filter(user => user.role === 'student');

    return (
        <div>
            <Helmet>
                <title>
                    Admin Dashboard Home | Way of the Dragon
                </title>
            </Helmet>
            <SectionTitle title={"Admin Dashboard"}></SectionTitle>
            <div className="stats shadow mx-auto">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers></FaUsers>
                    </div>
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">{users.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <GiTeacher></GiTeacher>
                    </div>
                    <div className="stat-title">Total Instructors</div>
                    <div className="stat-value">{instructors.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers></FaUsers>
                    </div>
                    <div className="stat-title">Total Students</div>
                    <div className="stat-value">{students.length}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <MdOutlineClass></MdOutlineClass>
                    </div>
                    <div className="stat-title">Total Classes</div>
                    <div className="stat-value">{classes.length}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardHome;