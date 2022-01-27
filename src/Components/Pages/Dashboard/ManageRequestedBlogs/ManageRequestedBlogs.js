import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./ManageRequestedBlogs.css";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

export default function ManageRequestedBlogs() {
  const [userOrders, setUserOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://pure-refuge-78290.herokuapp.com/allBooking")
      .then((res) => res.json())
      .then((data) => setUserOrders(data))
      .then(() => setIsLoading(false));
  }, []);
  const handleUpdateUser = (id) => {
    const url = `https://pure-refuge-78290.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
        }
        console.log(data);
        fetch("https://pure-refuge-78290.herokuapp.com/allBooking")
          .then((res) => res.json())
          .then((data) => setUserOrders(data));
      });
  };
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `https://pure-refuge-78290.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remainingUsers = userOrders.filter(
              (userService) => userService._id !== id
            );
            setUserOrders(remainingUsers);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="heading text-warning">MANAGE REQUESTED BLOGS</h1>
      {isLoading && (
        <div className="d-flex align-items-center my-5 py-5">
          <CircularProgress className="mx-auto" />
        </div>
      )}
      {!isLoading && (
        <div>
          {userOrders.map((userOrder) => (
            <div
              key={userOrder._id}
              className="card mb-3 border-0 shadow"
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                  <img
                    src={userOrder.product_Detail?.img1}
                    className="img-fluid p-2"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div>
                      <h5 className="card-title fw-bold">
                        {userOrder.product_Detail?.name?.slice(0, 50)} ...
                      </h5>
                      <h6>Place: ${userOrder.product_Detail?.price}</h6>
                      <div className="mt-2">
                        <div className="mb-2">
                          <Link
                            to="/dashboard/review"
                            className="w-50 text-center my-2 link"
                          >
                            <button className="btn btn-outline-warning">
                              Approve
                            </button>
                          </Link>
                        </div>
                        <div>
                          <Link
                            to={`/services/${userOrder.product_Detail?._id}`}
                            className="w-50 text-center my-2 link me-2"
                          >
                            <button className="btn btn-outline-info">
                              <i className="fas fa-info-circle"></i> Detail
                            </button>
                          </Link>
                          <button
                            onClick={() =>
                              handleDeleteUserService(userOrder._id)
                            }
                            type="button"
                            className="align-self-center btn btn-outline-danger mx-auto"
                          >
                            <i className="fa-solid fa-trash-can"></i> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
