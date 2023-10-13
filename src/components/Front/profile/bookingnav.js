import React, { useState } from "react";
import { KeyFill, ListCheck, Person, X } from "react-bootstrap-icons";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import Footer from "../footer";
import SectionNav from "../../utils/sectionnav";
import { Signout } from "../../../store/actions/adminActions";
import BookingsRecord from "./mybookings";
import { IconButton } from "@mui/material";
import PrintDoc from "./printdoc";

const BookingsPanel = () => {
  const [orderData,setData]=useState({})
  const [showMsg, setMsg] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="main-layout">
      <SectionNav />
      
      <div
        className="profile-layout"
        style={{ minHeight: `${window.innerHeight}px` }}
      >
        {showMsg ? (
          <div
            className="congrate-msg"
            style={{ minHeight: `${window.innerHeight}px` }}
          >
            <div className="congrate-box ">
              <div className="close-l">
                <IconButton
                  onClick={() => {
                    setMsg(false);
                   
                  }}
                >
                  <X color="white" size={30} />
                </IconButton>
              </div>
              <h1 style={{fontSize:"20px",marginTop:"-20px",marginLeft:"50px"}}>Payment Successfull</h1>
              <PrintDoc order={orderData}/>
            </div>
          </div>
        ) : null}

        <div className="profile-nav">
          <div>
            <p onClick={() => navigate("/client/profile")}>
              <Person /> <span>Profile</span>
            </p>
            <p
              onClick={() => navigate("/client/panel/records")}
              style={{ backgroundColor: "white", color: "rgb(7, 1, 27) " }}
            >
              <ListCheck />
              <span>Order Records</span>
            </p>
            <p onClick={() => navigate("/client/panel/settings")}>
              <KeyFill />
              <span>Account Settings </span>
            </p>
          </div>
          <div className="signbtn">
            <span
              onClick={() => {
                dispatch(Signout());
                navigate("/");
              }}
            >
              Sign out
            </span>
          </div>
        </div>
        <BookingsRecord setData={setData}  setMsg={setMsg}/>
      </div>

      <Footer />
    </div>
  );
};

export default BookingsPanel;
