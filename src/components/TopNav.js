import { Navbar, NavbarBrand } from 'react-bootstrap';

function TopNav() {
  return (
    <div className="TopNav">
      <Navbar bg="dark" variant="dark">
        <NavbarBrand>Woodsman Services</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default TopNav;