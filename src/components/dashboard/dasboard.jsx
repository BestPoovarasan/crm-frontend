import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";

export default function Dashboard() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar fixed="top" expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <Link to="/">
            <MDBNavbarBrand color="dark">Navbar</MDBNavbarBrand>
          </Link>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              {/* sidebar */}
              <div className="sidebar position-absolute top-0 start-0">
                <Link to="/">
                  <MDBNavbarBrand className="p-3" color="dark">
                    CRM User Panel
                  </MDBNavbarBrand>
                </Link>
                <div className="sidebutton p-3 gap-5">
                  <MDBBtn className="sidebtn">
                    <i class="fa-solid fa-chart-line"></i> Dashboard
                  </MDBBtn>
                  <MDBBtn className="sidebtn">
                    <i class="fa-solid fa-paper-plane"></i> Service Request
                  </MDBBtn>
                  <MDBBtn className="sidebtn">
                    <i class="fa-solid fa-repeat"></i> Service Status
                  </MDBBtn>
                  <MDBBtn className="sidebtn">
                    <i class="fa-solid fa-user"></i> Profile
                  </MDBBtn>
                  <MDBBtn className="sidebtn">
                    <i class="fa-solid fa-right-from-bracket"></i> Logout
                  </MDBBtn>
                </div>
              </div>
            </MDBNavbarNav>

            <div className="nameicon d-grid gap-2 d-md-flex justify-content-md-end">
              <h5>poovarasan</h5>
              <span class="material-symbols-outlined">face</span>
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
