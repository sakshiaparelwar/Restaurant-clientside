import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import PopuarCard from "./PopuarCards";
import styled from "styled-components";

function Home() {
  const navigate = useNavigate();
  const handleOrderNow = () => {
    navigate("/menu");
  };
  return (
    <Layout>
      <div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block image"
                alt=""
                fluid
              />
              <div className="carousel-caption frontcaption ">
                <h1>
                  <b>Best Restaurant in Town.</b>
                </h1>
                <p>
                  <i>We welcome you to the most amazing Restaurant in Town.</i>
                </p>
                <p>||Fresh Food means Great Mood||</p>
                <p>We provide best food, home delivery and dineout services.</p>
                <div>
                  <Button
                    className="text-center Buttonorder"
                    onClick={handleOrderNow}
                    type="submit"
                  >
                    <b>Order now</b>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container1">
          <Image src="./dish.jpeg" className="image2 img-fluid" alt="" />

          <div className="dish">
            <h2>
              Our Most <br />
              Popular Dish.
            </h2>
            <p className="p2">
              This dish is full of flavor and nutrition!
              <br />
              Egginoa is a complete protein,
              <br /> providing all the essential amino acids your body needs,{" "}
              <br />
              and also a good source of fiber.
            </p>
            <div>
              <Button className="Buttonorder" type="submit">
                <b>Order now</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MenuContainer>
        <div className="allMain">
          <center>
            <h1 className="Heading">Our Popular Dish</h1>
          </center>
          <center>
            <div className="CardsDisplay">
              <PopuarCard
                imgg="https://vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg.webp"
                HeadName="Paneer Butter"
                high="500"
                low="350"
                Disc="Paneer Butter Masala, also known as butter paneer is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter."
              />
              <PopuarCard
                imgg="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
                HeadName="Chicken Biryani"
                high="800"
                low="550"
                Disc=" It is a famous Indian subcontinent dish that is popular around the world. Biryani is prepared from basmati rice mixed with several spices and cooked in a special way."
              />
              <PopuarCard
                imgg="https://lh3.googleusercontent.com/Pfxlb7mHFMfDIGiFPJy1_P6oqnGODLGoYzTZDDdEfudW8yOtF0Imh9_3ERp6WKxeeF0VW7nU4W6LmIM2b8o7LDWT8wzF2d1yl7wpMlc=w512-rw"
                HeadName="Paneer Tikka  Biryani"
                high="800"
                low="550"
                Disc="A traditional Paneer Biryani recipe is a slow cooked layered casserole of paneer cubes in a curd (yogurt) based gravy, fried onions and par-cooked rice flavored with spices"
              />
            </div>
          </center>
        </div>
      </MenuContainer>
    </Layout>
  );
}
const MenuContainer = styled.div`
  .allMain {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    width: 96%;
    padding-top: 2px;
    padding-right: 2%;
    padding-left: 2%;
    padding-bottom: 5px;
    font-family: "Poppins", sans-serif;
  }

  .Heading {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .CardsDisplay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
  }
`;
export default Home;
