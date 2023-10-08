import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" text-center ">
            <h2 className=" text-4xl"> 404 Not Found</h2>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;