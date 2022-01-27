import {
  Button,
  CircularProgress,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/AccessAlarm";
import "./Details.css";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import useAuth from "../../Hooks/useAuth";
import Contact from "../Home/Contact/Contact";

const Details = () => {
  const { blogId } = useParams();
  const { user, admin } = useAuth();
  const [data, setData] = useState([]);
  const [approveBtn, setApproveBtn] = useState(false);
  const [bookingData, setBookingData] = useState({});
  const photo = user?.photoURL;
  console.log(photo);

  useEffect(() => {
    fetch("https://pure-refuge-78290.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setData(data.result))
      .catch();
  }, []);
  console.log(user);

  const itemDetail = data.filter((td) => td._id === blogId);

  if (admin && itemDetail[0]?.condition === "pending") {
    setApproveBtn(true);
  }
  return (
    <div>
      <Header></Header>
      {!itemDetail[0] && (
        <div className="d-flex align-items-center my-5 py-5">
          <CircularProgress className="mx-auto" />
        </div>
      )}
      {itemDetail[0] && (
        <div>
          <section className="container py-4">
            <div className="mb-4">
              <h2
                className="fs-1"
                style={{ fontFamily: `"Yanone Kaffeesatz", sans-serif` }}
              >
                {itemDetail[0].title}
              </h2>
              <h2
                className="fs-4"
                style={{ fontFamily: `"Yanone Kaffeesatz", sans-serif` }}
              >
                {itemDetail[0].place}
              </h2>
              {approveBtn && (
                <button className="btn btn-outline-danger ">Approve</button>
              )}
            </div>
            {/* carousel  */}
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
                      minHeight: "70vh",
                      background: `linear-gradient(#00000000, #00000094), url(${itemDetail[0].image1}) no-repeat center center / cover`,
                    }}
                  ></div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div
                    className="d-block w-100 d-flex flex-column justify-content-center align-items-center text-center"
                    style={{
                      minHeight: "70vh",
                      background: `linear-gradient(#00000000, #00000094), url(${itemDetail[0].image2}) no-repeat center center / cover`,
                    }}
                  ></div>
                </div>
                <div className="carousel-item">
                  <div
                    className="d-block w-100 d-flex flex-column justify-content-center align-items-center text-center"
                    style={{
                      minHeight: "70vh",
                      background: `linear-gradient(#00000000, #00000094), url(${itemDetail[0].image3}) no-repeat center center / cover`,
                    }}
                  ></div>
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

            <h6 className="pt-4 fw-bold text-secondary">
              <span className="text-dark fs-3">Description :</span>
              <br />
              <p className="pt-3 lh-base fs-6">{itemDetail[0]?.detail1}</p>
              <br />
              <p className="pt-3 lh-base fs-6">{itemDetail[0]?.detail2}</p>
              <br />
              <p className="pt-3 lh-base fs-6">{itemDetail[0]?.detail3}</p>
            </h6>
          </section>

          <div className="my-5 container">
            <h1
              style={{ fontFamily: `"Yanone Kaffeesatz", sans-serif` }}
              className="fs-1"
            >
              Traveler Information :
            </h1>
            <div className="d-flex">
              <img
                style={{
                  height: "200px",
                  width: "200px",
                }}
                src={photo}
                className="img-fluid rounded-circle p-2"
                alt="..."
              />
              <div className="d-flex align-items-center">
                <div className="ps-3">
                  <h1
                    style={{ fontFamily: `"Yanone Kaffeesatz", sans-serif` }}
                    className="fs-2"
                  >
                    Name: {user.displayName}
                  </h1>
                  <h1
                    style={{ fontFamily: `"Yanone Kaffeesatz", sans-serif` }}
                    className="fs-5"
                  >
                    Email: {user.email}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="card shadow ">
                  <div className="card-body">
                    <h1 className="card-title fs-1">Contact Us</h1>
                    <hr className="w-25 text-danger p-1 rounded-pill" />
                    <br />
                    <h5 className="card-text fs-5">Phone : +(143) 1846-367</h5>
                    <br />
                    <h5 className="card-text fs-5">Office : +(423) 4805-567</h5>
                    <br />
                    <h5 className="card-text fs-5">
                      E-mail : onsTravel@yahoo.com
                    </h5>
                    <br />
                    <h5 className="fs-5">
                      Social :
                      <i
                        className="fa-brands fa-facebook-f mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-twitter mx-2 text-info"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-instagram mx-2 text-danger"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                    </h5>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-md-6 pe-2 d-flex align-items-center justify-content-center">
                <div className="p-4 bgBlue mt-5 d-flex">
                  <div className="imgIcon me-4">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="text-light">
                    <h3 className="fs-3">
                      Hotline <span className="text-danger">(24 hour)</span>
                    </h3>
                    <p className="fs-5">+003856543746</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Details;
