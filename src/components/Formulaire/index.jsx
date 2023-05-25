import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { saving } from '../../features/employees';
import {useDispatch} from 'react-redux'
import MyModal from '../MyModal';
// import Selection from "@polzocr/react-selectator"
import {departments} from '../../data/departments'
import {states} from '../../data/states';
import { saveStorageEmployee } from '../../services/storage'

export default function Formulaire(){

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birth_date: '',
        starter_date: '',
        adress: '',
        city: '',
        state: '',
        zip_code: '',
        department: ''
    })

    const [validated, setValidated] = useState(false);
    const [modalShow, setModalShow] = useState(false);
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
        const form = e.currentTarget
        if (form.checkValidity() === true) {
            dispatch(saving(formData))
            setModalShow(true)
            saveStorageEmployee(formData)
        } 
        setValidated(true)
        // console.log(formData)
    }

    return (
        <section id='formulaire'>
            <Form className='mt-4' noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Col md='6'>
                        <Form.Group className="mb-3" controlId="prenom">
                            <Form.Control type="text" placeholder="Prénom*" onChange={handleChange} name='firstName' required/>
                            <Form.Control.Feedback type="invalid">
                                Choisissez un Prénom.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group className="mb-3" controlId="nom">
                            <Form.Control type="text" placeholder="Nom*" onChange={handleChange} name='lastName' required />
                            <Form.Control.Feedback type="invalid">
                                Choisissez un Nom.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <Form.Group className="mb-3" controlId="date_de_naissance">
                            <Form.Label>Date de naissance*</Form.Label>
                            <Form.Control type="date" onChange={handleChange} name='birth_date' required />
                            <Form.Control.Feedback type="invalid">
                                Choisissez une date de naissance.
                            </Form.Control.Feedback>
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
                        <Form.Group className="mb-3" controlId="department" >
                            {/* <Selection elements={states} title='Etats' name='state' onChange={handleChange} /> */}
                        </Form.Group>
                    </Col>
                    <Col md='6'>
                        <Form.Group className="mb-3" controlId="code_postal" >
                            <Form.Control type="number" placeholder="Code Postal" onChange={handleChange} name='zip_code' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="state" >
                            {/* <Selection elements={departments} title='Département' name='department' onChange={handleChange} /> */}
                        </Form.Group>
                    </Col>
                </Row>

                <Container className='d-flex justify-content-center mt-4'>
                    <Button type="submit">
                        Sauvegarder
                    </Button>
                </Container>
            </Form>
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </section>
    )
}