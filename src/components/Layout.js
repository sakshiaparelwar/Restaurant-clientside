import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  console.log(props);
  return (
    <div>
      <Header></Header>
      <main style={{ minHeight: "90vh" }}>{props.children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
