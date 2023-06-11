import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";

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
            <SectionTitle title={"Popular Classes"}></SectionTitle>
            {
                popularClasses.map(item => <div key={item._id}>{item.name}</div>)
            }
        </div>
    );
};

export default PopularClasses;