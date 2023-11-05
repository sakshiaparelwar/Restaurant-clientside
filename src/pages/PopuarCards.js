import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PopuarCard = (props) => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/order");
  };

  return (
    <CardContainer>
      <div className="CardShow">
        <center>
          <img src={props.imgg} alt="" className="CardImg" />
        </center>
        <h3 className="heading">{props.HeadName}</h3>
        <p className="disc">{props.Disc}</p>
        <div className="buttons">
          <h5 className="PriceTag">
            {" "}
            <span className="RedP">₹{props.high}</span>₹{props.low}
          </h5>
          <button className="OrdrBtnn" onClick={handleOrderNow}>
            Order Now
          </button>
        </div>
      </div>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  .CardShow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    flex-direction: column;
    box-shadow: 5px 5px 15px;
    border-radius: 1rem;
  }

  .OrdrBtnn {
    width: 120px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 20px;
    background-color: orangered;
    color: white;
    border: 1px solid orangered;
    border-radius: 0.7rem;
    margin-bottom: 2px;
  }

  .CardImg {
    width: 280px;
    border-radius: 1rem;
    height: 200px;
    margin-top: 5px;
    margin-bottom: 3px;
  }

  .PriceTag {
    display: flex;
    align-items: center;
    justify-content: center;
    color: green;
    font-size: 15px;
    gap: 5px;
  }

  .RedP {
    color: red;
    text-decoration: line-through;
  }

  .disc {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 250px;
    font-size: 14px;
    font-weight: bold;
    text-overflow: auto;
  }

  .heading {
    font-weight: bolder;
  }
`;
export default PopuarCard;
