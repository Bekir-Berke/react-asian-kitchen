import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

const ButtonList = () => {
    return ( 
        <div className="btn-container">
            <button type="button" id="all" className="btn btn-outline-dark mx-2">All</button>
            <button type="button" id="korea" className="btn btn-outline-dark mx-2">Korea</button>
            <button type="button" id="japan" className="btn btn-outline-dark mx-2">Japan</button>
            <button type="button" id="china" className="btn btn-outline-dark mx-2">China</button>
        </div>
    );
}
 
export default ButtonList;