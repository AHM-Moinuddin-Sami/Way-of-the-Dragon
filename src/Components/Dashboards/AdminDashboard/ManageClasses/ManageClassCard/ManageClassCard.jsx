import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Feedback from "./Feedback/Feedback";
import { Link } from "react-router-dom";

const ManageClassCard = ({ refetch, item }) => {

    const { image, name, instructorName, instructorEmail, totalSeats, enrolledStudents, price, status } = item;

    const [selectedItem, setSelectedItem] = useState(null);

    const isPending = (status === "pending");
    const isDenied = (status === "denied");

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleApprove = item => {
        fetch(`http://localhost:5000/classes/approve/${item._id}`, {
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
                        title: `${item.name} has been approved!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = item => {
        fetch(`http://localhost:5000/classes/deny/${item._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: `${item.name} has been denied!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="card bg-slate-400 text-black shadow-xl">
            <figure className=""><img className="object-cover h-64" src={image} alt="Avatar" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Status: <span className="uppercase">{status}</span></p>
                <p>Instructor Name: {instructorName}</p>
                <p>Instructor Email: {instructorEmail}</p>
                <p>Available seats: {totalSeats - enrolledStudents}</p>
                <p>Price: {price}$</p>
                <div className="justify-end join">
                    <button onClick={() => handleApprove(item)} disabled={!isPending} className="btn btn-primary btn-sm">Approve</button>
                    <button onClick={() => handleDeny(item)} disabled={!isPending} className="btn btn-primary btn-sm">Deny</button>
                    <button disabled={!isDenied} className="btn btn-sm p-0 btn-primary"><Link to={`/dashboard/admin/update/${item._id}`} className="btn btn-sm btn-ghost hover:bg-none">SendFeedback</Link></button>
                </div>

            </div>


        </div>
    );
};

export default ManageClassCard;