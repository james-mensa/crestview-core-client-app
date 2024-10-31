import { Box, IconButton } from "@mui/material";
import React, {} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { ColorTheme } from "../components/style/ColorTheme";
import { Label } from "../components/Label";
import { getInitials } from "../libs/viewHelpers";
import { PlainButton } from "../components/Button";
import { Assets } from "../config/register";


const goToAboutUs=()=>{
    const targetDiv = document.getElementById("about_us_div");
    if (targetDiv) {
      targetDiv.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  
}

const goToFooter=()=> {
  window.scroll({
    top: document.body.scrollHeight,
    behavior: "smooth", 
  });
}


const DesktopHeader = (props) => {
  const navigate = useNavigate();
  const Checkuser = useSelector((item) => item.authuser);
  const account= Checkuser ? Checkuser.account:null

const clientNameIniitials= account ? getInitials(account.fullname):'';

const goToSuitePage=()=>{
  
  navigate("/suite")
}

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
              src={Assets.crestview}
         style={styles.logoImg}
            />{" "}
          </div>
        </div>
      </div>
      <Box className="navcontainerlog">
        <Box sx={styles.navListContainer} >
          <PlainButton title={"About Us"} onClick={goToAboutUs}/>
          <PlainButton title={"Suite"} onClick={goToSuitePage}/>
          <PlainButton title={"Contact"} onClick={goToFooter}/>
          <PlainButton title={"Location"} onClick={()=>navigate("/rixos/location")}/>
        </Box>
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
      </Box>
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
  },
  navListContainer:{
    display:'flex',
    flexDirection:'row',
    gap:2,
    marginRight:3,
  },
  logoImg:{
    width:'auto',
    height:30,
}
}