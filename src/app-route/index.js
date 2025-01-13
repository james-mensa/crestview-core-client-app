import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../style/custome.css";
import "../style/design.css";

import Resetpasspage from "../client/components/Front/resetpassword";
import ConfirmAccount from "../client/components/Front/auth/VerifyAccountPage";
import PaymentSection from "../client/components/Front/payment";
import Authcontainer from "../client/components/utils/authuser";
import SearchResult from "../client/components/Front/searchresult";
import UserPanel from "../client/components/Front/userprofile";
import SettingsPanel from "../client/components/Front/profile/settingnav";
import BookingsPanel from "../client/components/Front/profile/bookingnav";

import Location from "../client/components/utils/location";

import ConferenceBook from "../client/components/Front/bookconference";
import ConferenceCheckout from "../client/components/Front/checkoutconference";
import SpecialOrderPanel from "../client/components/Front/profile/specialordernav";
import SignInAdmin from "../client/components/Front/adminlogin";
import ForgottenPassword from "../client/components/Front/forgotpassword";

import {
  AuthPage,
  LoginPage,
  SignUpPage,
  VerifyAccountPage,
} from "../client/components/Front/auth";
import { HomePage } from "../client/pages/client/home/HomePage";
import { SuitePage } from "../client/pages/client/SuitePage";
import AdminOverviewPage from "../admin/pages/overview";
import CustomersPage from "../admin/pages/manage-customer";
import AdminSuitePage from "../admin/pages/suite";
import BookingsPage from "../admin/pages/bookings";
import SuiteTypesPage from "../admin/pages/manage-suite";
import { appRoutePaths } from "../config/routePaths";
import AddSuiteTypePage from "../admin/pages/manage-suite/AddSuiteTypePage";
import SuiteTypeDetailPage from "../admin/pages/manage-suite/SuiteTypeDetailPage";
import { observer } from "mobx-react-lite";
import { FormDialog } from "../packages/dialogs";

const  AppRoute=observer(()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/suite" element={<SuitePage />} />
        <Route path="/account/verification" element={<ConfirmAccount />} />
        <Route path="/account/passwordreset" element={<Resetpasspage />} />
        <Route
          path="/account/forgotten_credentials"
          element={<ForgottenPassword />}
        />
        <Route
          path="/rooms/results/:startDate/:endDate/:roomtype/:person"
          element={<SearchResult />}
        />
        {/** client auth routes   */}
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/auth/login" element={<LoginPage />}></Route>
        <Route path="/auth/signup" element={<SignUpPage />}></Route>
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
        <Route path="/admin/bookings" element={<BookingsPage />} />
        <Route
          path="/dashboard/settings"
          element={
            <Authcontainer>
              <SettingsPanel />
            </Authcontainer>
          }
        />

        {/* ADMIN ROUTES */}
        <Route path={appRoutePaths.admin.ADMIN_OVERVIEW_PATH} element={<AdminOverviewPage />} />
        <Route path="/admin/suite" element={<AdminSuitePage />} />
        <Route path={appRoutePaths.admin.ADMIN_MANAGE_SUITE_PATH} element={<SuiteTypesPage />} />
        <Route path={appRoutePaths.admin.ADMIN_ADD_SUITE_TYPE_PATH} element={<AddSuiteTypePage />} />
        <Route path={appRoutePaths.admin.ADMIN_SUITE_TYPE_DETAIL_PATH} element={<SuiteTypeDetailPage />} />
        <Route path="/client/conference/booking" element={<ConferenceBook />} />
        <Route
          path="/dashboard/specail_orders"
          element={
            <Authcontainer>
              <SpecialOrderPanel />
            </Authcontainer>
          }
        />
        <Route path="/admin/customers" element={<CustomersPage />} />
        <Route path="/admin/dashboard" element={<SignInAdmin />} />
        <Route path="/rixos/location" element={<Location />} />
      </Routes>
      <FormDialog/>
    </BrowserRouter>
  );
})

export default AppRoute;
