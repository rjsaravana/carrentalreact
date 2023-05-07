import "./carpage.css";

const Testimonials = () => {
    return (
        <section>
            <div className="mt-5 pt-5">
                <div className="text-center rentflow-content mt-5 ms-5">
                    <h2>Testimonials</h2>
                    <h5>What our lovely customer said about their rent experience</h5>
                </div>
            </div>
            <div className="row mt-5 pt-5">
                <div className="col-lg-1 testmonials-content-flex text-left mt-5 pt-5">
                    <img className="mt-5" src="../assets/icon/Mask Group.png" alt="car img" />
                </div>
                <div className="col-lg-1 testmonials-content-flex text-center mt-5 pt-4">
                    <img className="mt-5" src="../assets/icon/Group 1166.png" alt="car img" />
                </div>
                <div className="col-lg-8 testmonials-content-align p-5">
                    <div>
                        <img className="testmonials-image" src="../assets/icon/Group 1160.png" alt="car img" />
                    </div>
                    <div className="ms-5 testmonials-content">
                        <h4>Stevan Alexander</h4>
                        <h5 className="mt-3">Social Media Influencer</h5>
                        <p className="mt-3">“First time using Carent, I have found the experience to be incredibly
                            easy,
                            the
                            rental rates are
                            very reasonable and when I did call in to their customer service the agent was very
                            knowledgeable, helpful and a joy to speak with.
                            I will definitely be using Carent in my future car rentals. Thanks Carent.”</p>
                    </div>
                </div>
                <div className="col-lg-1 testmonials-content-flex text-center mt-5 pt-4">
                    <img className="mt-5" src="../assets/icon/Group 1167.png" alt="car img" />
                </div>
                <div className="col-lg-1 testmonials-content-flex mt-5 pt-5">
                    <img className="mt-5 float-end" src="../assets/icon/Mask Group (1).png" alt="car img" />
                </div>
            </div>
            <div className="mt-5 d-flex justify-content-center">
                <div className="arrow-icon-left">
                    <i className="fa-solid fa-caret-left" />
                </div>
                <div className="ms-5 arrow-icon-right">
                    <i className="fa-solid fa-caret-right" />
                </div>
            </div>
        </section>
    );
};

export { Testimonials };