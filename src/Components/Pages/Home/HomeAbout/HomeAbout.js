import React from "react";
import { Link } from "react-router-dom";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <div>
      <div className="my-4">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <div>
                <div className="my-3">
                  <div>
                    <p
                      className="fs-2 fw-bold text-primary"
                      style={{ "text-align": "left", "padding-left": "80px" }}
                    >
                      About Us
                    </p>
                    <h3
                      className="fs-5 text-danger pb-4"
                      style={{ "text-align": "left", "padding-left": "80px" }}
                    >
                      Never Be Alone
                    </h3>
                  </div>
                </div>

                <div>
                  <figure>
                    <div>
                      <img
                        src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Group-25-2.png"
                        width="676"
                        height="564"
                        alt="Group 25"
                        title="Group 25"
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center">
              <div>
                <div className="mb-4">
                  <div>
                    <p>
                      Since 2014, we’ve helped more than 500,000 people of all
                      ages enjoy the best outdoor experience of their lives.
                      Whether it’s for one day or a two-week vacation, close to
                      home or a foreign land and something like that.
                    </p>
                    <h3>Why Choose Us</h3>
                  </div>
                </div>

                <div>
                  <div>
                    <p className="mb-4">
                      <img
                        src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/smartph-300x300.png"
                        alt=""
                        width="49"
                        height="49"
                        sizes="(max-width: 49px) 100vw, 49px"
                      />
                      BOOKING WITH SPREAD PAYMENTS
                    </p>
                    <p className="mb-4">
                      <img
                        loading="lazy"
                        src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Group-70@3x-300x300.png"
                        alt=""
                        width="48"
                        height="48"
                        sizes="(max-width: 48px) 100vw, 48px"
                      />
                      SLEEP &amp; TRAVEL IN COMFORT
                    </p>
                    <p className="mb-4">
                      <img
                        loading="lazy"
                        src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Group-69@3x-300x300.png"
                        alt=""
                        width="48"
                        height="48"
                        sizes="(max-width: 48px) 100vw, 48px"
                      />
                      FULLY LICENSED TOUR OPERATOR
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <p>
                      <Link
                        className="border-bottom pb-1 border-success text-danger fw-bold"
                        to="/notFound"
                      >
                        MORE ABOUT US
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
