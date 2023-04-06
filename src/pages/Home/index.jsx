import Container from 'react-bootstrap/Container';
import Formulaire from '../../components/Formulaire';
import Banner from '../../components/Banner';

export default function Home(){
    return (
        <main>
                <Banner />
            <Container className='py-4'>
                <h1 className='text-center mt-5'>Creation d'un employé</h1>
                <Formulaire />
                {/* <nav>Logo titre et navigation link</nav>
          <div> banner ou pas ?</div>
          <h1>Create Employee</h1>
          <form>premiere partie du form a gauche en grand ecran</form>
          <form>deuxieme partie du form a droite en grand ecran</form>
          <form>Departement en bas + bouton save</form>
          <footer>ptit footer pour la route oklm</footer>
          <p>MODAL - DATEPICKER - DROPDOWN - REDUX (statemanagement, localstorage?) - ReaCT rOUTER ? </p>
          <Button>Cliquez moi</Button> */}
            </Container>
        </main>
    )
}