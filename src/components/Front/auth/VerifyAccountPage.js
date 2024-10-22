import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";

import { CircleSpinner } from "react-spinners-kit";
import { ComfirmUserS } from "../../../services/actions/adminActions";

const VerifyAccountPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("t");
  const dispatch = useDispatch();
  const notifications = useSelector((value) => value.notification);
  const navigate = useNavigate();

  useEffect(() => {
    if (notifications && notifications.notice) {
      if (notifications.success) {
        navigate("/");
      }
    }
  });

  useEffect(() => {
    dispatch(ComfirmUserS({ t: token }));
  }, [dispatch]);
  return (
    <div
      className="mainLayoutb "
      style={{ minHeight: `${window.innerHeight}px` }}
    >
      <div className="sitenamenormal">
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

        <div className="verifypage">
          {" "}
          <p>Verifying User</p>
          <CircleSpinner color="blue" />
        </div>
      </div>
    </div>
  );
};

export default VerifyAccountPage;
