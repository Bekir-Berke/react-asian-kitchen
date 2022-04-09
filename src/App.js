import '../src/index.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import ButtonList from './components/ButtonList';
import Menu from './components/Menu';
function App(){
    return (
        <div className="container">
            <div className="menu">
                <Header/>
                <ButtonList/>
                <Routes>
                    <Route path='/'>
                        <Route path=':category' element={<Menu/>}/>
                        <Route path='' element={<Menu/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
