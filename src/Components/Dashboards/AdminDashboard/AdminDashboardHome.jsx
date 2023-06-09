import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

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
    const students = users.filter(user => user.role === 'students');
    
    return (
        <div>
            <p>Total Users: {users.length}</p>
            <p>Total Instructors: {instructors.length}</p>
            <p>Total Students: {students.length}</p>
            <p>Total Classes: {classes.length}</p>
        </div>
    );
};

export default AdminDashboardHome;