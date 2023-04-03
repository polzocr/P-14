import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand >HRnet</Navbar.Brand>
            <Nav className="mr-auto" variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Employees</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <nav>Logo titre et navigation link</nav>
          <div> banner ou pas ?</div>
          <h1>Create Employee</h1>
          <form>premiere partie du form a gauche en grand ecran</form>
          <form>deuxieme partie du form a droite en grand ecran</form>
          <form>Departement en bas + bouton save</form>
          <footer>ptit footer pour la route oklm</footer>
          <p>MODAL - DATEPICKER - DROPDOWN - REDUX (statemanagement, localstorage?) - ReaCT rOUTER ? </p>
          <Button>Cliquez moi</Button>
        </Container>
      </main>

      <footer class="border-top">
        <div class="container py-5">
          <div class="row gy-4 align-items-center">
            <div class="col-12 col-md-4">
              <a class="navbar-brand text-dark text-uppercase fw-bold" href="#">
                <span class="bg-primary bg-gradient p-1 rounded-3 text-light">HR</span> net
              </a>
            </div>
            <div class="col-12 col-md-4 text-md-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#" class="text-decoration-none text-dark">Mentions légales</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-4 text-md-end">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <a href="#" class="text-decoration-none text-dark" title="LinkedIn" >
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="text-decoration-none text-dark" title="Instagram">
                    <i class="fab fa-instagram-square fa-2x"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="text-decoration-none text-dark" title="Twitter">
                    <i class="fab fa-twitter-square fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
    </>
        
  );
}

export default App;
