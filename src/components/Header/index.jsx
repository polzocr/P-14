import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Header() {
	return (
		<header>
			<Navbar expanded="true" variant="dark" bg="dark">
				<Container>
					<Navbar.Brand>HRnet</Navbar.Brand>
					<Nav variant="pills" defaultActiveKey="/">
						<Nav.Item>
							<NavLink to="/" className="nav-link">Accueil</NavLink>
						</Nav.Item>
						<Nav.Item>
							<NavLink to="/employee" className="nav-link">Employés</NavLink>
						</Nav.Item>
					</Nav>
				</Container>
			</Navbar>
		</header>
	)
}
