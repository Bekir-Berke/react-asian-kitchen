import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
const ButtonList = () => {
    return ( 
        <div className="btn-container">
            <Link to='/'>
                <button type="button" id="all" className="btn btn-outline-dark mx-2">All</button>
            </Link>
            <Link to='/Korea'>
                <button type="button" id="korea" className="btn btn-outline-dark mx-2">Korea</button>
            </Link>
            <Link to='/Japan'>
                <button type="button" id="japan" className="btn btn-outline-dark mx-2">Japan</button>
            </Link>
            <Link to='/China'>
                <button type="button" id="china" className="btn btn-outline-dark mx-2">China</button>
            </Link> 
        </div>
    );
}
 
export default ButtonList;