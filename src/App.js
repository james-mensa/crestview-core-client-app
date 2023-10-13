import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MyForm from "./components/Front/RegistrationForm";
import Home from "./components/Front/home";
import { showToastify } from "./components/utils/reuseable";
import { ClearNotify } from "./store/actions/notification";
import "./components/style/custome.css";
import "./components/style/design.css";

import Resetpasspage from "./components/Front/resetpassword";
import ConfirmAccount from "./components/Front/confirmAccount";
import PaymentSection from "./components/Front/payment";
import {
  AutoLogin,
  CheckLogin,
  getAllUsers,
} from "./store/actions/adminActions";

import SignInUser from "./components/Front/signin";

import Authcontainer from "./components/utils/authuser";

import LoginReset from "./components/Front/resetpass";
import SearchResult from "./components/Front/searchresult";
import UserPanel from "./components/Front/userprofile";
import SettingsPanel from "./components/Front/profile/settingnav";
import BookingsPanel from "./components/Front/profile/bookingnav";
import AdminDashboard from "./components/Admin/panel";
import PanelRoom from "./components/Admin/panelroom";
import AddRoom from "./components/Admin/addrooms";
import  TypeDashboard from "./components/Admin/typepanel"
import AddRoomTypes from "./components/Admin/addroomtype";
import AddRoomCategory from "./components/Admin/addromfromcategory";
import Location from "./components/utils/location";
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
        <Route path="/" element={<Home />} />

        <Route path="/account/verification" element={<ConfirmAccount />} />
        <Route path="/account/passwordreset" element={<Resetpasspage />} />
        <Route
          path="/rooms/search-results/:startDate/:endDate/:roomtype/:person"
          element={<SearchResult />}
        />

        <Route path="/user/login" element={<SignInUser />}></Route>
        <Route path="/user/Signup" element={<MyForm />}></Route>
        <Route path="/room/payment/:id/:start/:end" element={<PaymentSection />}></Route>
        <Route path="/client/profile" element={<UserPanel />} />
        <Route path="/client/panel/records" element={<BookingsPanel />} />
        <Route path="/client/panel/settings" element={<SettingsPanel />} />
        <Route path="/admin/panel/overview" element={<AdminDashboard />} />
        <Route path="/admin/panel/rooms" element={<PanelRoom/>} />
        <Route path="/admin/panel/addroom" element={<AddRoom/>} />
        <Route path="/admin/panel/room_type" element={<TypeDashboard/>} />
        <Route path="/admin/panel/newcategory" element={<AddRoomTypes/>} />
        <Route path="/admin/panel/newroom_from_category" element={<AddRoomCategory/>} />
        <Route path="/rixos/location" element={<Location/>} />
       
        
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
