import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TODO
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            View
          </Nav.Link>
          <Nav.Link as={Link} to="/create">
            Create
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
