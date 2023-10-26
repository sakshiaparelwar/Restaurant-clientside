import React from "react";
import "./style.css";
import Button from "react-bootstrap/esm/Button";
import Layout from "../components/Layout";

function SignIn() {
  return (
    <Layout>
      <div className="bodyoflogin">
        <h2 className="h2form">SignIn for better usability</h2>
        <form>
          <label for="name">
            <b>Name</b>
          </label>
          <input type="text" id="name" placeholder="Enter your name" />
          <label for="phone">
            <b>Phone</b>
          </label>
          <input
            type="phone"
            id="phone"
            placeholder="Enter your phone number"
          />
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="current-password"
            id="email"
            placeholder="Enter your email"
          />
          <label for="password">
            <b>Password</b>
          </label>
          <input type="text" id="password" placeholder="Enter your password" />
          <Button type="submit" className="submit">
            SignIn
          </Button>
        </form>
      </div>
    </Layout>
  );
}

export default SignIn;
