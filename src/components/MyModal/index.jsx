/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import React from 'react'

export default function MyModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Création Employee
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					Employée créé avec succès !!!
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Fermer</Button>
			</Modal.Footer>
		</Modal>
	)
}
