import Swal from "sweetalert2";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import useInstructor from "../../../Hooks/useInstructor";
import axios from "axios";

const ClassCard = ({ id, name, photo, instructor, available, price }) => {

    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const selectClass = async () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: `You must be logged in to select class!`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            console.log(user);
            try {
                const response = await axios.patch(
                    `http://localhost:5000/users/student/select/${user.email}`,
                    {
                        id: id,
                        payment:"unpaid"
                    }
                );
                console.log(response.data); // Response from the backend
                if (response.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: `${name} class selected!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else if (response.data.error) {
                    Swal.fire({
                        icon: 'error',
                        title: `${response.data.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{instructor}</p>
                <p>{available}</p>
                <p>{price}$</p>
                <div className="card-actions justify-end">
                    <button disabled={isAdmin || isInstructor || available === 0} onClick={() => selectClass()} className={`btn btn-primary`}>Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;