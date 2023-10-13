import React from "react";


import { KeyFill, ListCheck, Person } from "react-bootstrap-icons";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import SettiingForm from "./settings";
import Footer from "../footer";
import SectionNav from "../../utils/sectionnav";
import { Signout } from "../../../store/actions/adminActions";

const SettingsPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="main-layout">
      <SectionNav />
      <div
        className="profile-layout"
        style={{ minHeight: `${window.innerHeight}px` }}
      >
        <div className="profile-nav">
          <div>
            <p onClick={() => navigate("/client/profile")}>
              <Person /> <span>Profile</span>
            </p>
            <p onClick={() => navigate("/client/panel/records")}>
              <ListCheck />
              <span>Order Records</span>
            </p>
            <p
              onClick={() => navigate("/client/panel/settings")}
              style={{ backgroundColor: "white", color: "rgb(7, 1, 27) " }}
            >
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
        <SettiingForm />
      </div>

      <Footer />
    </div>
  );
};

export default SettingsPanel;
