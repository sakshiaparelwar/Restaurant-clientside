import React from "react";

import {
  Phone,
  Mail,
  Map,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="FooterMain">
        <div className="contact">
          <h1>Contact</h1>
          <h2 className="addre">
            <Phone size={30} color="green" /> +91-9999-888-777
          </h2>
          <h2 className="addre">
            <Mail size={30} color="red" /> RandomCook@gmail.com
          </h2>
          <h2 className="addre">
            <Map size={30} color="blue" />
            Jayanagar, Bengaluru, Karnataka 560041
          </h2>
        </div>
        <div className="Address">
          <h1>Social Media</h1>
          <h2 className="addre">
            <Instagram size={30} color="red" /> @RandomCook
          </h2>
          <h2 className="addre">
            <Facebook size={30} color="blue" /> @RandomCook
          </h2>
          <h2 className="addre">
            <Linkedin size={30} color="blue" /> @RandomCook
          </h2>

          <h2 className="addre">
            <Twitter size={30} color="blue" /> @RandomCook
          </h2>
        </div>
      </div>
    </FooterContainer>
  );
};
const FooterContainer = styled.div`
  .FooterMain {
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 400px;
    font-family: "Poppins", sans-serif;
    flex-wrap: wrap;
  }

  .contact {
    width: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    flex-direction: column;
  }

  .Address {
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    flex-direction: column;
  }

  .addre {
    font-size: 15px;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default Footer;
