import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
const NavBarPanel = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div className="navbar-container">
      <Navbar expand="lg" className="navbar-bg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            Redux Toolkit
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className="navbar-link">
                Products
              </Nav.Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Nav.Link as={Link} to="/cart" className="navbar-link">
                  My Bag{" "}
                  <span className="badge bg-secondary">
                    {cartProducts.length}
                  </span>
                </Nav.Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarPanel;
