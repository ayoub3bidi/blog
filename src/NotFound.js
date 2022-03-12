import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <h2>That page connot be found</h2>
            <Link className="Link" to="/">Back to the home page...</Link>
        </div>
     );
}
 
export default NotFound;