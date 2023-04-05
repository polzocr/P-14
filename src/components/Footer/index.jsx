export default function Footer() {
    return (
        <footer className="border-top ">
            <div className="container py-5">
                <div className="row gy-4 align-items-center">
                    <div className="col-12 col-md-4">
                        <a className="navbar-brand text-dark text-uppercase fw-bold" href="#">
                            <span className="bg-primary bg-gradient p-1 rounded-3 text-light">HR</span> net
                        </a>
                    </div>
                    <div className="col-12 col-md-4 text-md-center">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#" className="text-decoration-none text-dark">Mentions légales</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 text-md-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="#" className="text-decoration-none" title="LinkedIn" >
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-decoration-none" title="Instagram">
                                    <i className="fab fa-instagram-square fa-2x"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-decoration-none" title="Twitter">
                                    <i className="fab fa-twitter-square fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}