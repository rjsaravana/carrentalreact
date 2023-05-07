import "./carpage.css";

const Menu = () => {
    return (

        <section id="contactUs" className="ms-5 ps-4">
            <div className="row mt-5 pt-5">
                <div className="col-lg-3 col-md-12 mt-md-4 carent-text">
                    <h4 className="logo">CARENT</h4>
                    <p>Carent 2020. <br />All Right Reserved ©</p>
                </div>
                <div className="col-lg-2 col-md-4 mt-md-4 menu-text">
                    <h4>Menu</h4>
                    <h5>Home</h5>
                    <h5>Car Catalogue</h5>
                    <h5>Services</h5>
                </div>
                <div className="col-lg-2 col-md-4 mt-md-4 menu-text">
                    <h4>Company</h4>
                    <h5>About us</h5>
                    <h5>Careers</h5>
                    <h5>Contact us</h5>
                </div>
                <div className="col-lg-2 col-md-4 mt-md-4 menu-text">
                    <h4>Further Information</h4>
                    <h5>Term &amp; Conditions</h5>
                    <h5>Privacy Policy</h5>
                </div>
                <div className="col-lg-3 col-md-12 mt-md-4 mb-3 menu-text1">
                    <div className="menu-text">
                        <h4 className="mb-3 ms-4">Contact us</h4>
                    </div>
                    <div className="d-flex menu-text1 ms-4">
                        <div className="contact-social-icon">
                            <i className="fa-brands fa-facebook-f" />
                        </div>
                        <div className="contact-social-icon ms-4">
                            <i className="fa-brands fa-twitter" />
                        </div>
                        <div className="contact-social-icon ms-4">
                            <i className="fa-brands fa-instagram" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Menu };