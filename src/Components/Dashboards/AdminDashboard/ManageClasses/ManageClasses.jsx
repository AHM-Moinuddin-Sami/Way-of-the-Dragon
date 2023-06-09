import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import ManageClassCard from "./ManageClassCard/ManageClassCard";

const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/classes/all')
            return res.data;
        }
    })

    console.log(classes);

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                classes.map(item => <ManageClassCard
                    key={item._id}
                    refetch={refetch}
                    item={item}
                ></ManageClassCard>)
            }
        </div>
    );
};

export default ManageClasses;