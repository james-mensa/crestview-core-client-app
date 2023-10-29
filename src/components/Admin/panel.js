import React from "react";

import { useDispatch } from "react-redux";

import AdminOverview from "./adminoverview";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="main-layout">
      <div
        className="profile-layout"
        style={{ minHeight: `${window.innerHeight}px` }}
      >
        <div className="profile-nav-admin">
          <div className="nav-column">
            <p
              onClick={() => navigate("/admin/panel/overview")}
              style={{ backgroundColor: " white", color: "rgb(7, 1, 27) " }}
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
            <p onClick={() => navigate("/admin/panel/customers")}>
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
        <AdminOverview />
      </div>
    </div>
  );
};

export default AdminDashboard;
