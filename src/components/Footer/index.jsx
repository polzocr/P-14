import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Footer() {
    return (
        <footer className="border-top ">
            <Container className='py-5'>
                <Row className='gy-4 align-items-center'>
                    <Col md={4} className='text-center text-md-start'>
                        <Navbar.Brand href="#root" className='text-dark text-uppercase fw-bold'>
                            <span className="bg-primary bg-gradient p-1 rounded-3 text-light">HR</span> net
                        </Navbar.Brand>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush" as="ul" >
                            <ListGroup.Item as='li' className='text-center'>
                                <Button variant="link" href='#' className='text-decoration-none text-dark'>Mentions Legales</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup horizontal as="ul" className='justify-content-center justify-content-md-end' >
                            <ListGroup.Item as='li' className='border-0 p-0'>
                                <Button variant="link" href='#' className='text-decoration-none' title='LinkdIn'><i className="fab fa-linkedin fa-2x"></i></Button>
                            </ListGroup.Item>
                            <ListGroup.Item as='li' className='border-0 p-0'>
                                <Button variant="link" href='#' className='text-decoration-none' title='Instagram'><i className="fab fa-instagram-square fa-2x"></i></Button>
                            </ListGroup.Item>
                            <ListGroup.Item as='li' className='border-0 p-0'>
                                <Button variant="link" href='#' className='text-decoration-none' title='Twitter'><i className="fab fa-twitter-square fa-2x"></i></Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}