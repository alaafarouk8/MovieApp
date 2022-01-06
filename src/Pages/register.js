import React from "react";
import Button from "../Components/button";
import NavBar from "../Components/Navbar";
import { useState } from "react";
function SignUp() {
    const [state, setState] = useState({ name: "", email: "", username: "", password: "", confirmpassword: "" });
    const [error, setError] = useState({ name: "", email: "", username: "", password: "", confirmpassword: "" });

    const validateEmail = (email) => {
        return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const validateUsername = (username) => {
        return username.match(/^[a-zA-Z0-9]{4,}$/);
    };
    const validatePassword = (password) => {
        return password.match(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/);
    };

    const changeValue = (e) => {
        // set state every time has changed
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
        // password validation
        if (e.target.name === "password") {
            let password = e.target.value;
            if (!(validatePassword(password))) {
                setError({
                    ...error,
                    password: "password length not less than 8 characters , contains at least one lowercase , one uppercase , at least one  digit and special character",
                });
            }
            else if ((validatePassword(password))) {
                setError({
                    ...error,
                    password: "",
                });
            }
            else if (password.length === 0) {
                setError({
                    ...error,
                    password: "Empty Field , Please fill this field ",
                });
            }
            else {
                setError({
                    ...error,
                    password: "Something is Wrong",
                });
            }
        }
        else if (e.target.name === "name") {
            let name = e.target.value;

            if (name.length === 0) {
                setError({
                    ...error,
                    name: "Empty Field , Please fill this field ",
                });
            }
            else {
                setError({
                    ...error,
                    name: "",
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
            else if ((validateEmail(email))) {
                setError({
                    ...error,
                    email: "",
                });
            }
            else if (email.length === 0) {
                setError({
                    ...error,
                    email: "Empty Field , Please fill this field ",
                });
            }
            else {
                setError({
                    ...error,
                    email: "Something is Wrong",
                });
            }

        }
        else if (e.target.name === "username") {
            let username = e.target.value;
            if (!(validateUsername(username))) {
                setError({
                    ...error,
                    username: "invalid Username, please match the format nospace",
                });
            }
            else if ((validateUsername(username))) {
                setError({
                    ...error,
                    username: "",
                });
            }

            else if (username.length === 0) {
                setError({
                    ...error,
                    username: "Empty Field , Please fill this field ",
                });
            }
            else {
                setError({
                    ...error,
                    username: "Something is Wrong",
                });
            }

        }
        else if (e.target.name === "confirmpassword") {
            let confirmpassword = e.target.value;

            if (confirmpassword.length === 0) {
                setError({
                    ...error,
                    confirmpassword: "Empty Field , Please fill this field ",
                });
            }
            else if (confirmpassword !== state.password) {
                setError({
                    ...error,
                    confirmpassword: "Doesn't match",
                });
            }
            else if (confirmpassword === state.password) {
                setError({
                    ...error,
                    confirmpassword: ""
                });
            }
            else {
                setError({
                    ...error,
                    confirmpassword: "Something is Wrong",
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
        <h1 className="text-center text-light p-5">Sign Up </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text"
                        className="form-control"
                        name="name"
                        onChange={(e) => changeValue(e)}
                        required
                        minLength={3}
                    />
                    <small className="text-danger"> {error.name} </small>
                </div>
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
                    <label className="form-label">User Name</label>
                    <input type="text"
                        className="form-control"
                        name="username"
                        onChange={(e) => changeValue(e)}
                        required
                    />
                    <small className="text-danger"> {error.username} </small>
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
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        name="confirmpassword"
                        onChange={(e) => changeValue(e)}
                        required
                        minLength={8}
                    />
                    <small className="text-danger"> {error.confirmpassword} </small>
                </div>
                <div className=" d-flex  justify-content-center " >
                    <Button name="SignUp" />
                </div>


            </form>
        </div>
        </div>
    );
}
export default SignUp;
