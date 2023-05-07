import "./carpage.css";

const Expertservices = () => {
    return (
        <section>
            <div className="mt-2 pt-5">
                <div className="text-center rentflow-content mt-5 ms-5">
                    <h2>Expert Services</h2>
                    <h5>Get the best experience with our best services</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <img className="white-car2" src="../assets/Whitecar2.png" alt="car img" />
                    <img className="blue2" src="../assets/blue2.png" alt="car img" />
                </div>
                <div className="col-lg-6 col-12 mt-5 pt-3">
                    <div className="d-flex Special-offers-content mt-5  ">
                        <div className="fa-icon2 mt-2">
                            <img className="expert-icon" src="../assets/icon/bx_bxs-discount.png" alt="car img" />
                        </div>
                        <div className="expert-service-content ms-4">
                            <h4>Special Offers</h4>
                            <p className="mt-3">We provide much of discount and promos for great budget experience
                            </p>
                        </div>
                    </div>
                    <div className="d-flex ms-5 mt-4">
                        <div className="fa-icon2 mt-2">
                            <img src="../assets/icon/Vector (2).png" alt="car img" />
                        </div>
                        <div className="expert-service-content ms-4">
                            <h4>Best Price</h4>
                            <p className="mt-3">Great and fixed price is suitable for you who looking for according
                                to
                                budget
                            </p>
                        </div>
                    </div>
                    <div className="d-flex ms-5 mt-4">
                        <div className="fa-icon2 mt-2">
                            <img src="../assets/icon/Vector.png" alt="car img" />
                        </div>
                        <div className="expert-service-content ms-4">
                            <h4>24/7 Crews</h4>
                            <p className="mt-3">We are ready 24 hours for you to feel the great services experience
                            </p>
                        </div>
                    </div>
                    <div className="d-flex ms-5 mt-4">
                        <div className="fa-icon2 mt-2">
                            <img src="../assets/icon/Vector (1).png" alt="car img" />
                        </div>
                        <div className="expert-service-content ms-4">
                            <h4>Experienced Drivers</h4>
                            <p className="mt-3">We also provide the drivers who have so much experiences in a long
                                trip
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Expertservices };