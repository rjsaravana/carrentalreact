import "./carpage.css";


const Home:React.FC = () => {
    return (
        <div id="home">
            <div className="row ms-5 ps-5">
                <div className="col-lg-6 col-md-12 col-12 mt-5 pt-5 home-content">
                    <h4>Car Rental Specialist</h4>
                    <h1 className="mt-4">Rent the Best Car Around the <br />World</h1>
                    <p className="mt-4">We provide the best car options and expert services for the greatest customer
                        experience.</p>
                </div>
                <div className="col-lg-6 col-md-12 col-12 mt-5 home-content-image">
                    <img className="white-car" src="../assets/white-car.png" alt="Img" />
                    <img className="blue-background" src="../assets/Frame 1107.png" alt="blue img" />
                </div>
            </div>
        </div>
    );
};

export { Home };