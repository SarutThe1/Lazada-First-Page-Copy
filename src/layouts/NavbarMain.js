import React from "react";
import './navbar.css'

const NavbarMain = () => {
  return (
    <>
      <nav class="navbar navbar-expand navbar-light bg-light py-0">
        <div class="navbar-nav ms-auto" style={{fontSize:'12px',position:'relative',right:'19%'}}>
          
            <a className="nav-item nav-link" href="" style={{fontWeight:'500',paddingRight:'30px'}}>
              SAVE MORE ON APP
            </a>
            <a className="nav-item nav-link" href="" style={{fontWeight:'500',paddingRight:'30px'}}>
              SELL ON LAZADA
            </a>
            <a className="nav-item nav-link" href="" style={{paddingRight:'30px'}}>
              CUSTOMER CARE
            </a>
            <a className="nav-item nav-link" href="" style={{paddingRight:'30px'}}>
              TRACK MY ORDER
            </a>
            <a className="nav-item nav-link" href="" style={{paddingRight:'30px'}}>
              LOGIN
            </a>
            <a className="nav-item nav-link" href="" style={{paddingRight:'30px'}}>
              SIGNUP
            </a>
            <a className="nav-item nav-link" href="" style={{paddingRight:'30px'}}>
              เปลี่ยนภาษา
            </a>
          
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
