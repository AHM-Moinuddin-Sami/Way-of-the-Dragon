import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";

const PopularInstructors = () => {
    return (
        <div>
            <SectionTitle title={"Popular Instructors"}></SectionTitle>
            <button className="btn" onClick={() => window.my_modal_5.showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default PopularInstructors;