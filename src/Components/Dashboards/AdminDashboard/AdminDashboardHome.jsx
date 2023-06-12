import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";
import { FaUsers } from "react-icons/fa";

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

    console.log(users);

    const instructors = users.filter(user => user.role === 'instructor');
    const students = users.filter(user => user.role === 'student');

    return (
        <div>
            <SectionTitle title={"Admin Dashboard"}></SectionTitle>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers></FaUsers>
                    </div>
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">{users.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img width="48" height="48" src="https://img.icons8.com/color/48/personal-trainer.png" alt="personal-trainer" />
                    </div>
                    <div className="stat-title">Total Instructors</div>
                    <div className="stat-value">{instructors.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img width="48" height="48" src="https://img.icons8.com/color/48/boxing-2.png" alt="boxing-2" />
                    </div>
                    <div className="stat-title">Total Students</div>
                    <div className="stat-value">{students.length}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img width="16" height="16" src="https://img.icons8.com/office/16/pushups.png" alt="pushups" />
                    </div>
                    <div className="stat-title">Total Classes</div>
                    <div className="stat-value">{classes.length}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardHome;