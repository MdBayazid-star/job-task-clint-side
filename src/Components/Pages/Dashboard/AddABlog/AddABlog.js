import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import {
  Button,
  CircularProgress,
  Container,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AddABlog = () => {
  const [blogDate, setBlogDate] = useState({});
  const [value, setValue] = useState(0);
  const { isLoading, admin, user } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newblogDate = { ...blogDate };
    newblogDate[field] = value;
    setBlogDate(newblogDate);
  };
  let photo;
  if (user.photoURL) {
    photo = user.photoURL;
  } else {
    photo = "https://i.ibb.co/fxCYf4L/Generic-Profile.jpg";
  }
  const handleProductDateSubmit = (e) => {
    let product;
    if (admin) {
      product = {
        ...blogDate,
        rating: value,
        condition: "approved",
        name: user.displayName,
        email: user.email,
        photo: photo,
      };
    } else {
      product = {
        ...blogDate,
        rating: value,
        condition: "pending",
        name: user.displayName,
        email: user.email,
        photo: photo,
      };
    }
    fetch("https://pure-refuge-78290.herokuapp.com/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully Added.");
          document.getElementById("Form").reset();
          setValue(0);
        }
      });
    e.preventDefault();
  };

  return (
    <Container>
      <form
        id="Form"
        className="my-5 p-4 rounded shadow mx-auto"
        style={{ maxWidth: "60rem" }}
        onSubmit={handleProductDateSubmit}
      >
        <Typography
          style={{ textAlign: "center" }}
          sx={{ my: 3 }}
          variant="h5"
          gutterBottom
        >
          Add A Blog
        </Typography>
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="outlined-basic"
          label="Title"
          name="title"
          onBlur={handleOnBlur}
          variant="outlined"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="outlined-basic"
          label="Place"
          name="place"
          onBlur={handleOnBlur}
          variant="outlined"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="outlined-multiline-static"
          label="Detail 1"
          name="detail1"
          onBlur={handleOnBlur}
          multiline
          rows={4}
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="outlined-basic"
          label="Image 1"
          name="image1"
          onBlur={handleOnBlur}
          variant="outlined"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="outlined-multiline-static"
          label="Detail 2"
          name="detail2"
          onBlur={handleOnBlur}
          multiline
          rows={4}
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="outlined-basic"
          label="Image 2"
          name="image2"
          onBlur={handleOnBlur}
          variant="outlined"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="outlined-multiline-static"
          label="Detail 3"
          name="detail3"
          onBlur={handleOnBlur}
          multiline
          rows={4}
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="outlined-basic"
          label="Image 3"
          name="image3"
          onBlur={handleOnBlur}
          variant="outlined"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="outlined-basic"
          label="Cost"
          name="cost"
          onBlur={handleOnBlur}
          variant="outlined"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="outlined-basic"
          label="Review"
          name="Review"
          onBlur={handleOnBlur}
          variant="outlined"
        />
        <h4 className="p-1 mt-3 ms-2 fs-5">
          <small className="text-muted fw-bold">
            Please rate by selecting star.
          </small>
        </h4>
        <Rating
          className="ms-2 mb-3"
          name="rating"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <Button
          sx={{ width: "95%", m: 1 }}
          style={{
            backgroundColor: "aquamarine",
            color: "black",
            fontWeight: "900",
            fontSize: "16px",
          }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
        {isLoading && <CircularProgress />}
      </form>
    </Container>
  );
};

export default AddABlog;
