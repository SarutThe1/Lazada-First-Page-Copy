import React from 'react'

import shoes from "../images/cards/shoes.PNG";
import { Card } from "antd";
const { Meta } = Card;

const LazmallCard = () => {
  return (
    <>
     <div
      className="row"
      style={{
        width: "60%",
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
          cover={<img alt="example" src={shoes} style={{height:'180px'}}/>}
        >
          <Meta title="Nike" description='Nike' />

          <div style={{position:'absolute',top:'150px',left:'60px',boxShadow:'0 1px 5px rgba(0, 0, 0, 0.25)'}}>
            <img alt="example" src={shoes} style={{height:'50px',width:'50px'}}/>
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
          cover={<img alt="example" src={shoes} style={{height:'180px'}}/>}
        >
          <Meta title="Nike" description='Nike' />

          <div style={{position:'absolute',top:'150px',left:'60px',boxShadow:'0 1px 5px rgba(0, 0, 0, 0.25)'}}>
            <img alt="example" src={shoes} style={{height:'50px',width:'50px'}}/>
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
          cover={<img alt="example" src={shoes} style={{height:'180px'}}/>}
        >
          <Meta title="Nike" description='Nike' />

          <div style={{position:'absolute',top:'150px',left:'60px',boxShadow:'0 1px 5px rgba(0, 0, 0, 0.25)'}}>
            <img alt="example" src={shoes} style={{height:'50px',width:'50px'}}/>
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
          cover={<img alt="example" src={shoes} style={{height:'180px'}}/>}
        >
          <Meta title="Nike" description='Nike' />

          <div style={{position:'absolute',top:'150px',left:'60px',boxShadow:'0 1px 5px rgba(0, 0, 0, 0.25)'}}>
            <img alt="example" src={shoes} style={{height:'50px',width:'50px'}}/>
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
          cover={<img alt="example" src={shoes} style={{height:'180px'}}/>}
        >
          <Meta title="Nike" description='Nike' />

          <div style={{position:'absolute',top:'150px',left:'60px',boxShadow:'0 1px 5px rgba(0, 0, 0, 0.25)'}}>
            <img alt="example" src={shoes} style={{height:'50px',width:'50px'}}/>
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
          cover={<img alt="example" src={shoes} style={{height:'180px'}}/>}
        >
          <Meta title="Nike" description='Nike' />

          <div style={{position:'absolute',top:'150px',left:'60px',boxShadow:'0 1px 5px rgba(0, 0, 0, 0.25)'}}>
            <img alt="example" src={shoes} style={{height:'50px',width:'50px'}}/>
          </div>
        </Card>
      </div>
      


    </div>
    </>
  )
}

export default LazmallCard