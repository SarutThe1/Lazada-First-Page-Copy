import React from "react";

import "./homepage.css";
import NavbarMain from "../layouts/NavbarMain";

//icons
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
//images
import banner from "../images/top-banner.jpg";
import logo from "../images/laz.png";
import nufg from "../images/nufg.jpg";
import CarouselBar from "../layouts/CarouselBar";

const homepage = () => {
    let i = 0;
    let colors = ['#0B095D', '#DFDAF0', 'white','#FF0061','#3F2598','#0047A9','#0126CC','#00A5E5'];
    
    function changeColor(){
        document.getElementById('change').style.backgroundColor = colors[i];
        i++;
        if(i>=colors.length){
            i=0;
        }
    }
    setInterval(changeColor, 5000);
  return (
    <>
      <div style={{ backgroundColor: "#01bfa6" }}>
        <div className="centered">
          <img src={banner} alt="banner" />
          <button className="CloseBanner">X</button>
        </div>
      </div>
      <NavbarMain />
      <div style={{ backgroundColor: "white", marginTop: "5px" }}>
        <div className="centered">
          <img src={logo} alt="logo" className="Pic1" />
          <input
            className="input-search"
            type="text"
            placeholder="    Search in Lazada"
          />
          <button className="search-button">
            <AiOutlineSearch
              style={{ position: "relative", top: "-10%", right: "-4%" }}
            />
          </button>

          <RiShoppingCartLine
            style={{ fontSize: "35px", marginLeft: "40px" }}
          />
          <img src={nufg} alt="NewUserFreeGift" className="Pic2" />
        </div>
      </div>
      <div id="change" style={{ marginTop: "40px", zIndex: "1", backgroundColor:'#00A5E5' }}>
       
        <div className="centered">

          <div className="side-menu">
            <p>Electronic Devices</p>
            <p>Electronic Accessories</p>
            <p>TV & Home Appliances</p>
            <p>Health & Beauty</p>
            <p>Babies & Toys</p>
            <p>Groceries & Pets</p>
            <p>Home & Lifestyle</p>
            <p>Women's Fashion & Accessories</p>
            <p>Men's Fashion & Accessories</p>
            <p>Kid's Fashion & Accessories</p>
            <p>Sports & Travel</p>
            <p>Automative & Motorcycles</p>
          </div>
          <div style={{ zIndex: "2" }}>
            <CarouselBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default homepage;
