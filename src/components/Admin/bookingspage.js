import React, { useState, useEffect } from "react";
import { Select, MenuItem, IconButton } from "@mui/material";
import {
  CarFrontFill,
  Filter,
  List,
  Person,
  PersonLock,
  UniversalAccess,
  UniversalAccessCircle,
  X,
} from "react-bootstrap-icons";
import RoomBox from "./roombox";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AllOrders, GetAllRooms } from "../../store/actions/datacollection";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { MdNumbers } from "react-icons/md";
const BookingsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllRooms());
  }, [dispatch]);

let totalRevenue=0;
  let currentDate = new Date(Date.now());
  const tomorrowD = new Date(currentDate);
  tomorrowD.setDate(currentDate.getDate() + 1);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: tomorrowD,
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();
  const [roomtype, setroomtype] = useState("Any Room type");
  const OpenCalender = () => {
    setOpenDate(true);
  };
  const CloseCalender = () => {
    if (openDate) {
      setOpenDate(false);
    }
  };
  useEffect(() => {
    dispatch(AllOrders());
  }, [dispatch]);
  const all_orders = useSelector((data) => data.orders);
  return (
    <div className="panel_detail">
      <p className="header-p">Bookings</p>
      <p className="row-styles">
        <Filter /> <span>Filter</span>{" "}
      </p>
      <div className="row-btw">
        <div className="row-styles">
          <FaCalendarAlt color="chocolate" />
          <span
            style={{ marginLeft: "10px" }}
            onClick={OpenCalender}
            className=""
          >
            {`${format(dates[0].startDate, "EE dd yyyy")} to ${format(
              dates[0].endDate,
              "EE dd yyyy"
            )}`}
          </span>
        </div>
        <div id="calender-id">
          {openDate && (
            <div className="fixed-date">
              {" "}
              <span className="closebtnn" style={{ marginLeft: "40px" }}>
                <IconButton onClick={CloseCalender}>
                  <X color="white" size={20} />
                </IconButton>
              </span>
              <DateRange
                editableDateInputs
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="header_search_calender"
                minDate={new Date()}
              />
            </div>
          )}
        </div>
        <div className="row-styles">
          <Select
            style={{
              minWidth: "160px",
              height: "40px",
              fontSize: "14px",
              fontFamily: "Roboto condensed",
              fontWeight: "bold",
              color: "rgb(6, 8, 29)",
            }}
            name="type"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={roomtype}
            onChange={(data) => setroomtype(data.target.value)}
          >
            {" "}
            <MenuItem
              className="roomtype"
              value="Any Room type"
              style={{
                fontSize: "14px",
                fontFamily: "Roboto condensed",
                fontWeight: "bold",
              }}
            >
              Any Room type
            </MenuItem>
            <MenuItem
              value="Family room"
              style={{
                fontSize: "14px",
                fontFamily: "Roboto condensed",
                fontWeight: "bold",
              }}
            >
              Family room
            </MenuItem>
            <MenuItem
              value="Standard suite room"
              style={{
                fontSize: "14px",
                fontFamily: "Roboto condensed",
                fontWeight: "bold",
              }}
            >
              Standard suite room
            </MenuItem>
            <MenuItem
              value="Excecutive suite"
              style={{
                fontSize: "14px",
                fontFamily: "Roboto condensed",
                fontWeight: "bold",
              }}
            >
              {" "}
              Excecutive suite
            </MenuItem>
            <MenuItem
              value="Low budget Room"
              style={{
                fontSize: "14px",
                fontFamily: "Roboto condensed",
                fontWeight: "bold",
              }}
            >
              {" "}
              Low budget Room
            </MenuItem>
          </Select>
          <div className="row-styles">
            <input
              className="input-box"
              type="number"
              name="room_number"
              placeholder="room number"
              min="1"
            />
            <input
              className="input-box"
              style={{ width: "150px" }}
              type="text"
              name="client_name"
              placeholder="client name"
              min="1"
            />
            <input
              className="input-box"
              style={{ width: "150px" }}
              type="text"
              name="order_id"
              placeholder="Order ID"
              min="1"
            />
            <span className="searchbtn">search</span>
            <span className="searchbtn">reset</span>
          </div>
        </div>
      </div>

      <div className="row-styles" style={{ marginTop: "40px" }}>
      <div className="row-styles-hn" style={{ marginRight: "10px" }}>
                  {" "}
                  <span className="b-content">No </span>
                </div>
        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
          <Person size={20} color="chocolate" />{" "}
          <span className="b-header">client name </span>
        </div>
        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
          <MdNumbers size={20} color="chocolate" />{" "}
          <span className="b-header">Room number </span>
        </div>
        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
          <PersonLock size={20} color="chocolate" />{" "}
          <span className="b-header">Order Id</span>
        </div>

        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
          <UniversalAccess size={20} color="chocolate" />{" "}
          <span className="b-header">onboarding Date</span>
        </div>
        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
          <UniversalAccessCircle size={20} color="chocolate" />{" "}
          <span className="b-header">Due Date</span>
        </div>
        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
          <span style={{ color: "chocolate" }}> GH₵</span>
          <span className="b-header">Price</span>
        </div>
      </div>

      <div className="line"></div>

      {all_orders && all_orders.data
        ? all_orders.data.map((item, index) => {
            return (
              <div
                key={index}
                className="row-styles"
                style={{ marginTop: "5px" }}
              >
               <div className="row-styles-hn" style={{ marginRight: "10px" }}>
                  {" "}
                  <span className="b-content">{index+1} </span>
                </div>
                <div className="row-styles-h" style={{ marginRight: "10px" }}>
                  {" "}
                  <span className="b-content">{item.customername} </span>
                </div>
                <div className="row-styles-h" style={{ marginRight: "10px" }}>
                  {" "}
                  <span className="b-content">{item.room_number} </span>
                </div>
                <div className="row-styles-h" style={{ marginRight: "10px" }}>
                  {" "}
                 
                  <span className="b-content">{item.orderId}</span>
                </div>

                <div className="row-styles-h" style={{ marginRight: "10px" }}>
                  {" "}
                 
                  <span className="b-content">
                    {format(new Date(item.from), "EE dd yyyy")}
                  </span>
                </div>
                <div className="row-styles-h" style={{ marginRight: "10px" }}>
                  {" "}
                 
                  <span className="b-content">
                    {format(new Date(item.to), "EE dd yyyy")}
                  </span>
                </div>
                <div className="row-styles-h" style={{ marginRight: "10px" }}>
                  {" "}
                  <span className="b-content">{item.price}</span>
                </div>
              </div>
            );
          })
        : null}
        <div className="row-styles" style={{ marginTop: "40px" }}>
      <div className="row-styles-hn" style={{ marginRight: "10px" }}>
                  {" "}
                
                </div>
        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
          <span className="b-content" style={{color:"chocolate",fontWeight:"bold" }}>Total Revenue </span>
       
        </div>
        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
      
        </div>
        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
       
        </div>

        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
     
        </div>
        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
        
        </div>
        <div className="row-styles-h" style={{ marginRight: "10px" }}>
          {" "}
      
          <span className="b-header">100</span>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
