import React from "react";
import ProfileNav from "../utils/profileNav";
import Footer from "./footer";
import { KeyFill, ListCheck, Person } from "react-bootstrap-icons";
import SectionNav from "../utils/sectionnav";
import { useDispatch, useSelector } from "react-redux";
import { Signout } from "../../store/actions/adminActions";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const UserPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myaccount = useSelector((data) => data.authuser);
  return (
    <div className="main-layout">
      <SectionNav />
      <div
        className="profile-layout"
        style={{ minHeight: `${window.innerHeight}px` }}
      >
        <div className="profile-nav">
          <div>
            <p style={{ backgroundColor: "white", color: "rgb(7, 1, 27) " }}>
              <Person /> <span>Profile</span>
            </p>
            <p onClick={() => navigate("/client/panel/records")}>
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
        <div className="profile-detail">
          <p>
            {myaccount && myaccount.account ? myaccount.account.fullname : ""}
          </p>
          <p>
            Joined Since :
            {myaccount && myaccount.account 
              ? format(new Date(myaccount.account.createdAt), "EEEE dd yyyy")
              : ""}
          </p>
          <p>
            Total Bookings{" "}
            {myaccount && myaccount.account && myaccount.account.bookings
              ? myaccount.account.bookings.length
              : ""}{" "}
          </p>
          <p></p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserPanel;
