import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Homepage = () => {

    return (
        <div>
            <Banner></Banner>
            <div className="md:w-10/12 min-h-[80vh] mx-auto">
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
            </div>
        </div >
    );
};

export default Homepage;