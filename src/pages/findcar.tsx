import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./carpage.css";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import 'swiper/swiper-bundle.min.css';
const Findcar = () => {
    const [swiperInstance, setSwiperInstance]: any = useState(null);
    const swiperRef = useRef(null);

    const handleClickRight = () => {
        if (swiperInstance !== null) {
            swiperInstance.slideNext();
        }
    };

    const handleSwiperInit = (swiper: any) => {
        setSwiperInstance(swiper);
    };
    return (
        <section>
            <div className="text-center rentflow-content mt-3 ms-5 pt-5">
                <h2>Find by Car Type</h2>
                <h5>choose your style!</h5>
            </div>

            <div className="wrapper p-5">

                <FontAwesomeIcon
                    id="left"
                    icon={faCaretLeft}
                    onClick={() => swiperInstance.slidePrev()}
                />
                <div className="carousel">

                    <Swiper
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerView={4.9}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={handleSwiperInit}
                        className='mt-3'
                    >
                        <SwiperSlide>
                            <div className="image-container">
                                <img src="../assets/sedan.jpeg" alt="car image" />
                                <div className="overlay">
                                    <div className="car-name">Sedan</div>
                                </div>
                            </div>
                            {/* <div className="image-container">
                                <img src="../assets/sedan.jpeg" alt="car image" draggable="false" />
                                <div className="img-overlay"></div>
                                <p>Sedan</p>
                            </div> */}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-container">
                                <img src="../assets/bugatti.jpeg" alt="car image" />
                                <div className="overlay">
                                    <div className="car-name">Bugatti</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-container">
                                <img src="../assets/suv.jpeg" alt="car image" />
                                <div className="overlay">
                                    <div className="car-name">Suv</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-container">
                                <img src="../assets/minivan.jpeg" alt="car image" />
                                <div className="overlay">
                                    <div className="car-name">Minivan</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-container">
                                <img src="../assets/benz.jpeg" alt="car image" />
                                <div className="overlay">
                                    <div className="car-name">Benz</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-container">
                                <img src="../assets/bmw.jpg" alt="car image" />
                                <div className="overlay">
                                    <div className="car-name">Bmw</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-container">
                                <img src="../assets/audi.jpg" alt="car image" />
                                <div className="overlay">
                                    <div className="car-name">Audi</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <FontAwesomeIcon
                    id="right"
                    icon={faCaretRight}
                    onClick={handleClickRight}
                />

            </div>
        </section>
    );
};

export { Findcar };