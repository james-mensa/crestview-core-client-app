import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Search, Person, List } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileNav = (props) => {
  const navigate = useNavigate();
  const [searchvalue, setSearchValue] = useState("");
  const Checkuser = useSelector((item) => item.authuser);

  const handlesearchbox = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="navbar-p">
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
        {Checkuser && Checkuser.auth ? (
          <>
            <div className="uavatar"
             onClick={() => {
                      props.setmenu(true);
                     
                    }}>

            
              {Checkuser && Checkuser.account ? <>
                <p className="presshoverAv">
                  {Checkuser.account.fullname}
                </p>
                <p className="presshoverAvmobile">
                <List size={22} />
                </p>
              </> : null}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileNav;
