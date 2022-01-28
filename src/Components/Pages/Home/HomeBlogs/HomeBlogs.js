import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeBlogs.css";

const HomeBlogs = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  useEffect(() => {
    fetch("https://floating-plateau-21173.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setAllProducts(data.result))
      .then(() => setIsLoading(false));
  }, []);
  const allBlogs = allProducts.filter((td) => td?.condition === "approved");
  const size = 10;
  console.log(allBlogs.length);
  let pageNumber = 0;
  if (allBlogs.length) {
    pageNumber = Math.ceil(allBlogs.length / size);
  }
  useEffect(() => {
    fetch(
      `https://floating-plateau-21173.herokuapp.com/blogs?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.result))
      .then(() => setIsLoading(false));
  }, [page]);
  const blogs = products.filter((td) => td?.condition === "approved");

  return (
    <div>
      <div className="container">
      <div className="title mt-4">
          <h4 className="sub-heading">Ours Blogs</h4>
          <h3 class="heading">
            <span>B</span>
            <span>L</span>
            <span>O</span>
            <span>G</span>
            <span>S</span>
          </h3>
        </div>
        {isLoading && (
          <div className="d-flex align-items-center my-5 py-5">
            <CircularProgress className="mx-auto" />
          </div>
        )}
        {!isLoading && (
          <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
            {blogs.map((singleBlog) => (
              <div class="col-lg-4 col-md-6 col-12">
              <div class="card border-0 shadow service-cart h-100 m-3">
                <img src={singleBlog.img1} class="card-img-top img-w" alt="..." />
                <div class="card-body px-4">
                  <h5 className="d-flex">
                    <Rating
                      className="me-3"
                      tyle={{ fontSize: "15px" }}
                      name="half-rating-read"
                      value={`${singleBlog.rating}`}
                      precision={0.5}
                      readOnly
                      />
                    <p className="text-gray fs-4">{singleBlog.review} Reviews</p>
                  </h5>
                  <h1 class="card-title fw-bold ts-2">{singleBlog.title}</h1>
                  <p>
                    <span className="fs-2 fw-bold color-pink">{singleBlog.cost}</span>
                    <span className="fs-4 text-gray fw-bold">/ Per person</span>
                  </p>
                  <div className="d-flex cart-dl my-3 mt-4">
                    <p className="fs-6">5 Days</p>
                    <p className="fs-4">|</p>
                    <p  className="fs-6"> {singleBlog.place}</p>
                  </div>
        
                  <p class="card-text fs-6 text-gray">{singleBlog.detail1.slice(0,150)}</p>
                </div>
                <div class="card-footer border-0 bg-white d-flex justify-content-evenly mb-4">
                  <Link to={`/details/${singleBlog._id}`}>
                    <button className="btn btn-travel">See More</button>
                  </Link>
                  <Link to="/">
                    <button className="btn btn-travel"> Liked </button>
                  </Link>
                </div>
              </div>
                </div>
            ))}
          </div>
        )}
        <div className="text-center mt-30 mb-5">
          {pageNumber &&
            [...Array(pageNumber)?.keys()].map((number) => (
              <button
                className="btn btn-info "
                className={
                  number === page
                    ? "btn btn-outline-info mx-2"
                    : "btn btn-info mx-1"
                }
                key={number}
                onClick={() => setPage(number)}
              >
                {number}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;