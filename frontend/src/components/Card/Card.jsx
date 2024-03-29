import React from "react";
import "./Card.scss";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";
import pin from "../../assets/pin.png";
import chat from "../../assets/chat.png";
import save from "../../assets/save.png";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>
            {item.title}
          </Link>
        </h2>
        <p className="address">
          <img src={pin} alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bed} alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src={bath} alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <img src={save} alt="" />
            </div>
            <div className="icon">
              <img src={chat} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
