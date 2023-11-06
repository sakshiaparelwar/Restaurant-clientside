import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/esm/Button";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  let handlesubmit = (event) => {
    axios
      .post("https://customersdata.onrender.com/customers/create-customers", {
        name,
        phone,
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("You have Signup successfully");
          navigate("/login");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <Layout>
      <div className="bodyoflogin">
        <h2 className="h2form">Sign Up for better usability</h2>
        <form onSubmit={handlesubmit}>
          <label for="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label for="phone">
            <b>Phone</b>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="text"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit" className="submit">
            SignIn
          </Button>
        </form>
      </div>
    </Layout>
  );
}

export default SignIn;
