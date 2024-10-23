import { Box, IconButton } from "@mui/material";
import React, {} from "react";
import { Person } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { ColorTheme } from "../components/style/ColorTheme";
import { Label } from "../components/Label";
import { getInitials } from "../libs/viewHelpers";

const DesktopHeader = (props) => {
  const navigate = useNavigate();
  const Checkuser = useSelector((item) => item.authuser);
  const account= Checkuser ? Checkuser.account:null

const clientNameIniitials= account ? getInitials(account.fullname):'';
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
            <Box
              className="uavatar"
              sx={styles.authAvater}
              onClick={() => navigate("/dashboard/overview")}>
<Label sx={styles.initials}>
    {clientNameIniitials}
</Label>
            </Box>
          </>
        ) : (
          <div className="userlog">
            <Box sx={styles.avater}>
              <IconButton
                  onClick={() => navigate("/auth")}
                  size="small">
                <PersonOutlineIcon  sx={{color:ColorTheme.background[150]}}/>
              </IconButton>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopHeader;


const styles={
  avater:{
borderRadius:'40px',
border: `1px solid ${ColorTheme.background[150]}`
  }
  ,
  authAvater:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:1,
    marginRight:2,
    padding:0.5,
    borderRadius:10,
    backgroundColor:ColorTheme.background[150],
    cursor:'pointer',
    width:40,
    height:40,
    overFlow:'hidden'


  },
  initials:{
    fontWeight:'600'
  }
}