import "./carpage.css";
// import "./findcar.js";

const Findcar = () => {
    return (
        <section>
            <div className="text-center rentflow-content mt-5 ms-5 pt-5">
                <h2>Find by Car Type</h2>
                <h5>choose your style!</h5>
            </div>
            <div className="wrapper p-5">
                <i id="left" className="fa-solid fa-caret-left" />
                <div className="carousel">
                    <img src="../assets/sedan.jpeg" alt="car image" draggable="false" />
                    <img src="../assets/bugatti.jpeg" alt="car image" draggable="false" />
                    <img src="../assets/suv.jpeg" alt="car image" draggable="false" />
                    <img src="../assets/minivan.jpeg" alt="car image" draggable="false" />
                    <img src="../assets/benz.jpeg" alt="car image" draggable="false" />
                    <img src="../assets/bmw.jpg" alt="car image" draggable="false" />
                    <img src="../assets/audi.jpg" alt="car image" draggable="false" />
                </div>
                <i id="right" className="fa-solid fa-caret-right" />
            </div>
        </section>
    );
};

export { Findcar };