import Container from 'react-bootstrap/Container'
import React from 'react'
import Formulaire from '../../components/Formulaire'
import Banner from '../../components/Banner'

export default function Home() {
	return (
		<main>
			<Banner />
			<Container className="py-4">
				<h1 className="text-center mt-4">Creation d&apos;un employé</h1>
				<Formulaire />
			</Container>
		</main>
	)
}
