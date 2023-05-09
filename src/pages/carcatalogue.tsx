import { Swiper, SwiperSlide } from 'swiper/react';
import "./carpage.css";

const Carcatalogue = () => {
    return (

        <div id="carCatalogue">
            <div className="text-center rentflow-content mt-5 ms-5 pt-5">
                <h2>Car Catalogue</h2>
                <h5>Explore out cars you might like!</h5>
            </div>
            <div className="col-12 mt-5">
                <div className="text-center car-catalogue-button">
                    <button className="all-car-button">All Cars</button>
                    <button className="ms-4">Best Deals</button>
                    <button className="ms-4 top-rate-btn">Top Rated</button>
                    <button className="ms-4 all-car-btn">Latest Car Year</button>
                </div>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={4.8}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='mt-5'
            >
                <SwiperSlide>
                    <div className="card card-1 card-background">
                        <div className="text-start mt-4 ms-3 car-name-text">
                            <h4>Mercedes Benz</h4>
                        </div>
                        <div className="text-start mt-3 ms-3 car-price">
                            <h5><span className="doller-text">$</span>58<span className="day-text">/day</span>
                            </h5>
                        </div>
                        <div className="car-card-image ms-2 text-center">
                            <img src="../assets/slide cars/cer 2.png" alt="car img" />
                        </div>
                        <div className="car-logos mt-3">
                            <div className="car-steering-icon p-3">
                                <img src="../assets/icon/Vector steering.png" alt="img" />
                                <h5>Manual</h5>
                            </div>
                            <div className="car-seat-icon p-3">
                                <img src="../assets/icon/Vector5.png" alt="img" />
                                <h5>4 Seats</h5>
                            </div>
                            <div className="car-pet-icon p-3">
                                <i className="fa-sharp fa-solid fa-gas-pump" />
                                <h5>28 MPG</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card card-1 card-background">
                        <div className="text-start mt-4 ms-3 car-name-text">
                            <h4>Toyota New Yaris</h4>
                        </div>
                        <div className="text-start mt-3 ms-3 car-price">
                            <h5><span className="doller-text">$</span>60<span className="day-text">/day</span>
                            </h5>
                        </div>
                        <div className="car-card-image mt-2 ms-4">
                            <img src="../assets/slide cars/browncar.png" alt="car img" />
                        </div>
                        <div className="car-logos mt-2">
                            <div className="car-steering-icon p-3">
                                <img src="../assets/icon/Vector steering.png" alt="img" />
                                <h5>Manual</h5>
                            </div>
                            <div className="car-seat-icon p-3">
                                <img src="../assets/icon/Vector5.png" alt="img" />
                                <h5>5 Seats</h5>
                            </div>
                            <div className="car-pet-icon p-3">
                                <i className="fa-sharp fa-solid fa-gas-pump" />
                                <h5>34 MPG</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card card-1 card-background">
                        <div className="text-start mt-4 ms-3 car-name-text">
                            <h4>Pajero Sport</h4>
                        </div>
                        <div className="text-start mt-3 ms-3 car-price">
                            <h5><span className="doller-text">$</span>88<span className="day-text">/day</span>
                            </h5>
                        </div>
                        <div className="car-card-image text-center ms-4">
                            <img src="../assets/slide cars/new-suvs-and-crossovers-2018-2017-nissan-usa-suv-png-black-and-white-870_489 1.png" alt="car img" width="100%" height="100%" />
                        </div>
                        <div className="car-logos mt-3 ms-2">
                            <div className="car-steering-icon p-3">
                                <img src="../assets/icon/Vector steering.png" alt="img" />
                                <h5>Manual</h5>
                            </div>
                            <div className="car-seat-icon p-3">
                                <img src="../assets/icon/Vector5.png" alt="img" />
                                <h5>8 Seats</h5>
                            </div>
                            <div className="car-pet-icon p-3">
                                <i className="fa-sharp fa-solid fa-gas-pump" />
                                <h5>42 MPG</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card card-1 card-background p-2">
                        <div className="text-start mt-4 ms-3 car-name-text">
                            <h4>Honda Jazz RS</h4>
                        </div>
                        <div className="text-start mt-3 ms-3 car-price">
                            <h5><span className="doller-text">$</span>52<span className="day-text">/day</span>
                            </h5>
                        </div>
                        <div className="car-card-image ms-4">
                            <img src="../assets/slide cars/Car 1.png" alt="car img" />
                        </div>
                        <div className="car-logos">
                            <div className="car-steering-icon p-3">
                                <img src="../assets/icon/Vector steering.png" alt="img" />
                                <h5>Auto</h5>
                            </div>
                            <div className="car-seat-icon p-3">
                                <img src="../assets/icon/Vector5.png" alt="img" />
                                <h5>4 Seats</h5>
                            </div>
                            <div className="car-pet-icon p-3">
                                <i className="fa-sharp fa-solid fa-gas-pump" />
                                <h5>28 MPG</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card card-1 card-background pe-2">
                        <div className="text-start mt-4 ms-3 car-name-text">
                            <h4>Mazda CX-3</h4>
                        </div>
                        <div className="text-start mt-3 ms-3 car-price">
                            <h5><span className="doller-text">$</span>58<span className="day-text">/day</span>
                            </h5>
                        </div>
                        <div className="car-card-image mt-2 ms-2">
                            <img src="../assets/slide cars/blackhonda.png" alt="car img" />
                        </div>
                        <div className="car-logos mt-2 ms-3">
                            <div className="car-steering-icon p-3">
                                <img src="../assets/icon/Vector steering.png" alt="img" />
                                <h5>Auto</h5>
                            </div>
                            <div className="car-seat-icon p-3">
                                <img src="../assets/icon/Vector5.png" alt="img" />
                                <h5>3 Seats</h5>
                            </div>
                            <div className="car-pet-icon p-3">
                                <i className="fa-sharp fa-solid fa-gas-pump" />
                                <h5>24 MPG</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card card-1 card-background pe-2">
                        <div className="text-start mt-4 ms-3 car-name-text">
                            <h4>Aston Martin V12</h4>
                        </div>
                        <div className="text-start mt-3 ms-3 car-price">
                            <h5><span className="doller-text">$</span>60<span className="day-text">/day</span>
                            </h5>
                        </div>
                        <div className="car-card-image mt-2 ms-3">
                            <img src="../assets/slide cars/PNGPIX-COM-Grey-Aston-Martin-V12-Vantage-Luxury-Car-PNG-Image 3.png" alt="car img" />
                        </div>
                        <div className="car-logos mt-2 ms-3">
                            <div className="car-steering-icon p-3">
                                <img src="../assets/icon/Vector steering.png" alt="img" />
                                <h5>Auto</h5>
                            </div>
                            <div className="car-seat-icon p-3">
                                <img src="../assets/icon/Vector5.png" alt="img" />
                                <h5>2 Seats</h5>
                            </div>
                            <div className="car-pet-icon p-3">
                                <i className="fa-sharp fa-solid fa-gas-pump" />
                                <h5>24 MPG</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card card-1 card-background pe-2">
                        <div className="text-start mt-4 ms-3 car-name-text">
                            <h4>Renault Megane RS</h4>
                        </div>
                        <div className="text-start mt-3 ms-3 car-price">
                            <h5><span className="doller-text">$</span>65<span className="day-text">/day</span>
                            </h5>
                        </div>
                        <div className="car-card-image mt-2 ms-3">
                            <img src="../assets/slide cars/PNGPIX-COM-Renault-Megane-RS-Trophy-White-Car-PNG-Image 2.png" alt="car img" />
                        </div>
                        <div className="car-logos mt-2 ms-3">
                            <div className="car-steering-icon p-3">
                                <img src="../assets/icon/Vector steering.png" alt="img" />
                                <h5>Auto</h5>
                            </div>
                            <div className="car-seat-icon p-3">
                                <img src="../assets/icon/Vector5.png" alt="img" />
                                <h5>5 Seats</h5>
                            </div>
                            <div className="car-pet-icon p-3">
                                <i className="fa-sharp fa-solid fa-gas-pump" />
                                <h5>34 MPG</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card card-1 card-background pe-2">
                        <div className="text-start mt-4 ms-3 car-name-text">
                            <h4>BMW X5</h4>
                        </div>
                        <div className="text-start mt-3 ms-3 car-price">
                            <h5><span className="doller-text">$</span>56<span className="day-text">/day</span>
                            </h5>
                        </div>
                        <div className="car-card-image mt-2 ms-4">
                            <img src="../assets/slide cars/Infiniti-SUV-Background-PNG 3.png" alt="car img" width="100%" height="100%" />
                        </div>
                        <div className="car-logos mt-2 ms-2">
                            <div className="car-steering-icon p-3">
                                <img src="../assets/icon/Vector steering.png" alt="img" />
                                <h5>Manual</h5>
                            </div>
                            <div className="car-seat-icon p-3">
                                <img src="../assets/icon/Vector5.png" alt="img" />
                                <h5>9 Seats</h5>
                            </div>
                            <div className="car-pet-icon p-3">
                                <i className="fa-sharp fa-solid fa-gas-pump" />
                                <h5>42 MPG</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card card-1 card-background pe-2">
                        <div className="text-start mt-4 ms-3 car-name-text">
                            <h4>Honda Civic</h4>
                        </div>
                        <div className="text-start mt-3 ms-3 car-price">
                            <h5><span className="doller-text">$</span>52<span className="day-text">/day</span>
                            </h5>
                        </div>
                        <div className="car-card-image mt-2 ms-3">
                            <img src="../assets/slide cars/redcar 3.png" alt="car img" />
                        </div>
                        <div className="car-logos mt-2 ms-3">
                            <div className="car-steering-icon p-3">
                                <img src="../assets/icon/Vector steering.png" alt="img" />
                                <h5>Auto</h5>
                            </div>
                            <div className="car-seat-icon p-3">
                                <img src="../assets/icon/Vector5.png" alt="img" />
                                <h5>5 Seats</h5>
                            </div>
                            <div className="car-pet-icon p-3">
                                <i className="fa-sharp fa-solid fa-gas-pump" />
                                <h5>28 MPG</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card card-1 card-background pe-2">
                        <div className="text-start mt-4 ms-3 car-name-text">
                            <h4>Toyota New Yaris</h4>
                        </div>
                        <div className="text-start mt-3 ms-3 car-price">
                            <h5><span className="doller-text">$</span>63<span className="day-text">/day</span>
                            </h5>
                        </div>
                        <div className="car-card-image mt-2 ms-4">
                            <img src="../assets/slide cars/swiftsportsidev2 2.png" alt="car img" width="100%" height="100%" />
                        </div>
                        <div className="car-logos mt-2 ms-2">
                            <div className="car-steering-icon p-3">
                                <img src="../assets/icon/Vector steering.png" alt="img" />
                                <h5>Manual</h5>
                            </div>
                            <div className="car-seat-icon p-3">
                                <img src="../assets/icon/Vector5.png" alt="img" />
                                <h5>8 Seats</h5>
                            </div>
                            <div className="car-pet-icon p-3">
                                <i className="fa-sharp fa-solid fa-gas-pump" />
                                <h5>34 MPG</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </div >

    );
};

export { Carcatalogue };