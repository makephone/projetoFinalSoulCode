import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const estilo = { color: "#e0f7fa", fontSize: "2rem", fontWeight: "bolder" };
  const estilo1 = { color: "#e0f7fa" };
  const fixo = {
    position: "fixed",
    width: "100vw",
    display: "absolute",
    zIndex: "1!important",
    top: 0
  };
  return (
    <div>
      <Navbar style={fixo} expand="lg" bg="primary">
        <Container style={estilo1}>
          <Navbar.Brand href="#" style={estilo}>
            Education <FontAwesomeIcon icon={faCog} size={"xs"} spin />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#saibaMais" style={estilo1}>
                Saiba Mais
              </Nav.Link>
              <Nav.Link href="#inscrição" style={estilo1}>
                Inscrição
              </Nav.Link>
              <Nav.Link
                href="#"
                onClick={() => window.open("https://discord.gg/NjByxNR9uk")}
                style={estilo1}
              >
                Nosso Discord
              </Nav.Link>
              <NavDropdown title="Cursos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#frontend">Frontend</NavDropdown.Item>
                <NavDropdown.Item href="#backend">Backend</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#fullStack">
                  Full Stack
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
