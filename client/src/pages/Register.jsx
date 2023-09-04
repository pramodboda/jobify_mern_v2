import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../components";

import { TextField, Link, Button, Grid } from "@mui/material";

const Register = () => {
  return (
    <div className="">
      <h1>Register</h1>

      <form className="form">
        <div>
          <Logo />
          Register
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              variant="filled"
              type="text"
              id="firstName"
              label="First Name"
              defaultValue="pawan"
              required
              sx={{ mt: 3, mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              size="small"
              variant="filled"
              type="text"
              id="lastName"
              label="Last Name"
              defaultValue="kalyan"
              required
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          size="small"
          variant="filled"
          type="text"
          id="location"
          label="Location"
          defaultValue="hyderabad"
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          size="small"
          variant="filled"
          type="email"
          id="email"
          label="email"
          defaultValue="pawankalyan@email.com"
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          size="small"
          variant="filled"
          type="password"
          id="password"
          label="Password"
          defaultValue="pawankalyan"
          required
          sx={{ mb: 2 }}
        />
        <br />
        <Button type="submit" fullWidth variant="contained" sx={{ mb: 2 }}>
          Submit
        </Button>
        <p>
          Already a member?{" "}
          <Link component={RouterLink} to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
