import "./carpage.css";

const Navbar = () => {
    return (
        <div className="nav-title">
            <nav className="navbar-expand-lg" id="navbar">
                <h4 className="logo">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg></button>CARENT
                </h4>
                <div className="collapse navbar-collapse justify-content-center" id="menu">
                    <ul className="navbar-nav mb-lg-0">
                        <li className="nav-item"><a href="#home">Home</a></li>
                        <li className="nav-item"><a href="#carCatalogue">Car Catalogue</a></li>
                        <li className="nav-item"><a href="#contactUs">Contact Us</a></li>
                        <li className="nav-item"><a href="#help">Help</a></li>
                    </ul>
                </div>
                <button className="register-btn">Register</button>
            </nav>
        </div>
    );
};

export { Navbar };