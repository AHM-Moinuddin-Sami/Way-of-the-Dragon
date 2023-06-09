import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import UserCard from "./UserCard/UserCard";

const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                users.map(user => <UserCard
                    key={user._id}
                    refetch={refetch}
                    user={user}
                ></UserCard>)
            }
        </div>
    );
};

export default ManageUsers;