import { Button, Rating, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [review, setReview] = useState({});
  const [value, setValue] = useState(0);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const reviewData = { ...review };
    reviewData[field] = value;
    setReview(reviewData);
  };

  const handleReviewDateSubmit = (e) => {
    const reviewData = {
      ...review,
      rating: value,
      name: user.displayName,
      email: user.email,
      image: `${
        user.photoURL
          ? user.photoURL
          : "https://christopherscottedwards.com/wp-content/uploads/2018/07/Generic-Profile.jpg"
      }`,
    };
    fetch("https://pure-refuge-78290.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert(
            "Thank you for your feedback. Your review have been submitted."
          );
          document.getElementById("Form").reset();
          setValue(0);
        }
      });

    e.preventDefault();
    console.log(reviewData);
  };

  return (
    <div>
      <div>
        <form
          id="Form"
          className="my-5 p-4 rounded shadow mx-auto bg-light"
          style={{ maxWidth: "50rem" }}
          onSubmit={handleReviewDateSubmit}
        >
          <Typography
            style={{ textAlign: "center" }}
            sx={{ my: 3 }}
            variant="h5"
            gutterBottom
          >
            Please Give Feedback
          </Typography>
          <TextField
            sx={{ width: "95%", m: 1 }}
            id="standard-basic"
            label="Your Name"
            focused
            value={`${user.displayName}`}
            color="success"
            name="name"
            variant="standard"
          />
          <TextField
            sx={{ width: "95%", m: 1 }}
            id="standard-basic"
            label="Your Email"
            color="success"
            focused
            value={`${user.email}`}
            name="email"
            variant="standard"
          />
          <TextField
            sx={{ width: "95%", m: 1, mt: 3 }}
            id="outlined-multiline-static"
            label="Write down your Feedback ..."
            multiline
            rows={4}
            name="feedback"
            onBlur={handleOnBlur}
          />
          <h6 className="p-1 mt-3">
            <small className="text-muted fw-bold">
              Please rate us by selecting star.
            </small>
          </h6>
          <Rating
            name="rating"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Button
            sx={{ width: "95%", m: 1, mt: 4 }}
            style={{
              backgroundColor: "coral",
            }}
            type="submit"
            variant="contained"
          >
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Review;
