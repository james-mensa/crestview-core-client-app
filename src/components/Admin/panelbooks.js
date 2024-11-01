import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import BookingsPage from "./bookingspage";
import { RiAdminFill, RiCustomerService2Line } from "react-icons/ri";
import { Signout } from "../../services/actions/adminActions";

const PanelBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admindetails = useSelector((data) => data.admin);
  return (
    <div className="main-layout">
      <div
        className="profile-layout"
        style={{ minHeight: `${window.innerHeight}px` }}
      >
        <div className="profile-nav-admin">
          {admindetails && admindetails.account && admindetails.account.role === "admin" ? (
            <div className="nav-column">
              <p onClick={() => navigate("/admin/overview")}>
                <span>Overview</span>
              </p>
              <p onClick={() => navigate("/admin/rooms")}>
                <span>List Rooms</span>
              </p>

              <p onClick={() => navigate("/admin/room_type")}>
                <span>Manage rooms types</span>
              </p>
              <p
                style={{ backgroundColor: " white", color: "rgb(7, 1, 27) " }}
                onClick={() => navigate("/admin/bookings")}
              >
                <span>Bookings</span>
              </p>
              <p onClick={() => navigate("/admin/meetings")}>
                <span>Conference Room Bookings</span>
              </p>
              <p onClick={() => navigate("/admin/employee/management")}>
                <span>Employee Management</span>
              </p>
              <p onClick={() => navigate("/admin/customers")}>
                <span>Manage Customers</span>
              </p>
              <div className="admin_indentity">
                <span>
                  {admindetails && admindetails.account && admindetails.account.role === "admin" ? (
                    <RiAdminFill color="rgb(7, 1, 27)" size={35} />
                  ) : (
                    <RiCustomerService2Line color="rgb(7, 1, 27)" size={35} />
                  )}
                </span>
                <span>
                  {admindetails && admindetails.account
                    ? admindetails.account.role.toUpperCase()
                    : "null "}
                </span>
              </div>
            </div>
          ) : (
            <div className="nav-column">
              <p onClick={() => navigate("/admin/bookings")}>
                <span>Bookings</span>
              </p>
              <p onClick={() => navigate("/admin/meetings")}>
                <span>Conference Room Bookings</span>
              </p>

              <div className="admin_indentity">
                <span>
                  {admindetails && admindetails.account && admindetails.account.role === "admin" ? (
                    <RiAdminFill color="rgb(7, 1, 27)" size={35} />
                  ) : (
                    <RiCustomerService2Line color="rgb(7, 1, 27)" size={35} />
                  )}
                </span>
                <span>
                  {admindetails && admindetails.account
                    ? admindetails.account.role.toUpperCase()
                    : "null "}
                </span>
              </div>
            </div>
          )}

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
        <BookingsPage />
      </div>
    </div>
  );
};

export default PanelBook;
