import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/homengo">FoodForAll</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/homengo">Dashboard</Nav.Link>
            <Nav.Link href="restaurants">Restaurants</Nav.Link>
            <Nav.Link href="donors">Donors</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default NavBar;