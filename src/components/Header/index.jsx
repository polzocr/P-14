import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(){
    return (
        <header>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand >HRnet</Navbar.Brand>
                    <Nav className="mr-auto" variant="pills" defaultActiveKey="/">
                        <Nav.Item>
                            <NavLink to='/' className='nav-link'>Accueil</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to='/employee' className='nav-link'>Employés</NavLink>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}