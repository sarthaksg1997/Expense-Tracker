import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import useStyles from "./styles";

const Login = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { value, name } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const generateError = (error) =>
    toast.error(error, {
      position: "top-right",
    });

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...formData,
        },
        { withCredentials: true }
      );

      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (error) {}
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          title={
            <Typography className={classes.title} variant="h4">
              Login
            </Typography>
          }
        />
        <CardContent>
          <div className={classes.form}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              className={classes.textField}
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              className={classes.textField}
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Link className="login-register-link" to="/register">
              Don't have an account? Register
            </Link>
          </div>
        </CardContent>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Login;
