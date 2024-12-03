import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Person } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const TopNav = (props) => {
  const navigate = useNavigate();
  const Checkuser = useSelector((item) => item.authuser);


  return (
    <div className="navbar">
      <div className="navcontainer">
        <div className="sitename">
          <div className="companyn">
            {" "}
            <img
              onClick={() => {
                navigate("/");
              }}
              alt=""
              src="https://res.cloudinary.com/dewkx66gl/image/upload/v1695980190/pngwing.com_2_n6furk.png"
              className="companyname-img "
            />{" "}
          </div>
        </div>
      </div>
      <div className="navcontainerlog">
        <div className="nav-actions">
          <IconButton>
            {/* <Label></Label> */}
          </IconButton>
          <span
            onClick={() => {
              window.scroll({
                top: document.body.scrollHeight,
                behavior: "smooth", // You can use 'smooth' for smooth scrolling or 'auto' for instant scrolling
              });
            }}
          >
            About Us
          </span>
          <span
            onClick={() => {
              document
                .getElementById("roomsCat")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Rooms
          </span>
          <span>Contact</span>
  
          <span 
          onClick={()=>{
            navigate("/rixos/location")
          }}>Location</span>
        </div>
        {Checkuser && Checkuser.auth ? (
          <>
            <div
              className="uavatar"
              onClick={() => navigate("/dashboard/overview")}
            >
              <p>
                {" "}
                <span>
                  <Person size={22} />{" "}
                </span>{" "}
              </p>
              {Checkuser && Checkuser.account ? (
                <p className="presshoverAv">
                  {Checkuser.account.fullname.toUpperCase()}
                </p>
              ) : null}
            </div>
          </>
        ) : (
          <div className="userlog">
            <div className="signup">
              {" "}
              <span onClick={() => navigate("/user/Signup")}>Join Now</span>
            </div>
            <div className="logincss">
              {" "}
              <span
                style={{ marginLeft: "15px" }}
                onClick={() => navigate("/auth")}
              >
                Login
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
