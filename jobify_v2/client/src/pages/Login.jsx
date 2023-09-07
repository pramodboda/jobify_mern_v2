import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "../components";

import {
  Link,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const Login = () => {
  return (
    <div className="">
      <h1>Login</h1>
      <form className="form">
        <div>
          <Logo />
          Login
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <br />
          <Button type="submit" fullWidth variant="contained" sx={{ mb: 2 }}>
            Submit
          </Button>
        </div>
        <Link to="/register">Don't have an account? Register</Link>
      </form>
    </div>
  );
};
export default Login;
