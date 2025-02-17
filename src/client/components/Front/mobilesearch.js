import { IconButton, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { X, XLg } from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";
import { PromptToastify, enableScroll, stayDays } from "../utils/reuseable";
import { FaCalendarAlt, FaCaretLeft, FaCaretRight, FaUserFriends } from "react-icons/fa";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { Clear_SearchBox, GetsearchResult } from "../../services/actions/datacollection";
import { DateRange } from "react-date-range";
const SearchNav = (props) => {

    const dispatch = useDispatch();
    const { startDate, endDate, roomtype, person } = useParams();
    const start_date = decodeURIComponent(startDate);
    const end_Date = decodeURIComponent(endDate);
    const room_type = decodeURIComponent(roomtype);
    const people = decodeURIComponent(person);
    const searchroombox = useSelector((item) => item.searchRooms);
  
    const [dates, setDates] = useState([
      {
        startDate: start_date !== "any" ? new Date(start_date) : Date.now(),
        endDate: end_Date !== "any" ? new Date(end_Date) : Date.now(),
        key: "selection",
      },
    ]);
  
    const [openDate, setOpenDate] = useState(false);
    const [openOption, setOpenOption] = useState(false);
    const [options, setOptions] = useState(parseInt(people));
  
    const handleOptionBtn = (operation) => {
      if (operation === "minus") {
        if (options >= 2) {
          setOptions(options - 1);
        }
      }
      if (operation === "plus") {
        if (options <= 3) {
          setOptions(options + 1);
        }
      }
    };
  
    const OpenCalender = () => {
      setOpenDate(true);
    };
    const CloseCalender = () => {
      if (openDate) {
        setOpenDate(false);
      }
    };
    const navigate = useNavigate();
  
    const [roomtyp, setroomtype] = useState(room_type);
  
    const SearhValues = () => {
      if(stayDays(dates[0].startDate,dates[0].endDate)===0){
        PromptToastify("Please check the date")
      }else{
        
        navigate(
          `/rooms/results/${dates[0].startDate}/${dates[0].endDate}/${roomtyp}/${options}`
        );
      }
     
      dispatch(
        GetsearchResult(
          start_date === "any" ? "any" : dates[0].startDate,
          roomtyp,
          options
        )
      );
    };
  
    useEffect(() => {
      dispatch(
        GetsearchResult(
          start_date === "any" ? "any" : dates[0].startDate,
          roomtyp,
          options
        )
      );
    }, [dispatch]);
  return (
    <div
      className="mainmenu"
      style={{
        minHeight: `${window.innerHeight + 100}px`,
        width: `${window.innerWidth}px`,
      }}
    >
      <div
        className="menu_left"
        style={{ minHeight: `${window.innerHeight}px` }}
      >
        
        <div className="filter-cbox">
            <p>Room Type</p>
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
              value={roomtyp}
              onChange={(data) => {
                setroomtype(data.target.value);
                
              }}
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

            <div className="search_item-c" style={{ marginTop: "30px" }}>
              <p>Stay Duration</p>
              <div className="search_item-d">
                <FaCalendarAlt
                  color="chocolate"
                  className="header_search_icon"
                />
                <span
                  style={{ marginLeft: "10px" }}
                  onClick={OpenCalender}
                  className="header_search_date"
                >
                  {`${format(dates[0].startDate,'EE dd yyyy')} to ${format(
                    dates[0].endDate,
                    'EE dd yyyy'
                  )}`}
                </span>
                {openDate ? (
                  <span className="closebtnn" style={{ marginLeft: "40px" }}>
                    <IconButton onClick={CloseCalender}>
                      <X color="white" size={20} />
                    </IconButton>
                  </span>
                ) : null}
              </div>
              <div id="calender-id">
                {openDate && (
                  <DateRange
                    editableDateInputs
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="header_search_calender"
                    minDate={new Date()}
                  />
                )}
              </div>
            </div>
            <div
              className="search_item"
              onClick={CloseCalender}
              style={{ marginTop: "30px" }}
            >
              <FaUserFriends
                color="chocolate"
                className="header_search_icon_first"
              />

              <span style={{ marginLeft: "10px" }}>Guests</span>
              <div className="choosepeople">
                <IconButton onClick={() => handleOptionBtn("minus")}>
                  <FaCaretLeft color="chocolate" />
                </IconButton>
                <span>{options}</span>
                <IconButton onClick={() => handleOptionBtn("plus")}>
                  <FaCaretRight color="chocolate" />
                </IconButton>
              </div>
            </div>

            <div
              className="search_item"
              onClick={CloseCalender}
              style={{ marginTop: "30px" }}
            >
              <button
                className="header_search_btn"
                type="button"
                onClick={() => {
                  dispatch(Clear_SearchBox())
                  SearhValues();
                }}
              >
                Check availaility
              </button>
            </div>
          </div>
       
      </div>
      <div
        className="menu_right"
        style={{ minHeight: `${window.innerHeight}px` }}
      >
        <div className="menu_right_span">
          <IconButton
            onClick={() => {
              props.setmenu(false);
              enableScroll()
            }}
          >
            <XLg color="white" size={18} />{" "}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
