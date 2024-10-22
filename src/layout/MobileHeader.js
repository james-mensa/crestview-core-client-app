import { IconButton } from "@mui/material";
import React, { useState } from "react";
import {Person, List } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { disableScroll } from "../libs/viewHelpers";
const MobileHeader = (props) => {
  const navigate = useNavigate();
  const [ setSearchValue] = useState("");
  const Checkuser = useSelector((item) => item.authuser);
  const handlesearchbox = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="navbar">
      <img
        onClick={() => {
          navigate("/");
        }}
        alt=""
        src="https://res.cloudinary.com/dewkx66gl/image/upload/v1695980190/pngwing.com_2_n6furk.png"
        className="companyname-img "
      />{" "}
      <div className="navcontainerlog">
        {Checkuser && Checkuser.auth ? (
          <>
            <div
              
                 >
              {" "}
              <IconButton
               onClick={() => navigate("/dashboard/overview")}
        >
                <Person size={22} />{" "}
              </IconButton>{" "}
              {props.showmenu ? 
                <IconButton
                onClick={() => {
                  disableScroll();
                  props.setmenu(true);
                }}
              >
                <List/>
              </IconButton>
              :null
              }
             
            </div>
          </>
        ) : (
          <>
            <div className="userlog">
              <div className="signup">
                {" "}
                <span onClick={() => navigate("/auth/Signup")}>Join Now</span>
              </div>
            </div>
            {
              props.showmenu ?
              <IconButton
              onClick={() => {
                disableScroll();
                props.setmenu(true);
              }}
            >
              <List />
            </IconButton>
            :null
            }
          
          </>
        )}
      </div>
    </div>
  );
};

export default MobileHeader;
