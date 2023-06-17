import React from "react";
import "./navbar.css";

const NavbarMain = () => {
  return (
    <>
      <nav class="navbar navbar-expand navbar-light bg-light py-0">
        <div
          class="navbar-nav ms-auto"
          style={{ fontSize: "12px", position: "relative", right: "19%",top:'7px' }}
        >
          <a
            className="nav-item nav-link"
            href=""
            style={{ fontWeight: "500", paddingRight: "30px" }}
          >
            <p className="nav-click"> SAVE MORE ON APP</p>
          </a>
          <a
            className="nav-item nav-link"
            href=""
            style={{ fontWeight: "500", paddingRight: "30px" }}
          >
            <p className="nav-click">SELL ON LAZADA</p>
          </a>
          <a
            className="nav-item nav-link"
            href=""
            style={{ paddingRight: "30px" }}
          >
            <p className="nav-click">CUSTOMER CARE</p>
          </a>
          <a
            className="nav-item nav-link"
            href=""
            style={{ paddingRight: "30px" }}
          >
            <p className="nav-click"> TRACK MY ORDER</p>
          </a>
          <a
            className="nav-item nav-link"
            href=""
            style={{ paddingRight: "30px" }}
          >
            <p className="nav-click">LOGIN</p>
          </a>
          <a
            className="nav-item nav-link"
            href=""
            style={{ paddingRight: "30px" }}
          >
            <p className="nav-click">SIGNUP</p>
          </a>
          <a
            className="nav-item nav-link"
            href=""
            style={{ paddingRight: "30px" }}
          >
            <p className="nav-click">เปลี่ยนภาษา</p>
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
