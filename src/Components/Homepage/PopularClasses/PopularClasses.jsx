import { useQuery } from "@tanstack/react-query";

const PopularClasses = () => {
    const { data: classes = [], isLoading: loading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes/popular');
            return res.json();
        }
    })

    return (
        <div>
            {
                classes.map(item => <div key={item._id}>{item.name}</div>)
            }
        </div>
    );
};

export default PopularClasses;