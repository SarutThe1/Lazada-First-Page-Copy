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
import LazIcon from "../images/IconLazada.png";
import app1 from "../images/appstore.PNG";
import app2 from "../images/ggplay.PNG";
import app3 from "../images/appGallery.PNG";
import payment from "../images/payment.PNG";
import delivery from "../images/delivery.PNG";
import verify from "../images/verify.PNG";
import flag from "../images/flag.PNG";
import social from "../images/social.PNG";

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

        <div
          className="centered"
          style={{ marginTop: "50px", paddingBottom: "20px" }}
        >
          <div className="row" style={{ width: "60%" }}>
            <div className="col-md-3" style={{ textAlign: "left" }}>
              <p>Customer Care</p>
              <div
                style={{
                  fontSize: "12px",
                  cursor: "pointer",
                  lineHeight: "0.4",
                }}
              >
                <p className="link">Help Center</p>
                <p className="link">How to Buy</p>
                <p className="link">Shipping & Delivery</p>
                <p className="link">International Product Policy</p>
                <p className="link">How to Return</p>
                <p className="link">Contact Us</p>
              </div>
            </div>
            <div className="col-md-2" style={{ textAlign: "left" }}>
              <p>Lazada</p>
              <div
                style={{
                  fontSize: "12px",
                  cursor: "pointer",
                  lineHeight: "0.4",
                }}
              >
                <p className="link">All Categories</p>
                <p className="link">About Lazada</p>
                <p className="link">Affiliate Program</p>
                <p className="link">Careers</p>
                <p className="link">Terms & Conditions</p>
                <p className="link">Privacy Policy</p>
                <p className="link">Press & Media</p>
                <p className="link">Security</p>
                <p className="link">Popular Products</p>
                <p className="link">Intellectual Property Protection</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={LazIcon}
                    alt="lazada-icon"
                    style={{
                      width: "50px",
                      borderRadius: "15px",
                      position: "relative",
                      left: "40px",
                    }}
                  />
                </div>
                <div className="col-md-8" style={{ textAlign: "left" }}>
                  <p style={{ color: "#f47424" }}>Go where your heart beats</p>
                  <p
                    style={{
                      fontSize: "14px",
                      position: "relative",
                      bottom: "18px",
                    }}
                  >
                    Download the app
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={app1}
                    alt="appstore"
                    style={{
                      width: "110%",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={app2}
                    alt="playstore"
                    style={{
                      width: "110%",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="col-md-6" style={{ paddingTop: "10px" }}>
                  <img
                    src={app3}
                    alt="appgallery"
                    style={{
                      width: "110%",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="white-bg"
        style={{ marginTop: "20px", paddingBottom: "30px" }}
      >
        <div className="centered">
          <div className="row" style={{ width: "60%", textAlign: "left" }}>
            <div className="col-md-6">
              <p>Payment Methods</p>
              <img src={payment} alt="payment" style={{ width: "60%" }} />
            </div>
            <div className="col-md-3">
              <p>Delivery Services</p>
              <img src={delivery} alt="delivery" style={{ width: "100%" }} />
            </div>
            <div className="col-md-3">
              <p>Verified by</p>
              <img src={verify} alt="verified" style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="wrapper"
        style={{ paddingTop: "50px", paddingBottom: "30px" }}
      >
        <div className="centered">
          <div
            className="row"
            style={{ width: "60%", textAlign: "left", paddingRight: "20px" }}
          >
            <div className="col-md-3">
              <p className="head-content">
                Best Shopping Experience Guaranteed at Lazada Thailand Lazada:
                Redefining “Effortless Shopping”
              </p>
              <p className="content">
                As online shopping becoming more <br /> prevalent now, Lazada Thai is
                always <br />striving to keep up with what the<br /> consumers want and
                need. We are <br />making every effort to achieve maximum <br />customer
                satisfaction through seamless <br />transactions and competitive
                product <br />pricing. We are updating and improving <br />our product
                selection at the best prices<br /> to delight our customers along with<br />
                catchy deals, flash sales, and other cool<br /> promos.
              </p>
              <p className="content">
                Sporting a new‘heart’ logo mark that <br />shows the letter “L” as a
                three-<br />dimensional box, Lazada is committing <br />to providing better
                and more unique<br /> ways to make sure that every transaction <br />is
                truly effortless. The new tagline ‘Go<br /> Where Your Heart Beats’
                represents the <br />company’s vision to boost the online <br />shopper and
                seller experience through<br /> commerce and technology. The colorful<br />
                heart logo is a youthful, energetic look,<br /> that symbolizes the
                vibrancy of shopping<br /> and today’s digital age.
              </p>
              <p className="head-content">EASY SHOPPING</p>
              <p className="content">
                “Effortless shopping” has been our goal<br /> throughout the years,
                promising every<br /> customer with nothing but hassle-free,<br /> and
                convenient online shopping <br />experience. We have sorted everything
                to<br /> ease your search through our user-<br />friendly website and App.
                Products are<br /> listed under their respective<br />categories and
                descriptions as well as reviews are<br /> openly provided.
              </p>
              <p className="content">
                With LazMall, you won’t run out of<br /> options as we collaborated
                with <br />hundreds of top brands worldwide. There
              </p>
            </div>
            <div className="col-md-3">
              <p className="content">
                are more and more renowned sellers<br /> joining our community to
                serve you too.<br /> RedMart also offers a vast selection of<br /> grocery
                items at the lowest prices.
              </p>
              <p className="head-content">
                MULTIPLE PAYMENT <br /> OPTIONS
              </p>
              <p className="content">
                Transacting with us is easy as we accept<br /> multiple modes of
                payment. Being a<br /> leading online marketplace, we feel<br /> responsible
                to give you a safe and <br />secure platform to shop with. Our<br /> payment
                gateway keeps all your <br />sensitive information protected from<br />
                unauthorized users and any fraudulent<br />activities. You can pay
                through <br />debit/credit card or cash-on-delivery.
              </p>
              <p className="head-content">
                ISLAND-WIDE SHIPPING & <br />
                FUSS-FREE RETURNS
              </p>
              <p className="content">
                We not only give you an excellent choice<br /> of products but also
                extend the luxury of<br /> nationwide home delivery. We ship<br />anything
                to your doorsteps anywhere <br />you are on the island. Received a<br />
                damaged shipment? Send it back<br /> through our hassle-free returns
                policy <br />and we will send a refund as soon as <br />possible.
              </p>
              <p className="head-content">
                THE BIGGEST SALES, FRESH VOUCHERS & COOLEST <br />
                PROMOS
              </p>
              <p className="content">
                Attractive deals can be purchased on the<br /> website daily. Discount
                codes and<br /> multiple vouchers can be redeemed to<br /> make the most of
                your shopping. Scoop<br /> up these incredible promo codes <br />especially
                during our campaign periods<br /> including Birthday Sale, Women’s
                Festival, Mid-Year Festival, 9.9 Sale and<br /> Lazada’s most
                anticipated online<br /> shopping festivals: 11.11 and 12.12<br /> Sales!
              </p>
            </div>
            <div className="col-md-3">
              <p className="head-content">TOP CATEGORIES & BRANDS</p>
              <p className="content">
                <span className="mini-head">EL</span>
                <br />
                Hisense , Midea , Haier , Canon , DoHome , Microsoft , LG , TCL
                , Philips , more...
              </p>
              <p className="content">
                <span className="mini-head">MOTHER & BABY</span>
                <br />
                MamyPoko , BabyLove , Pampers , Huggies ,<br />
                Merries , Enfagrow ,S26 , Pediasure , HiQ ,<br />
                D-Nee , Foremost , more...
              </p>
              <p className="content">
                <span className="mini-head">HEALTH & BEAUTY</span>
                <br />
                L'Oreal Paris , Unilever , Estee Lauder ,<br />
                Laneige , Dettol ,Ensure , La Roche Posay ,<br />
                P&G , Watsons , Eve and Boy , BobbiBrown ,<br />
                Kiehl's , Lifree Thailand
              </p>
              <p className="content">
                <span className="mini-head">HOME & LIVING</span>
                <br />
                Index Livingmall , SB Design Square ,<br /> Superlock , Satin ,
                Seagull , FN OUTLET ,<br /> Lock&Lock , Philips Lighting
                Thailand , Bosch <br />, PASAYA , 3M Official Online Store ,
                <br /> siamlatex , more...
              </p>
              <p className="content">
                Adidas , Under Armour , New Balance ,<br /> Skechers , Asics ,
                Warrix , Jason , B&G ,<br /> GrandSport , Yonex , LULAE , Hydro
                Flask ,<br />
                more...
              </p>
              <p className="content">
                <span className="mini-head">MOTORS</span>
                <br />
                3M Auto , Meguiars , KENWOOD , Pioneer ,<br /> Aston , Caltex ,
                FURiO by Bangchak , Arctic ,<br /> Super max and tyre , PLATINUM
                X ,<br />
                Audio Advance , more...
              </p>
              <p className="content">
                <span className="mini-head">FASHION</span>
                <br />
                Sabina , CONVERSE , Mc Jeans , Topshop ,<br /> GQ , Wacoal ,
                CALVIN KLEIN , Fitflop , TOMS ,<br /> Thai Designer Club , Keds
                , Guess , Crocs ,<br /> more...
              </p>
              <p className="content">
                <span className="mini-head">
                  SHOP WORLDWIDE WITH ALIEXPRESS
                </span>
                <br />
                Russia , Spain , France , Germany , Poland ,<br /> Brazil ,
                Saudi Arabia
              </p>
              <p className="content">
                <span className="mini-head">SHOP WORLDWIDE WITH DARAZ</span>
                <br />
                Pakistan , Bangladesh , Sri Lanka , Myanmar ,<br /> Nepal
              </p>
            </div>
            <div className="col-md-3">
              <br />
              <p className="content">
                <span className="mini-head">TOY & GAMES</span>
                <br />
                hasbro , Lego , Barbie , Mattel , Fisher Price ,<br /> Crayola ,
                Playmobil , KCtoys ,<br /> Kiddo Pacific Co.,Ltd. , Cyberdict
                Technology ,<br /> Joan Miro Thailand , more...
              </p>
              <p className="content">
                <span className="mini-head">GROCERIES</span>
                <br />
                Unilever , Pepsico , Osotspa ,<br /> Nescafe Dolce Gusto ,
                Nescafe , MIlo , KAO ,<br /> Lion , Cellox Zilk and Maxmo ,
                DoiTung ,<br /> more...
              </p>
              <p className="content">
                <span className="mini-head">MOBILES & TABLETS DEVICES</span>
                <br />
                Xiaomi , Realme , OPPO , vivo , OnePlus ,<br /> Infinix , Apple
                , Samsung , Huawei , more...
              </p>
              <p className="content">
                <span className="mini-head">PET SUPLLIES</span>
                <br />
                Mars , Nestle Pet , PCG , Hill's , Unicharm Pet ,<br /> Jerhigh
                , Bearing , Frontguard , Hana Pet ,<br /> more
              </p>
              <p className="content">
                <span className="mini-head">ACCESSORIES</span>
                <br />
                JBL , Sandisk , WD , Sennheiser , Bose ,<br /> Anker , Fitbit ,
                Sony , TP-Link , Amazfit ,<br /> more...
              </p>
              <p className="content">
                <span className="mini-head">WATCHES SUNGLASSES JEWELLERY</span>
                <br />
                RayBan , Oakley Official Store , SEIKO , Casio ,<br /> Citizen
                Official Store ,<br /> Timex Official Thailand , Jubilee Diamond
                ,<br />
                Emporio Armani , DKNY ,<br /> Swatch Official Store , Tissot
                Official Store ,<br /> Mido Official Store , more...
              </p>
              <p className="content">
                <span className="mini-head">BAGS & TRAVEL</span>
                <br />
                Samsonite , American Tourister , Herschel ,<br /> Anello , Furla ,
                Coccinelle , Morgan , Timbuk2 ,<br /> Guess , Cath Kidston , COACH ,
                Jansport ,<br /> more...
              </p>
              <p className="content">
                <span className="mini-head">SPECIAL PROMOTIONS</span>
                <br />
                Free Shipping , Utility Bill , Mid-Month
              </p>
              <p className="mini-head">
                RECOMMEND PRODUCT
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="white-bg"
        style={{ marginTop: "30px", paddingBottom: "40px" }}
      >
        <div className="centered" >
          <div className="row" style={{ width: "60%", textAlign: "left" }}>
            <div className="col-md-5">
              <p>Lazada Southeast Asia</p>
              <img src={flag} alt='flag' style={{width:'50%'}} />
            </div>
            <div className="col-md-5">
              <p>Follow Us</p>
              <img src={social} alt='social' style={{width:'50%'}} />
            </div>
            <div className="col-md-2">
              <p style={{fontSize:'15px'}}>© Lazada 2023</p>
              
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default homepage;
