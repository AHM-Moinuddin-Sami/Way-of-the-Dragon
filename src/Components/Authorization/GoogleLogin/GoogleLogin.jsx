import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const GoogleLogin = () => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {

                const loggedUser = result.user;

                const savedUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL };

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <button onClick={handleGoogleLogin} className="btn btn-outline hover:bg-[#34A853] hover:border-[#34A853]">Log in with Google  <FaGoogle className="ml-1"></FaGoogle></button>
    );
};

export default GoogleLogin;