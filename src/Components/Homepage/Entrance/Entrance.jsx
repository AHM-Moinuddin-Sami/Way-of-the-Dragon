import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";

const Entrance = () => {

    const { user } = useAuth();

    return (
        <div className="min-h-[100vh]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`, backgroundSize: 'cover' }}>
            <div className="w-full min-h-[100vh] py-5 bg-gradient-to-t from-transparent via-neutral to-transparent flex justify-center items-center">
                {
                    user ?
                        <div className="text-center text-primary">
                            <SectionTitle title={"Find Your Beginnings"}></SectionTitle>
                            <p>You are one of the proud students of the <span className="site-title text3xl">Way of the Dragon</span>
                                <br />
                                Enter the dragon's gullet and push yourself to your limits to transcend those limits!
                                <br />
                               We are pleased to be able to help you on your martial arts journey with various courses from our master instructors!
                               <br />
                               You can find their exceptional lessons quite easily and choose from among them according to your heart's desire!
                               <br />
                               Just click the button below!
                            </p>
                            <Link to={"/classes"} className="mt-3 btn btn-primary">Temper your talents!</Link>
                        </div>
                        :
                        <div className="text-center text-primary">
                            <SectionTitle title={"Begin Your Journey"}></SectionTitle>
                            <p>Sign Up now to test your mettle and learn from the best Martial Arts masters from around the world!
                                <br />
                                Enter the dragon's gullet and push yourself to your limits to transcend those limits!
                                <br />
                                While you consider joining us to get lessons from the masters of their arts, you can check out our popular classes and instructors!
                            </p>
                            <Link to={"/register"} className="mt-3 btn btn-primary">Enter the Dojo!</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Entrance;