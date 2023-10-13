import { combineReducers } from "redux";

import notification from "./notification";
import personal from "./personal";

import authuser from "./authuser";
import newroom from "./addroom";
import room from "./room";
import rooms from "./rooms";
import clients from "./allusers";
import bookroom from "./bookroom";
import orders from "./orders";
import orderdetail from "./orderdetail";
import roomtypes from "./roomtypes";
import searchRooms from "./searccards";

const appReducers = combineReducers({
  personal,
  authuser,
  clients,
  notification,
  orders,
  newroom,
  room,
  bookroom,
  rooms,
  orderdetail,
  searchRooms,
 
roomtypes
});

export default appReducers;
