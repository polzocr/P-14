import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { saving } from '../../features/employees';
import {useDispatch} from 'react-redux'

export default function Formulaire(){

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birth_date: '',
        starter_date: '',
        adress: '',
        city: '',
        state: 'Alabama',
        zip_code: '',
        department: 'Sales'
    })

    const dispatch = useDispatch()


    function handleChange(e){
        setFormData((prevState) => {
            const input = e.target
            return {
                ...prevState,
                [input.name]: input.value
            }
        })
    }

    
    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        dispatch(saving(formData))

    }

    return (
        <section id='formulaire'>
            <Form className='mt-4' onSubmit={handleSubmit}>
                <Row>
                    <Col md='6'>
                        <Form.Group className="mb-3" controlId="prenom">
                            <Form.Control type="text" placeholder="Prénom" onChange={handleChange} name='firstName'/>
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group className="mb-3" controlId="nom">
                            <Form.Control type="text" placeholder="Nom" onChange={handleChange} name='lastName' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <Form.Group className="mb-3" controlId="date_de_naissance">
                            <Form.Label>Date de naissance</Form.Label>
                            <Form.Control type="date" onChange={handleChange} name='birth_date' />
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group className="mb-3" controlId="date_de_debut">
                            <Form.Label>Date d'entrée</Form.Label>
                            <Form.Control type="date" onChange={handleChange} name='starter_date' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <Form.Group className="mb-3" controlId="adresse" >
                            <Form.Control type="text" placeholder="Adresse" onChange={handleChange} name='adress' />
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group className="mb-3" controlId="ville" >
                            <Form.Control type="text" placeholder="Ville" onChange={handleChange} name='city' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <Form.Select aria-label="Choisir Etat" className="mb-3" onChange={handleChange} name='state'>
                            <option>Alabama</option>
                            <option value="1">Un</option>
                            <option value="2">Deux</option>
                            <option value="3">Trois</option>
                        </Form.Select>
                    </Col>
                    <Col md='6'>
                        <Form.Group className="mb-3" controlId="code_postal" >
                            <Form.Control type="number" placeholder="Code Postal" onChange={handleChange} name='zip_code' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Select aria-label="Choisir Etat" onChange={handleChange} name='department'>
                            <option>Département</option>
                            <option value="1">Un</option>
                            <option value="2">Deux</option>
                            <option value="3">Trois</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Container className='d-flex justify-content-center mt-4'>
                    <Button type="submit">
                        Sauvegarder
                    </Button>
                </Container>

            </Form>
        </section>
    )
}