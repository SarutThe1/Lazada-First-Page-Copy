import React from "react";
import shoes from "../images/cards/shoes.PNG";

import { Card } from "antd";
const { Meta } = Card;

const FlashSaleCard = () => {
  return (
    <div
      className="row"
      style={{
        backgroundColor: "white",
        width: "60%",
        paddingTop: "10px",
      }}
    >
      <div className="col-md-2">
        <Card
          hoverable
          style={{
            width: 175,
            height: 280,
            marginRight: "10px",
          }}
          cover={<img alt="example" src={shoes} />}
        >
          <Meta title="Nike Air Jordan1'Origin Story'" />

          <div style={{ textAlign: "left" }}>
            <h5 style={{ color: "#f47424", paddingTop: "10px" }}>฿1000.00</h5>
            <div className="row">
              <div className="col-md-3">
                <p style={{ textDecoration: "line-through", color: "gray" }}>
                  ฿5000
                </p>
              </div>
              <div className="col-md-9">
                <p>-80%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-md-2">
        <Card
          hoverable
          style={{
            width: 175,
            height: 280,
            marginRight: "10px",
          }}
          cover={<img alt="example" src={shoes} />}
        >
          <Meta title="Nike Air Jordan1'Origin Story'" />

          <div style={{ textAlign: "left" }}>
            <h5 style={{ color: "#f47424", paddingTop: "10px" }}>฿1000.00</h5>
            <div className="row">
              <div className="col-md-3">
                <p style={{ textDecoration: "line-through", color: "gray" }}>
                  ฿5000
                </p>
              </div>
              <div className="col-md-9">
                <p>-80%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-md-2">
        <Card
          hoverable
          style={{
            width: 175,
            height: 280,
            marginRight: "10px",
          }}
          cover={<img alt="example" src={shoes} />}
        >
          <Meta title="Nike Air Jordan1'Origin Story'" />

          <div style={{ textAlign: "left" }}>
            <h5 style={{ color: "#f47424", paddingTop: "10px" }}>฿1000.00</h5>
            <div className="row">
              <div className="col-md-3">
                <p style={{ textDecoration: "line-through", color: "gray" }}>
                  ฿5000
                </p>
              </div>
              <div className="col-md-9">
                <p>-80%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-md-2">
        <Card
          hoverable
          style={{
            width: 175,
            height: 280,
            marginRight: "10px",
          }}
          cover={<img alt="example" src={shoes} />}
        >
          <Meta title="Nike Air Jordan1'Origin Story'" />

          <div style={{ textAlign: "left" }}>
            <h5 style={{ color: "#f47424", paddingTop: "10px" }}>฿1000.00</h5>
            <div className="row">
              <div className="col-md-3">
                <p style={{ textDecoration: "line-through", color: "gray" }}>
                  ฿5000
                </p>
              </div>
              <div className="col-md-9">
                <p>-80%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-md-2">
        <Card
          hoverable
          style={{
            width: 175,
            height: 280,
            marginRight: "10px",
          }}
          cover={<img alt="example" src={shoes} />}
        >
          <Meta title="Nike Air Jordan1'Origin Story'" />

          <div style={{ textAlign: "left" }}>
            <h5 style={{ color: "#f47424", paddingTop: "10px" }}>฿1000.00</h5>
            <div className="row">
              <div className="col-md-3">
                <p style={{ textDecoration: "line-through", color: "gray" }}>
                  ฿5000
                </p>
              </div>
              <div className="col-md-9">
                <p>-80%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-md-2">
        <Card
          hoverable
          style={{
            width: 175,
            height: 280,
            marginRight: "10px",
          }}
          cover={<img alt="example" src={shoes} />}
        >
          <Meta title="Nike Air Jordan1'Origin Story'" />

          <div style={{ textAlign: "left" }}>
            <h5 style={{ color: "#f47424", paddingTop: "10px" }}>฿1000.00</h5>
            <div className="row">
              <div className="col-md-3">
                <p style={{ textDecoration: "line-through", color: "gray" }}>
                  ฿5000
                </p>
              </div>
              <div className="col-md-9">
                <p>-80%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FlashSaleCard;
