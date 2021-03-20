import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function TopNav() {
  return (
    <div className="TopNav">
      <Navbar bg="dark" variant="dark">
        <LinkContainer exact to="/">
          <Navbar.Brand>Woodsman Services</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="top-navbar" />
        <Navbar.Collapse id="top-navbar">
          <Nav className="mr-auto">
            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;