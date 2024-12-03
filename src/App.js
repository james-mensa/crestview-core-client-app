import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { showToastify } from "./client/components/utils/reuseable";
import { ClearNotify } from "./store/actions/notification";
import "./style/custome.css";
import "./style/design.css";

import Resetpasspage from "./client/components/Front/resetpassword";
import ConfirmAccount from "./client/components/Front/auth/VerifyAccountPage";
import PaymentSection from "./client/components/Front/payment";
// import {
//   AdminLogin,
//   AutoLogin,
//   CheckLogin,
//   getAllUsers,
// } from "./services/actions/adminActions";
import Authcontainer from "./client/components/utils/authuser";
import SearchResult from "./client/components/Front/searchresult";
import UserPanel from "./client/components/Front/userprofile";
import SettingsPanel from "./client/components/Front/profile/settingnav";
import BookingsPanel from "./client/components/Front/profile/bookingnav";



import Location from "./client/components/utils/location";

import ConferenceBook from "./client/components/Front/bookconference";
import ConferenceCheckout from "./client/components/Front/checkoutconference";
import SpecialOrderPanel from "./client/components/Front/profile/specialordernav";
import SignInAdmin from "./client/components/Front/adminlogin";
import Admincontainer from "./client/components/utils/authadmin";
import ForgottenPassword from "./client/components/Front/forgotpassword";

import { AuthPage, LoginPage, SignUpPage, VerifyAccountPage } from "./client/components/Front/auth";
import { HomePage } from "./client/pages/client/home/HomePage";
import { SuitePage } from "./client/pages/client/SuitePage";
import AdminOverviewPage from "./admin/pages/overview";
import CustomersPage from "./admin/pages/manage-customer";
import AdminSuitePage from "./admin/pages/suite";
import BookingsPage from "./admin/pages/bookings";
import NewSuitePage from "./admin/pages/manage-suite";

function App() {
  const notifications = useSelector((value) => value.notification);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(CheckLogin());
  // }, []);


  // useEffect(() => {
  //   dispatch(AdminLogin());
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(AutoLogin());
  // }, [dispatch]);
  useEffect(() => {
    if (notifications && notifications.notice) {
      if (notifications.success) {
        showToastify("SUCCESS", notifications.notice.msg);
        dispatch(ClearNotify());
      }
      if (notifications.success === false) {
        showToastify("ERROR", notifications.notice.msg);
        dispatch(ClearNotify());
      }
      window.scrollTo(0, 0);
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/suite" element={<SuitePage />} />
        <Route path="/account/verification" element={<ConfirmAccount />} />
        <Route path="/account/passwordreset" element={<Resetpasspage />} />
        <Route path="/account/forgotten_credentials" element={<ForgottenPassword />} />
        <Route
          path="/rooms/results/:startDate/:endDate/:roomtype/:person"
          element={<SearchResult />}
        />
        {/** client auth routes   */}
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/auth/login" element={<LoginPage />}></Route>
        <Route path="/auth/signup" element={<SignUpPage  />}></Route>
        <Route path="/auth/verification" element={<VerifyAccountPage />} />
        <Route
          path="/room/payment/:id/:start/:end"
          element={
            <Authcontainer>
              <PaymentSection />
            </Authcontainer>
          }
        ></Route>
        <Route
          path="/client/conference/checkout/:startTime/:endDTime/:startD"
          element={
            <Authcontainer>
              <ConferenceCheckout />
            </Authcontainer>
          }
        ></Route>
        <Route
          path="/dashboard/overview"
          element={
            <Authcontainer>
              <UserPanel />
            </Authcontainer>
          }
        />
        <Route
          path="/dashboard/records"
          element={
            <Authcontainer>
              {" "}
              <BookingsPanel />
            </Authcontainer>
          }
        />
        <Route path="/admin/bookings" 
        element={
          // <Admincontainer>
          //   <PanelBook />
          // {/* </Admincontainer>  */}
          <BookingsPage/>
        } />
        <Route
          path="/dashboard/settings"
          element={
            <Authcontainer>
              <SettingsPanel />
            </Authcontainer>
          }
        />
        <Route path="/admin/overview" element={ 
          // <Admincontainer><AdminRestriction><AdminDashboard /></AdminRestriction></Admincontainer>
          // <AdminDashboard />
          <AdminOverviewPage/>
        } 
          />
        <Route path="/admin/suite" element= {
          // <Admincontainer><AdminRestriction><PanelRoom /></AdminRestriction></Admincontainer>
          <AdminSuitePage />
          } />
        <Route path="/admin/suite-type" element={
          // <Admincontainer><AdminRestriction><AddRoom /></AdminRestriction></Admincontainer>
          <NewSuitePage />
          } />
        <Route path="/client/conference/booking" element={<ConferenceBook />} />
        <Route
          path="/dashboard/specail_orders"
          element={
            <Authcontainer>
              <SpecialOrderPanel />
            </Authcontainer>
          }
        />
        <Route path="/admin/customers" element={
          // <Admincontainer><PanelCustomer /></Admincontainer>
          <CustomersPage/>
          } />
        <Route path="/admin/dashboard" element={<SignInAdmin />} />
        <Route path="/rixos/location" element={<Location />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
