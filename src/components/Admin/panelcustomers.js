import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import CustomerPage from "./customersdetail";
import MessageCustomer from "./messagecustomer";
import { X } from "react-bootstrap-icons";
import { enableScroll } from "../utils/reuseable";
import { IconButton } from "@mui/material";
import BlockCustomer from "./blockuser";

const PanelCustomer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMsg, setMsg] = useState(false);
  
  const [showbloc,setbprompt]=useState(false);
  const [selectedEmail, setemail] = useState("");
  const [customerid,setuserid]=useState("");
  return (
    <div className="main-layout">
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
                    enableScroll();
                  }}
                >
                  <X color="white" size={30} />
                </IconButton>
              </div>

              <MessageCustomer selectedEmail={selectedEmail} setSmg={setMsg} />
            </div>
          </div>
        ) : null}



        {showbloc ? (
          <div
            className="congrate-msg"
            style={{ minHeight: `${window.innerHeight}px` }}
          >
            <div className="congrate-box ">
              <div className="close-l">
                <IconButton
                  onClick={() => {
                    setbprompt(false);
                    enableScroll();
                  }}
                >
                  <X color="white" size={30} />
                </IconButton>
              </div>

              <BlockCustomer customerid={customerid} setbprompt={setbprompt} />
            </div>
          </div>
        ) : null}
        <div className="profile-nav-admin">
        <div className="nav-column">
            <p
              onClick={() => navigate("/admin/panel/overview")}
            
            >
              <span>Overview</span>
            </p>
            <p onClick={() => navigate("/admin/panel/rooms")}>
              <span>List Rooms</span>
            </p>

            <p onClick={() => navigate("/admin/panel/room_type")}>
              <span>Manage rooms types</span>
            </p>
            <p onClick={() => navigate("/admin/panel/bookings")}>
              <span>Bookings</span>
            </p>
            <p onClick={() => navigate("/admin/panel/meetings")}>
              <span>Conference Room Bookings</span>
            </p>
            <p onClick={() => navigate("/client/panel/manage_testimony")}>
              <span>Manage Testimony</span>
            </p>
            <p onClick={() => navigate("/admin/panel/customers")}   style={{ backgroundColor: " white", color: "rgb(7, 1, 27) " }}>
              <span>Manage Customers</span>
            </p>
          
          </div>

          <div className="signbtn">
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Sign out
            </span>
          </div>
        </div>
        <CustomerPage setemail={setemail} setSmg={setMsg} setbprompt={setbprompt} setuserid={setuserid} />
      </div>
    </div>
  );
};

export default PanelCustomer;
