import { Navigate, useLocation } from "react-router";
import useStudent from "../Hooks/useStudent";
import useAuth from "../Hooks/useAuth";


const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if (loading || isStudentLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isStudent) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default StudentRoute;