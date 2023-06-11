
const InstructorCard = ({ name, email, phone, photo }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-2xl border-primary border">
            <figure className="px-10 pt-10 object-cover ">
                <img src={photo} alt="Avatar" className="rounded-xl h-72" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Email: {email} Phone: {phone}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;