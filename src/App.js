
import Table from './components/Table.jsx';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About.jsx';
import Details from './components/Details';
import Create from './components/Create';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    

    return (
        <div className="App">
            <BrowserRouter>
            <Nav />
                <Routes>
                  
                        <Route path="/" exact element={<Home/>} />
                        <Route path="/People" element={<Table/>} />
                        <Route path="/Details/:id" element={<Details/>} />
                        <Route path="/About" element={<About/>} />
                        <Route path="/Create" element={<Create/>} />  
                     
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
