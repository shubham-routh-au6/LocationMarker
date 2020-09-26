import React, { useState } from "react";

import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

function Login(props) {
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (values.email === "" || values.password === "") {
      return setMessage("All field must be filled");
    }
    setLoader(true);
    fetch("https://immense-wave-49808.herokuapp.com/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        console.log(data);
        if (data.message === "Success") {
          localStorage.setItem("token", data.token);
          props.history.push("/mainPage");
        }
        return setMessage(data.message);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Header />
      <div className="LoginPage">
        {message ? <h3 className="errorHead">{message}</h3> : null}
        <form className="loginForm" onSubmit={handleOnSubmit}>
          {loader ? <Loader /> : null}

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={values.email}
              onChange={handleOnChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              value={values.password}
              onChange={handleOnChange}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="link_re">
          If you haven't register <br></br>
          <Link to="/register">Register here</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Login;
