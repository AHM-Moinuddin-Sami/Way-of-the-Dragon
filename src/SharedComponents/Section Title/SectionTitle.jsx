import "./SectionTitle.css";

const SectionTitle = ({ title }) => {

    return (
        <div className="mx-auto w-1/2">
            <h3 className="border-gradient font-bold section-title text-4xl text-center my-10 border-t-2 border-b-2 py-3">
                {title}
            </h3>
        </div>
    );
};

export default SectionTitle;