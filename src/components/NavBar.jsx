import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from "../data.json";
import '../style/navbar.scss'


function NavBar({setPlanet,setPlanetInfo,setPlanetImage, setImageGeology,setActiveButton}) {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand href="#home">THE PLANETS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
           <Nav>
            {data.map(planet => ( 
              <Nav.Link onClick={() => {
                setPlanet(planet)
                setPlanetInfo(planet.overview)
                setPlanetImage(planet.images.planet)
                setImageGeology(false)
                setActiveButton(true)
                }} key={planet.name}>
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