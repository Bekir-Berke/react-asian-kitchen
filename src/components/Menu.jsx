import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../index.css';
const Menu = () => {
    const[menu, setMenu] = useState([]); 
    let foodParam = useParams();
    useEffect(() => {
        if(foodParam.category){
            fetch(`http://localhost:3000/foods?category=${foodParam.category}`)
            .then(res => res.json())
            .then(data => setMenu(data))
        }else{
            fetch('http://localhost:3000/foods')
            .then(res => res.json())
            .then(data => setMenu(data))
        }
    }, [foodParam.category])
    
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