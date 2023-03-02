import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from "../data.json";
import '../style/navbar.scss';


function NavBar({setPlanet,setPlanetInfo,setPlanetImage, setImageGeology,setActiveButton, hamburgerMenuClicked, setHamburgerMenuClicked}) {
  return (
    <Navbar collapseOnSelect expand="sm"  variant="dark">
      <Container>
        <Navbar.Brand href="#home">THE PLANETS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setHamburgerMenuClicked(!hamburgerMenuClicked)}/>
        <Navbar.Collapse id="responsive-navbar-nav" className={hamburgerMenuClicked && "open" }>
           <Nav>
            {data.map(planet => ( 
              <Nav.Link onClick={() => {
                setPlanet(planet)
                setPlanetInfo(planet.overview)
                setPlanetImage(planet.images.planet)
                setImageGeology(false)
                setActiveButton(true)
                setHamburgerMenuClicked(false)
                }} key={planet.name}>
                  <img src={planet.images.planet}></img>
                {planet.name}
              </Nav.Link>
            ))}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar; 