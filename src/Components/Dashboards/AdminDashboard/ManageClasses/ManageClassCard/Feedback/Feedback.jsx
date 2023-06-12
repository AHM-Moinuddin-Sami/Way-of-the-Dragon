import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = ({ isDenied }) => {
    const { id } = useParams();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const { data: feedbackClass = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['feedbackClass'],
        queryFn: async () => {
            const res = await axios.get(`https://way-of-the-dragon-server.vercel.app/classes/all/${id}`)
            return res.data;
        }
    })

    const onSubmit = async (data) => {
        const feedback = data.feedback;
        try {
            const response = await axios.patch(
                `https://way-of-the-dragon-server.vercel.app/classes/feedback/${id}`,
                {
                    feedback: feedback,
                }
            );
            console.log(response.data); // Response from the backend
            refetch();
            Swal.fire({
                icon: 'success',
                title: `${feedbackClass.name} feedback submitted!`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate(-1);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
            <h3 className="font-bold text-lg">Write your feedback here</h3>
            <textarea {...register('feedback', { required: 'Feedback is required' })} cols="50" rows="15"></textarea>
            {errors.message && <span>{errors.message.message}</span>}
            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form >
    );
};

export default Feedback;