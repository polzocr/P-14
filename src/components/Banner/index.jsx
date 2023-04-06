import logo from '../../assets/images/wealth_health.jpg'


export default function Banner(){
    return (
        <section id='banner'>
            <div className='text-center bg-dark'>
                <img src={logo} alt="logo" className=''/>
            </div>
        </section>
    )
}