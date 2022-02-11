import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import ButtonList from './ButtonList';
import Menu from './Menu';
import { useState, useEffect } from 'react';
const Section = () => {
    const[menu, setMenu] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8000/foods')
      .then(res => res.json())
      .then(data => {
          setMenu(data)
      })
    
    }, [])
    return ( 
        <section className="menu">
            <Header/>
            <ButtonList/>
            <Menu menu={menu}/>
        </section>
    );
};
 
export default Section;