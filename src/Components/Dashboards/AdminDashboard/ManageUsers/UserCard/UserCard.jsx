import Swal from "sweetalert2";

const UserCard = ({ refetch, user }) => {

    const { name, address, phone, email, gender, photo, role } = user;

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
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
                <h2 className="card-title">{name}</h2>

                <p>Role : <span className="uppercase">{role}</span></p>
                <p>Email: {email}</p>
                <p>{address == "" || !address ? "Address unavailable" : `Address: ${address}`} </p>
                <p>{phone == "" || !phone ? "Contact No unavailable" : `Phone: ${phone}`}</p>
                <p>{gender == "" || !gender ? "Gender unspecified" : `Gender: ${gender}`}</p>
                <div className="card-actions join justify-end">
                    <button onClick={() => handleMakeAdmin(user)} disabled={role === 'admin'} className="btn btn-primary">Make Admin</button>
                    <button onClick={() => handleMakeInstructor(user)} disabled={role === 'instructor'} className="btn btn-primary">Make Instructor</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;