import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Entrance from "./Entrance/Entrance";
import NewsSubscribe from "./NewsSubscribe/NewsSubscribe";

const Homepage = () => {

    return (
        <div>
            <Helmet>
                <title>Home | Way of the Dragon</title>
            </Helmet>
            <Banner></Banner>
            <Entrance></Entrance>
            <div className="md:w-10/12 min-h-[80vh] mx-auto">
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
            </div>
            <NewsSubscribe></NewsSubscribe>
        </div >
    );
};

export default Homepage;