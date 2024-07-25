import { Link } from "react-router-dom";

const NotFound = () => {


    return (
        <div>
            <h1>sorry!!!</h1>
            <p>The page cannot found</p>
            <Link to="/">Back to homepage</Link>
        </div>
    );
}

export default NotFound;