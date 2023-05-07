import "./carpage.css";

const Special = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-5 col-12 special-offers-content">
                    <h2 className="ms-5 ps-5">Wanna Get More<br />Special Offers?</h2>
                    <p className="ms-5 ps-5 mt-4">Be the first who will get all information about our <br />product in
                        email by
                        subscribe our mailing
                        list</p>
                    <div className="special-offers-content ms-5 ps-5 mt-3">
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="col-lg-7 col-12 mt-5 pt-5 text-center">
                    <div className="Special-blue-background">
                        <div>
                            <img className="mail-image mt-4" src="../assets/icon/Group 1179.png" alt="img" />
                        </div>
                        <div className="special-input-box mt-4 pb-3">
                            <input type="text" placeholder="enteryour@gmail.com" />
                            <button className="ms-2">Subscribe Me</button>
                        </div>
                    </div>
                    <div>
                        <img className="special-offer-image" src="../assets/image 41.png" alt="Img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Special };