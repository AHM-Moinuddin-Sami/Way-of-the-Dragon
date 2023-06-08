import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Homepage from "../Components/Homepage/Homepage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            }
        ]
    },
]);

export default router;