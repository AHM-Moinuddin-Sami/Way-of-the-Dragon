
const ManageClassCard = ({ refetch, item }) => {

    const { image, name, instructorName, instructorEmail, totalSeats, enrolledStudents, price, status } = item;

    const isPending = (status === "pending");

    return (
        <div className="card lg:card-side bg-slate-400 text-black shadow-xl">
            <figure><img className="ml-2" src={image} alt="Avatar" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Status: <span className="uppercase">{status}</span></p>
                <p>Instructor Name: {instructorName}</p>
                <p>Instructor Email: {instructorEmail}</p>
                <p>Available seats: {totalSeats-enrolledStudents}</p>
                <p>Price: {price}$</p>
                <div className="justify-end btn-group">
                    <button disabled={!isPending} className="btn btn-primary btn-sm">Approve</button>
                    <button disabled={!isPending} className="btn btn-primary btn-sm">Deny</button>
                    <button className="btn btn-primary btn-sm">Send Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default ManageClassCard;