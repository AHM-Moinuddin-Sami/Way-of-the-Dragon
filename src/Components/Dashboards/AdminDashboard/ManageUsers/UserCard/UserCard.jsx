import Swal from "sweetalert2";
import useAuth from "../../../../../Hooks/useAuth";

const UserCard = ({ refetch, userItem }) => {

    const { name, address, phoneNumber, email, gender, photo, role } = userItem;
    const { user } = useAuth();

    const handleMakeAdmin = sentUser => {
        fetch(`http://localhost:5000/users/admin/${sentUser._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${userItem.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = sentUser => {
        fetch(`http://localhost:5000/users/instructor/${sentUser._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${userItem.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="card bg-slate-400 text-black shadow-xl">

            <div className="avatar mx-auto mt-5">
                <div className="w-24 border rounded-full">
                    <img src={photo} />
                </div>
            </div>

            <div className="card-body">
                <h2 className="flex items-center gap-2 text-3xl font-bold">{name}
                    {email === user.email
                        ? <div className="badge badge-primary">You</div>
                        : ""
                    }</h2>

                <p><span className="uppercase"><div className="badge h-8 text-2xl">{role}</div></span></p>
                <p>Email: {email}</p>
                <p>{address == "" || !address ? "Address unavailable" : `Address: ${address}`} </p>
                <p>{phoneNumber == "" || !phoneNumber ? "Contact No. unavailable" : `Contact No: ${phoneNumber}`}</p>
                <p className="">{gender == "" || !gender ? "Gender unspecified" : `Gender: ${gender}`}</p>
                <div className="card-actions join justify-end">
                    <button onClick={() => handleMakeAdmin(userItem)} disabled={role === 'admin' || email === user.email} className="btn btn-primary">Make Admin</button>
                    <button onClick={() => handleMakeInstructor(userItem)} disabled={role === 'instructor' || email === user.email} className="btn btn-primary">Make Instructor</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;