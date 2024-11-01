import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { showToastify } from "./components/utils/reuseable";
import { ClearNotify } from "./services/actions/notification";
import "./components/style/custome.css";
import "./components/style/design.css";

import Resetpasspage from "./components/Front/resetpassword";
import ConfirmAccount from "./components/Front/auth/VerifyAccountPage";
import PaymentSection from "./components/Front/payment";
import {
  AdminLogin,
  AutoLogin,
  CheckLogin,
  getAllUsers,
} from "./services/actions/adminActions";
import Authcontainer from "./components/utils/authuser";
import SearchResult from "./components/Front/searchresult";
import UserPanel from "./components/Front/userprofile";
import SettingsPanel from "./components/Front/profile/settingnav";
import BookingsPanel from "./components/Front/profile/bookingnav";
import AddRoom from "./components/Admin/addrooms";
import TypeDashboard from "./components/Admin/typepanel";
import AddRoomTypes from "./components/Admin/addroomtype";
import AddRoomCategory from "./components/Admin/addromfromcategory";
import Location from "./components/utils/location";

import ConferenceBook from "./components/Front/bookconference";
import ConferenceCheckout from "./components/Front/checkoutconference";
import SpecialOrderPanel from "./components/Front/profile/specialordernav";
import SignInAdmin from "./components/Front/adminlogin";
import Admincontainer from "./components/utils/authadmin";
import ForgottenPassword from "./components/Front/forgotpassword";
import EmployeeDashboard from "./components/Admin/employeepanel";
import AdminRestriction from "./components/utils/adminrestrction";
import { AuthPage, LoginPage, SignUpPage, VerifyAccountPage } from "./components/Front/auth";
import { HomePage } from "./pages/client/home/HomePage";
import { SuitePage } from "./pages/client/SuitePage";
import AdminOverviewPage from "./pages/admin/overview";
import CustomersPage from "./pages/admin/manage-customer";
import AdminSuitePage from "./pages/admin/suite";
import BookingsPage from "./pages/admin/bookings";
import NewSuitePage from "./pages/admin/manage-suite";

function App() {
  const notifications = useSelector((value) => value.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  useEffect(() => {
    dispatch(CheckLogin());
  }, []);


  useEffect(() => {
    dispatch(AdminLogin());
  }, [dispatch]);
  useEffect(() => {
    dispatch(AutoLogin());
  }, [dispatch]);
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
        <Route path="/admin/manage-employee" element={ 
          // <Admincontainer><AdminRestriction><EmployeeDashboard/></AdminRestriction></Admincontainer>
          <EmployeeDashboard/>
          }/>
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

        <Route path="/admin/room_type" element={ <Admincontainer><TypeDashboard /></Admincontainer>} />
        <Route path="/admin/newcategory" element={<Admincontainer><AddRoomTypes /></Admincontainer>} />
        <Route
          path="/admin/newroom_from_category"
          element={<Admincontainer><AddRoomCategory /></Admincontainer>}
        />
        <Route path="/rixos/location" element={<Location />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
