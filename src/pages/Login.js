import React from "react";
import "./style.css";
import Button from "react-bootstrap/esm/Button";
import Layout from "../components/Layout";

function Login() {
  return (
    <Layout>
      <div className="bodyoflogin">
        <h2 className="h2form">Login for better usability</h2>
        <form>
          <label htmlFor="Name">
            <b>Name</b>
          </label>
          <input type="name" id="Name" placeholder="firstname lastname" />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="email" id="email" placeholder="example@gmail.com" />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input type="current-password" id="password" placeholder="password" />
          <Button type="submit" className="submit">
            Login
          </Button>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
