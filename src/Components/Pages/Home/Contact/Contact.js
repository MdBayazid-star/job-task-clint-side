import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          fontFamily: `"Anton", sans-serif`,
        }}
        className="container pt-5"
        id="Contact"
      >
        <div className="text-center">
          <h1 className="fs-2">
            We’d Love to Hear{" "}
            <span className="text-color-update-2">From You</span>
          </h1>
          <p className="text-color-update">
            Whether you’re curious about{" "}
            <span className="logo">
              <span className="text-danger">o</span>
              <span className="text-warning">n</span>
              <span className="text-info">s</span>
              <span className="text-success">Travel</span>
            </span>
            , a free treatment, or even press—we’re ready to answer any and all
            questions.
          </p>
        </div>
        <div className="row my-5 pb-5">
          <div className="col-md-4 col-12">
            <div className="mb-2">
              <h1 className="text-color-update fs-3">Vancouver</h1>
              <p>
                400-401 West Georgia <br />
                St.Vancouver, BC, <br />
                Canada, V6B 5A1
              </p>
            </div>
            <div className="mb-2">
              <h1 className="text-color-update fs-3">Berlin</h1>
              <p>
                Unbounce Germany <br />
                GmbH (Apartment 1) <br />
                c/o Factory Works <br />
                GmbH Rheinsberger <br />
                Str. 76/77 10115 Berlin
              </p>
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="row">
              <div className="col-md-6 col-12">
                <div>
                  <h1 className="text-color-update fs-3">Worldwide</h1>
                  <p className="mb-2">+1 604 484 1354</p>
                </div>
                <div className="pb-2">
                  <h1 className="text-color-update fs-3">United Kingdom</h1>
                  <p>+44 808 178 0202</p>
                </div>
                <div className="pb-2">
                  <h1 className="text-color-update fs-3">Bangladesh</h1>
                  <p>+880 195 497 7023</p>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="pb-2">
                  <h1 className="text-color-update fs-3">
                    North America (Toll Free)
                  </h1>
                  <p>+1 888 515 9161</p>
                </div>
                <div>
                  <h1 className="text-color-update fs-3">Australia</h1>
                  <p>+61 1800 861 218</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
