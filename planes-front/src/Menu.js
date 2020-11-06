import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

const MenuComponent = () => {
    return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">ClavisteV</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#planes">Planes</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default MenuComponent