import React from "react";
import { Link } from "react-router-dom";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 my-5">
            <div className="title">
              <h4 className="sub-heading text-start ">ABOUT TRAVIO</h4>
              <h1 className="heading fw-bold w-75 text-start">
                World Best Travel Agency Company Since 2008.
              </h1>
              <p className="ts-4 text-gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus magni veniam, provident, temporibus adipisci a
                labore pariatur fugit possimus dolore soluta accusantium quia
                ipsam ea iure recusandae voluptatem assumenda commodi?
              </p>
              <button className="btn btn-travel">Find Tour</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div>
              <img
                src="https://travel-2022.web.app/static/media/about-3.4826cefa.jpg"
                className="img-fluid my-5 p-4 shadow rounded "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
