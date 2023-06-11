import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="card min-h-[100vh] min-w-[100vh] mx-auto bg-base-100 shadow-xl my-3 " >
            <div className="card-body items-center">
                <img src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif" alt="" />
                <p className="text-4xl">The page you were trying to access does not exist. Please press the button below to return to the homepage.</p>
                <div className="card-actions justify-end">
                    <Link to={`/`}><button className="btn btn-primary">Return to Homepage</button></Link>
                </div>
            </div>            
        </div>
    );
};

export default ErrorPage;


