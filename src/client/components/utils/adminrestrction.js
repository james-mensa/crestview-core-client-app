import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AutoLogin, getAllUsers } from "../../../store/actions/adminActions";
import { useNavigate } from "react-router-dom";
import LoaderView from "./loaderView";

const AdminRestriction = (props) => {
  const Checkuser = useSelector((item) => item.admin);
  const navigate = useNavigate();

  useEffect(() => {
    if (Checkuser && !Checkuser.loading) {
      if (!Checkuser.account) {
        navigate("/");
      } else if (Checkuser.account && Checkuser.account.role === "employee") {
navigate("/admin/bookings")
        
      }
    }
  });

  return (
    <>
      {Checkuser && !Checkuser.loading ? (
        <div>{props.children}</div>
      ) : (
        <LoaderView />
      )}
         {/* <div>{props.children}</div> */}
    </>
  );
};

export default AdminRestriction;
