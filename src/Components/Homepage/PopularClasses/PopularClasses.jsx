import { useQuery } from "@tanstack/react-query";

const PopularClasses = () => {
    const { data: popularClasses = [], isLoading: loading } = useQuery({
        queryKey: ['popularClasses'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes/popular');
            return res.json();
        }
    })

    return (
        <div>
            {
                popularClasses.map(item => <div key={item._id}>{item.name}</div>)
            }
        </div>
    );
};

export default PopularClasses;