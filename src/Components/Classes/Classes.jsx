import { useQuery } from '@tanstack/react-query';
import ClassCard from './ClassCard/ClassCard';
import SectionTitle from '../../SharedComponents/Section Title/SectionTitle';

const Classes = () => {

    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
    })


    return (
        <div className=' md:w-10/12 min-h-[80vh] mx-auto'>
        <SectionTitle title={"All Classes"}></SectionTitle>
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
        </div>
    );
};

export default Classes;