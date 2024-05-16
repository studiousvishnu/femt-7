import "./App.css";
import image from "./assets/images/image-product-desktop.jpg";
import mobileImage from "./assets/images/image-product-mobile.jpg";
const App = () => {
  return (
    <div>
      <div className="container  rounded-4">
        <div className="row ">
          <div className="left-container col-lg-6 px-0 ">
            <div className="img-container mt-5 pt-5 pt-lg-0 mt-lg-0">
              <img
                src={image}
                className="w-100 d-none d-lg-block rounded-start-4 "
                alt=""
              />
              <img src={mobileImage} className="w-100  d-lg-none" alt="" />
            </div>
          </div>
          <div className="right-container col-lg-6 bg-white  ps-lg-5 rounded-end-4  ">
            <div className="item  mt-lg-5 ">
              <h6 className="heading fw-bold">PERFUME</h6>
            </div>
            <div className="main-heading py-lg-5" style={{ width: "13rem" }}>
              <h2 className="fw-bold ">Gabrielle Essence Eau De Parfum</h2>
            </div>
            <div className="content py-lg-3 pb-lg-4">
              <p style={{ color: "#b5b7bd", width: "15rem" }} className="">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House Of CHANEL.
              </p>
            </div>
            <div className="rate d-flex">
              <h2 className="fw-bold pe-4" style={{ color: "#5e927e" }}>
                $149.99
              </h2>
              <div
                className="mt-1"
                style={{ color: "#8c8c94", textDecoration: "line-through" }}
              >
                $169.99
              </div>
            </div>
            <div className="button text-center w-100 mt-lg-5 mb-5 pe-lg-4">
              <button className="add-btn btn w-100 p-3 text-white">
                {" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
