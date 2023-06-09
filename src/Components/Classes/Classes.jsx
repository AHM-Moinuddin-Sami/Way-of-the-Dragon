import { useQuery } from '@tanstack/react-query';
import ClassCard from './ClassCard/ClassCard';

const Classes = () => {

    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
    })

    console.log(classes)

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                classes.map(item => <ClassCard
                    key={item._id}
                    photo={item.image}
                    name={item.name}
                    instructor={item.instructorName}
                    available={item.totalSeats - item.enrolledStudents}
                    price={item.price}
                    id={item._id}
                ></ClassCard>)
            }
        </div>
    );
};

export default Classes;