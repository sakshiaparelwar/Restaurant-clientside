import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/esm/Button";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handlesubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://customersdata.onrender.com/customers/login", {
        name,
        email,
        password,
      })
      .then((res) => {
        alert(res.data);
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Layout>
      <div className="bodyoflogin">
        <h2 className="h2form">Login for better usability</h2>
        <form onSubmit={handlesubmit}>
          <label htmlFor="Name">
            <b>Name</b>
          </label>
          <input
            type="name"
            id="Name"
            placeholder="firstname lastname"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="current-password"
            id="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit" className="submit">
            Login
          </Button>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
