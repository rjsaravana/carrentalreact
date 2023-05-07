import "./carpage.css";


const Rentflow = () => {
    return (
        <section className="ms-5 ps-5 rent-flow-svg">
            <div className="text-center rentflow-content mt-5 pt-5">
                <h2>Rent Flow</h2>
                <h5>Follow steps below to rent.</h5>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="card-content p-5 mt-2 text-center">
                        <div className="fa-icon ">
                            <i className="fa-solid icon-color  fa-location-dot" />
                        </div>
                        <h4 className="mt-4">Choose a Location</h4>
                        <p className="mt-3">Find out cars at the location you choose</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="card-content mt-5 p-5 text-center">
                        <div className="fa-icon mt-5">
                            <i className="fa-solid icon-color fa-calendar" />
                        </div>
                        <h4 className="mt-4">Pick Dates</h4>
                        <p className="mt-3">Pick the departure and return date</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="card-content p-5 mt-5 text-center">
                        <div className="fa-icon">
                            <i className="fa-solid icon-color fa-magnifying-glass" />
                        </div>
                        <h4 className="mt-4">Find Out Car</h4>
                        <p className="mt-3">Looking for car suits with your style &amp; needs</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="card-content p-5 mt-5 text-center">
                        <div className="fa-icon mt-3">
                            <i className="fa-solid icon-color fa-money-check-dollar" />
                        </div>
                        <h4 className="mt-4">Payment</h4>
                        <p className="mt-3">Finish payment to fix the rental car booking</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Rentflow };