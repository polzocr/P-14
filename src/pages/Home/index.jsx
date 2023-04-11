import Container from 'react-bootstrap/Container';
import Formulaire from '../../components/Formulaire';
import Banner from '../../components/Banner';

export default function Home(){
    return (
        <main>
            <Banner />
            <Container className='py-4'>
                <h1 className='text-center mt-4'>Creation d'un employé</h1>
                <Formulaire />
            </Container>
        </main>
    )
}