import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
const Menu = ({menu}) => {
    return (
        <div className='section-center row'>
            {menu.map((food) => (
                <div className="menu-items col-lg-6 col-sm-12" key={food.id}>
                    <img src={food.img} alt={food.title} className='photo'></img>
                    <div className="menu-info">
                        <div className="menu-title">
                            <h4>{food.title}</h4>
                            <h4 className="price">{food.price}</h4>
                        </div>
                        <div className="menu-text">
                            {food.desc}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Menu;