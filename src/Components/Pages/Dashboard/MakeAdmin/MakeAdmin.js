import { Button, TextField, Alert } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://pure-refuge-78290.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2 className="heading text-danger">MAKE AN ADMIN</h2>
      <form
        className="my-5 p-4 rounded shadow"
        onSubmit={handleAdminSubmit}
        style={{ maxWidth: "25rem" }}
      >
        <TextField
          sx={{ width: "95%" }}
          label="Type Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <br />
        <Button sx={{ bgcolor: "salmon" }} type="submit" variant="contained">
          Make Admin
        </Button>
        <br />
        <br />
        {success && <Alert severity="success">Made Admin successfully!</Alert>}
      </form>
    </div>
  );
};

export default MakeAdmin;
