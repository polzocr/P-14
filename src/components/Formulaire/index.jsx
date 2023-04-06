import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function Formulaire(){
    return (
        <section id='formulaire'>
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
        </section>
    )
}