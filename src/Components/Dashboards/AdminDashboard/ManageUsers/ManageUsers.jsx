import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import UserCard from "./UserCard/UserCard";
import useAuth from "../../../../Hooks/useAuth";

const ManageUsers = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                users.map(userItem => {
                    // if (user.displayName === userItem.name)
                    //     return;

                    return <UserCard
                        key={userItem._id}
                        refetch={refetch}
                        userItem={userItem}
                    ></UserCard>
                })
            }
        </div>
    );
};

export default ManageUsers;