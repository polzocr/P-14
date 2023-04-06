import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Footer() {
    return (
        <footer className="border-top ">
            <Container className='py-5'>
                <Row className='gy-4 align-items-center'>
                    <Col className="col-12 col-md-4">
                        <Navbar.Brand href="#root" className='text-dark text-uppercase fw-bold'>
                            <span className="bg-primary bg-gradient p-1 rounded-3 text-light">HR</span> net
                        </Navbar.Brand>
                    </Col>
                    <Col col-12 col-md-4 text-md-center>
                        <ListGroup variant="flush" as="ul" className='list-unstyled mb-0' >
                            <ListGroup.Item as='li'>
                                <Button variant="link" href='#' className='text-decoration-none text-dark'>Mentions Legales</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col className="col-12 col-md-4 text-md-end">
                        <ListGroup horizontal as="ul" className='d-flex' >
                            <ListGroup.Item as='li' className='border-0'>
                                <Button variant="link" href='#' className='text-decoration-none' title='LinkdIn'><i className="fab fa-linkedin fa-2x"></i></Button>
                            </ListGroup.Item>
                            <ListGroup.Item as='li' className='border-0'>
                                <Button variant="link" href='#' className='text-decoration-none' title='Instagram'><i className="fab fa-instagram-square fa-2x"></i></Button>
                            </ListGroup.Item>
                            <ListGroup.Item as='li' className='border-0'>
                                <Button variant="link" href='#' className='text-decoration-none' title='Twitter'><i className="fab fa-twitter-square fa-2x"></i></Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>



                {/* <div className="row gy-4 align-items-center">
                    
                    
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
                </div> */}
            </Container>
        </footer>
    )
}