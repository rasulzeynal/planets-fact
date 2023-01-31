import './App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home'

function App() {
  return (
    <div className="app">
     <NavBar/>
     <hr style={{margin:"0"}}/>
     <Home/>
    </div>
  );
}

export default App;
