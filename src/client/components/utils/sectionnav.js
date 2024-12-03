import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Search, Person } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SectionNav = (props) => {
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
          
          className="companyname-img "  />{" "}
          
          </div>
        </div>
      </div>
      <div className="navcontainerlog">

      {/* {Checkuser && Checkuser.auth ? (
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
            <div className="logincs">
              {" "}
              <span
                style={{ marginLeft: "15px" }}
                onClick={() => navigate("/auth")}
              >
                Login
              </span>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SectionNav;
