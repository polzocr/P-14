import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand >HRnet</Navbar.Brand>
            <Nav className="mr-auto" variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Accueil</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Employés</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className='py-4'>
          <h1 className='text-center'>Creation d'un employé</h1>
          <Form className='mt-4'>
            <Row>
              <Col md='6'>
                <Form.Group className="mb-3" controlId="prenom">
                  {/* <Form.Label>Prénom</Form.Label> */}
                  <Form.Control type="text" placeholder="Prénom" />
                </Form.Group>
              </Col>
              <Col md='6'>
                <Form.Group className="mb-3" controlId="nom">
                  {/* <Form.Label>Nom</Form.Label> */}
                  <Form.Control type="text" placeholder="Nom" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md='6'>
                <Form.Group className="mb-3" controlId="date_de_naissance">
                  {/* <Form.Label>Date de naissance</Form.Label> */}
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md='6'>
                <Form.Group className="mb-3" controlId="date_de_debut">
                  {/* <Form.Label>Date de début</Form.Label> */}
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md='6'>
                <Form.Group className="mb-3" controlId="adresse" > 
                  {/* <Form.Label>Adresse</Form.Label> */}
                  <Form.Control type="text" placeholder="Adresse" />
                </Form.Group>
              </Col>
              <Col md='6'>
                <Form.Group className="mb-3" controlId="ville" >
                  {/* <Form.Label>Ville</Form.Label> */}
                  <Form.Control type="text" placeholder="Ville" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md='6'>
                <Form.Select aria-label="Choisir Etat">
                  <option>Alabama</option>
                  <option value="1">Un</option>
                  <option value="2">Deux</option>
                  <option value="3">Trois</option>
                </Form.Select>
              </Col>
              <Col md='6'>
                <Form.Group className="mb-3" controlId="code_postal" >
                  {/* <Form.Label>Ville</Form.Label> */}
                  <Form.Control type="number" placeholder="Code Postal" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select aria-label="Choisir Etat">
                  <option>Département</option>
                  <option value="1">Un</option>
                  <option value="2">Deux</option>
                  <option value="3">Trois</option>
                </Form.Select>
              </Col>
              </Row>
            
            <Container className='d-flex justify-content-center mt-4'>
              <Button className='' type="submit">
                Sauvegarder
              </Button>
            </Container>
            
          </Form>
          {/* <nav>Logo titre et navigation link</nav>
          <div> banner ou pas ?</div>
          <h1>Create Employee</h1>
          <form>premiere partie du form a gauche en grand ecran</form>
          <form>deuxieme partie du form a droite en grand ecran</form>
          <form>Departement en bas + bouton save</form>
          <footer>ptit footer pour la route oklm</footer>
          <p>MODAL - DATEPICKER - DROPDOWN - REDUX (statemanagement, localstorage?) - ReaCT rOUTER ? </p>
          <Button>Cliquez moi</Button> */}
        </Container>
      </main>

      <footer className="border-top ">
        <div className="container py-5">
          <div className="row gy-4 align-items-center">
            <div className="col-12 col-md-4">
              <a className="navbar-brand text-dark text-uppercase fw-bold" href="#">
                <span className="bg-primary bg-gradient p-1 rounded-3 text-light">HR</span> net
              </a>
            </div>
            <div className="col-12 col-md-4 text-md-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-decoration-none text-dark">Mentions légales</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none" title="LinkedIn" >
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none" title="Instagram">
                    <i className="fab fa-instagram-square fa-2x"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none" title="Twitter">
                    <i className="fab fa-twitter-square fa-2x"></i>
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
