import React from "react";

import "./homepage.css";
import NavbarMain from "../layouts/NavbarMain";

//icons
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
//images
import banner from "../images/top-banner.jpg";
import logo from "../images/laz.png";
import nufg from "../images/nufg.jpg";
import CarouselBar from "../layouts/CarouselBar";
import ban1 from "../images/ban1.jpg";
import ban2 from "../images/ban2.jpg";
import ban3 from "../images/ban3.jpg";
import LazIcon from '../images/IconLazada.png'
import app1 from "../images/appstore.PNG";
import app2 from "../images/ggplay.PNG";
import app3 from "../images/appGallery.PNG";

import ButtonGroup from "../layouts/ButtonGroup";
import FlashSaleBanner from "../cards/FlashSaleBanner";
import FlashSaleCard from "../cards/FlashSaleCard";
import LazmallCard from "../cards/LazmallCard";
import CategoriesCard from "../cards/CategoriesCard";
import JustForYouCard from "../cards/JustForYouCard";

const homepage = () => {
  let i = 0;
  let colors = [
    "#0B095D",
    "#DFDAF0",
    "white",
    "#FF0061",
    "#3F2598",
    "#0047A9",
    "#0126CC",
    "#00A5E5",
  ];

  function changeColor() {
    document.getElementById("change").style.backgroundColor = colors[i];
    i++;
    if (i >= colors.length) {
      i = 0;
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

      {/* CarouselBar */}
      <div
        id="change"
        style={{ marginTop: "40px", zIndex: "1", backgroundColor: "#00A5E5" }}
      >
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

      <div className="wrapper" style={{ paddingTop: "10px" }}>
        <div className="centered">
          <ButtonGroup />
        </div>

        {/* flashsale */}
        <div
          style={{
            position: "relative",
            textAlign: "left",
            left: "20%",
            paddingTop: "30px",
          }}
        >
          <h4>Flash Sale</h4>
        </div>
        <div className="centered" style={{ paddingTop: "5px" }}>
          <FlashSaleBanner />
        </div>
        <div className="centered" style={{ paddingTop: "2px" }}>
          <FlashSaleCard />
        </div>

        {/* LazMall */}
        <div
          style={{
            position: "relative",
            textAlign: "left",
            left: "20%",
            paddingTop: "30px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h4>LazMall</h4>
          <span style={{ position: "absolute", right: "40%" }}>
            <p
              style={{
                color: "#0088cc",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Shop More{" "}
              <IoIosArrowForward
                style={{ fontSize: "20px", fontWeight: "bold" }}
              />
            </p>
          </span>
        </div>

        <div className="centered" style={{ paddingTop: "5px" }}>
          <LazmallCard />
        </div>

        {/* Categories */}
        <div
          style={{
            position: "relative",
            textAlign: "left",
            left: "20%",
            paddingTop: "30px",
          }}
        >
          <h4>Categories</h4>
        </div>

        <div className="centered" style={{ paddingTop: "5px" }}>
          <CategoriesCard />
        </div>

        {/* Just for You */}
        <div
          style={{
            position: "relative",
            textAlign: "left",
            left: "20%",
            paddingTop: "30px",
          }}
        >
          <h4>Just for You</h4>
        </div>

        <div className="centered" style={{ paddingTop: "5px" }}>
          <JustForYouCard />
        </div>

        <div
          className="centered"
          style={{ paddingTop: "5px", marginTop: "30px" }}
        >
          <button
            style={{
              color: "#65a2b5",
              borderColor: "#65a2b5",
              background: "none",
              width: "19%",
              height: "45px",
              fontWeight: "500",
            }}
          >
            LOAD MORE
          </button>
        </div>

        <div className="centered">
          <hr style={{ width: "60%" }} />
        </div>

        <div className="centered">
          <div className="row" style={{ width: "60%" }}>
            <div className="col-md-4">
              <img src={ban1} alt="banner1" style={{ maxWidth: "100%" }} />
            </div>
            <div className="col-md-4">
              <img src={ban2} alt="banner2" style={{ maxWidth: "100%" }} />
            </div>
            <div className="col-md-4">
              <img src={ban3} alt="banner3" style={{ maxWidth: "100%" }} />
            </div>
          </div>
        </div>

        <div className="centered" style={{marginTop:'50px'}}>
          <div className="row" style={{ width: "60%" }}>
            <div className="col-md-2" style={{textAlign:'left'}}>
                <p>Customer Care</p>
            </div>
            <div className="col-md-3">
                <p>Lazada</p>
            </div>
            <div className="col-md-4">
                <div className="row">
                    <div className="col-md-4">
                        <img src={LazIcon} alt="lazada-icon" style={{width:'50px',borderRadius:'15px',position:'relative',left:'40px'}}/>
                    </div>
                    <div className="col-md-8" style={{textAlign: "left"}}>
                        <p style={{color:'#f47424'}}>Go where your heart beats</p>
                        <p style={{fontSize:'14px',position:'relative',bottom:'18px'}}>Download the app</p>
                    </div>
                </div>
              
            </div>
            <div className="col-md-3" >
                <div className="row" >
                    <div className="col-md-6">
                        <img src={app1} alt="appstore" style={{width:'120%',borderRadius:'10px',cursor:'pointer'}}/>
                    </div>
                    <div className="col-md-6">
                        <img src={app2} alt="playstore" style={{width:'120%',borderRadius:'10px',cursor:'pointer'}}/>
                    </div>
                    <div className="col-md-6">
                        <img src={app3} alt="appgallery" style={{width:'120%',borderRadius:'10px',cursor:'pointer'}}/>
                    </div>
                </div>
                
            </div>
          </div>
        </div>



      </div>
    </>
  );
};

export default homepage;
