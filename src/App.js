import { useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import data from "./data.json"

function App() {
  const [planet,setPlanet] = useState(data[0]);
  return (
    <div className="app">
     <NavBar setPlanet={setPlanet}/>
     <hr style={{margin:"0"}}/>
     <Home planet={planet}/>
    </div>
  );
}

export default App;
