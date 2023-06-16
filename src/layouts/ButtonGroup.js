import React from "react";
import "./ButtonGroup.css";

import button1 from "../images/buttonLogo/but1.png";
import button2 from "../images/buttonLogo/but2.png";
import button3 from "../images/buttonLogo/but3.png";
import button4 from "../images/buttonLogo/but4.png";
import button5 from "../images/buttonLogo/but5.png";

const ButtonGroup = () => {
  return (
    <>
      <div className="button-style">
        <button className="button-item">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={button1}
              alt=""
              style={{ maxHeight: "35px", position: "relative", top: "2px" }}
            />
            <p>LazMall</p>
          </div>
        </button>
        <button className="button-item">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={button2}
              alt=""
              style={{ maxHeight: "35px", position: "relative", top: "2px" }}
            />
            <p>Vouchers</p>
          </div>
        </button>
        <button className="button-item">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={button3}
              alt=""
              style={{ maxHeight: "35px", position: "relative", top: "2px" }}
            />
            <p>Top-Up, Bills&Food</p>
          </div>
        </button>
        <button className="button-item">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={button4}
              alt=""
              style={{ maxHeight: "35px", position: "relative", top: "2px" }}
            />
            <p>LazBlog</p>
          </div>
        </button>
        <button className="button-item">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={button5}
              alt=""
              style={{ maxHeight: "35px", position: "relative", top: "2px" }}
            />
            <p>LazPick</p>
          </div>
        </button>
      </div>
    </>
  );
};

export default ButtonGroup;
