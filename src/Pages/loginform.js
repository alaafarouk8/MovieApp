import React from "react"
import { useState } from "react";
import Button from "../Components/button";
import NavBar from "../Components/Navbar";
function LoginForm() {
  const [state, setState] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const changeValue = (e) => {
    // set state every time has changed
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "password") {
      let password = e.target.value;
      if (password.length < 9) {
        setError({
          ...error,
          password: "too short , password must be greater than 8 char ",
        });
      }

      else if (password.length === 0) {
        setError({
          ...error,
          password: "Empty Field , Please fill this field ",
        });
      }
      else if (password >= 9) {
        setError({
          ...error,
          password: "",
        });
      }
      else {
        setError({
          ...error,
          password: "Somthing is Wrong",
        });
      }
    }

    else if (e.target.name === "email") {
      let email = e.target.value;
      if (!(validateEmail(email))) {
        setError({
          ...error,
          email: "invalid email, please match the format alaa@xxx.com",
        });
      }

      else if (email.length === 0) {
        setError({
          ...error,
          email: "Empty Field , Please fill this field ",
        });
      }
      else if ((validateEmail(email))) {
        setError({
          ...error,
          email: "",
        });
      }
      else {
        setError({
          ...error,
          email: "Something is Wrong",
        });
      }

    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-dark contianer" style={{height:948}} >
      <NavBar />
      <div className="text-light p-2 container-fluid justify-content-center" style={{ width: 400 }} >
        <h1 className="text-center text-light p-5">Login In </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              onChange={(e) => changeValue(e)}
              required
            />
            <small className="text-danger"> {error.email} </small>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password"
              className="form-control"
              name="password"
              onChange={(e) => changeValue(e)}
              required
              minLength={8}
            />
            <small className="text-danger"> {error.password} </small>
          </div>
          <div className=" d-flex  justify-content-center " >
            <Button name="LogIn" />
          </div>

        </form>
      </div>
    </div>
  );
}
export default LoginForm;

