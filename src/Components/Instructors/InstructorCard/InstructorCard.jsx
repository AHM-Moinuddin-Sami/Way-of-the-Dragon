
const InstructorCard = ({ name, email, phone, photo }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-primary shadow-2xl border-primary border-2">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Avatar" className="rounded-full w-96 h-96  object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="site-title text-3xl">{name}</h2>
                <p>Email: {email} </p>
                <p> {phone == "" || !phone ? "Contact No. unavailable" : `Contact No: ${phone}`}</p>
            </div>
        </div>
    );
};

export default InstructorCard;