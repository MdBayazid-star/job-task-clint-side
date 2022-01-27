import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div
              className="d-block w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "80vh",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://i.ibb.co/h8QwtgH/How-to-find-work-as-a-freelance-travel-photographer.jpg) no-repeat center center / cover",
              }}
            >
              <div style={{ maxWidth: "650px" }}>
                <h1 className="logoHeading">
                  <span className="text-danger">o</span>
                  <span className="text-warning">n</span>
                  <span className="text-info">s</span>
                  <span className="text-success">Travel</span>
                </h1>
                <h2 className="text-light heading">
                  With <span className="text-danger">us</span> on the way of
                  <span className="text-danger"> journey</span>
                </h2>
                <h1 className="mx-auto text-light p-2 fs-4 fw-bold">
                  Since 2014, we’ve helped more than 500,000 people of all ages
                  enjoy the best outdoor experience.
                </h1>
                <br />
                <Link to="/notFound">
                  <Button className="fs-5" variant="outlined" color="error">
                    MORE ABOUT US
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div
              className="d-block w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "80vh",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://i.ibb.co/8DxB6SW/image-processing20181105-4-1m0zc94.jpg) no-repeat center center / cover",
              }}
            >
              <div style={{ maxWidth: "650px" }}>
                <h1 className="logoHeading">
                  <span className="text-danger">o</span>
                  <span className="text-warning">n</span>
                  <span className="text-info">s</span>
                  <span className="text-success">Travel</span>
                </h1>
                <h2 className="text-light heading">
                  With <span className="text-danger">us</span> on the way of
                  <span className="text-danger"> journey</span>
                </h2>
                <h1 className="mx-auto text-light p-2 fs-4 fw-bold">
                  Since 2014, we’ve helped more than 500,000 people of all ages
                  enjoy the best outdoor experience.
                </h1>
                <br />
                <Link to="/notFound">
                  <Button className="fs-5" variant="outlined" color="error">
                    MORE ABOUT US
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "80vh",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://i.ibb.co/QFRLQLc/Rear-view-of-young-guy-with-backpack-standing-outdoors-with-arms-spread-open-against-seascape-Man-en.jpg) no-repeat center center / cover",
              }}
            >
              <div style={{ maxWidth: "650px" }}>
                <h1 className="logoHeading">
                  <span className="text-danger">o</span>
                  <span className="text-warning">n</span>
                  <span className="text-info">s</span>
                  <span className="text-success">Travel</span>
                </h1>
                <h2 className="text-light heading">
                  With <span className="text-danger">us</span> on the way of
                  <span className="text-danger"> journey</span>
                </h2>
                <h1 className="mx-auto text-light p-2 fs-4 fw-bold">
                  Since 2014, we’ve helped more than 500,000 people of all ages
                  enjoy the best outdoor experience.
                </h1>
                <br />
                <Link to="/notFound">
                  <Button className="fs-5" variant="outlined" color="error">
                    MORE ABOUT US
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "80vh",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://i.ibb.co/MnKcRFz/sunrise-1014712-480.webp) no-repeat center center / cover",
              }}
            >
              <div style={{ maxWidth: "650px" }}>
                <h1 className="logoHeading">
                  <span className="text-danger">o</span>
                  <span className="text-warning">n</span>
                  <span className="text-info">s</span>
                  <span className="text-success">Travel</span>
                </h1>
                <h2 className="text-light heading">
                  With <span className="text-danger">us</span> on the way of
                  <span className="text-danger"> journey</span>
                </h2>
                <h1 className="mx-auto text-light p-2 fs-4 fw-bold">
                  Since 2014, we’ve helped more than 500,000 people of all ages
                  enjoy the best outdoor experience.
                </h1>
                <br />
                <Link to="/notFound">
                  <Button className="fs-5" variant="outlined" color="error">
                    MORE ABOUT US
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
