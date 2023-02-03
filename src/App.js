import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import data from "./data.json";

function App() {
  const [planet, setPlanet] = useState(data[0]);
  const [planetInfo, setPlanetInfo] = useState(planet.overview.content);
  const [planetImage, setPlanetImage] = useState(planet.images.planet);
  const [imageGeology, setImageGeology] = useState(false);
  const [activeButton, setActiveButton] = useState(true);
  return (
    <div className="app">
      <NavBar
        setPlanet={setPlanet}
        setPlanetInfo={setPlanetInfo}
        setPlanetImage={setPlanetImage}
        setImageGeology={setImageGeology}
        setActiveButton={setActiveButton}
      />
      <hr style={{ margin: "0" }} />
      <Home
        planet={planet}
        planetInfo={planetInfo}
        setPlanetInfo={setPlanetInfo}
        planetImage={planetImage}
        setPlanetImage={setPlanetImage}
        imageGeology={imageGeology}
        setImageGeology={setImageGeology}
        setActiveButton={setActiveButton}
        activeButton={activeButton}
      />
    </div>
  );
}

export default App;
