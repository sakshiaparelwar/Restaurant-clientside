import React from "react";
import PopuarCard from "./PopuarCard";
import styled from "styled-components";

const PopularItmesMenu = () => {
  return (
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
  );
};
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
export default PopularItmesMenu;
