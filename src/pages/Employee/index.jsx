import Container from 'react-bootstrap/Container';
import Banner from '../../components/Banner';
import Table from '../../components/Table';

export default function Employee() {
    return (
        <main>
            <Banner />
            <Container className='py-4'>
                <h1 className='text-center mt-4'>Les Employés</h1>
                <Table />
            </Container>
        </main>
    )
}