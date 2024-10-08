import React, { useEffect, useState } from "react";
import Footer from "./footer";
import { Box, Container, IconButton} from "@mui/material";
import { Filter, XLg } from "react-bootstrap-icons";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import { Clear_SearchBox, GetsearchResult } from "../../store/actions/datacollection";
import { PromptToastify, enableScroll, stayDays } from "../utils/reuseable";
import MobileTopNav from "../utils/mobilenav";

import SkeletonLoadingCards from "../skeletonLoading/SkeletonLoadingCards";
import { Label } from "../Label";
import { ColorTheme } from "../style/ColorTheme";
import { RoomType } from "../RoomType";
import { HorizontalDivider } from "../Divider";
import { BaseCalender } from "../BaseCalender";
import { formatDate } from "../utils/common";
import Room from "./Room";
import { AppButton } from "../Button";
const SearchResult = () => {
  const dispatch = useDispatch();
  const { startDate, endDate, roomtype, person } = useParams();
  const start_date = decodeURIComponent(startDate);
  const end_Date = decodeURIComponent(endDate);
  const room_type = decodeURIComponent(roomtype);
  const people = decodeURIComponent(person);
  const searchroombox = useSelector((item) => item.searchRooms);

  let currentDate =new Date(Date.now());
  const tomorrowD = new Date(currentDate);
  tomorrowD.setDate(currentDate.getDate() + 1);
  const [date, setDate] = useState(
    {
      startDate: start_date? new Date(start_date) : Date.now(),
      endDate: end_Date ? new Date(end_Date) :  tomorrowD,
      key: "selection",
    },
  );
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

  const navigate = useNavigate();


  const [roomType, setRoomType] = useState(room_type);
  const SearhValues = () => {
    dispatch(Clear_SearchBox())
    if (stayDays(date.startDate, date.endDate) === 0) {
      PromptToastify("Please check the date");
    } else {
      navigate(
        `/rooms/results/${date.startDate}/${date.endDate}/${roomType}/${options}`
      );
    }

    dispatch(
      GetsearchResult(
        start_date === "any" ? "any" : date.startDate,
        roomType,
        options
      )
    );
  };

  useEffect(() => {
    dispatch(
      GetsearchResult(
        start_date === "any" ? "any" : date.startDate,
        roomType,
        options
      )
    );
  }, [date, dispatch, options, roomType, start_date]);
  const [showmenu, setmenu] = useState(false);

  const [isCalenderModalOpen, setIsCalenderModalOpen] = useState(false);
  const handleCalenderModal = () => {
    setIsCalenderModalOpen(!isCalenderModalOpen);
  };


  if(!searchroombox){
    return <SkeletonLoadingCards />;
  }

  console.log({seletedRoom:roomType})
  return (
        <Container className="main-layout">
               <BaseCalender onChange={setDate} value={date} show={isCalenderModalOpen} handleClose={handleCalenderModal}/>

      <MobileTopNav />
      <Box
        className="mobile"
        style={{ fontFamily: "Roboto condensed", fontSize: "12px" ,flexDirection:"row",alignItems:"center"}}
      >
        <IconButton onClick={() => setmenu(true)}>
          <Filter />
        </IconButton>
        Search Option
      </Box>
      {showmenu ? (
        <Box
          className="mainmenu"
          style={{
            minHeight: `${window.innerHeight + 100}px`,
            width: `${window.innerWidth}px`,
          }}
        >
          <Box
            className="menu_left"
            style={{ minHeight: `${window.innerHeight}px` }}
          >
            <Box className="filter-cbox">
         
          
           
           
            <Box sx={styles.searchItem}>
               <Label sx={styles.label}>Room type</Label>
               <RoomType onchange={setRoomType} value={roomType}/>
           </Box>
           <HorizontalDivider/>

           <Box sx={styles.searchItem} onClick={handleCalenderModal}>
        <Label sx={styles.label}>CheckIn</Label>
        <Label sx={styles.title}>
              {formatDate(date.startDate)}
              <KeyboardArrowDownIcon color={'action'} /> 
        </Label>       
      </Box>
      <Box sx={styles.searchItem} onClick={handleCalenderModal}>
        <Label sx={styles.label}>CheckOut</Label>
        <Label sx={styles.title}>
              {formatDate(date.endDate)}
              <KeyboardArrowDownIcon color={'action'} /> 
        </Label>       
      </Box>
           
           <HorizontalDivider/>
          
           <Box sx={styles.searchItem} >
      <Label sx={styles.label}>Guests</Label>
        <Box sx={styles.guestWrapper}>
          <IconButton sx={styles.guestSelector} onClick={() => handleOptionBtn("minus")}>
            <FaCaretLeft color={ColorTheme.button.dark} />
          </IconButton>
          <span>{options}</span>
          <IconButton sx={styles.guestSelector} onClick={() => handleOptionBtn("plus")}>
            <FaCaretRight color={ColorTheme.button.dark} />
          </IconButton>
        </Box>
      </Box>
      

     
                <button
                   style={styles.searchBtn}
                  type="button"
                  onClick={() => {
                    dispatch(Clear_SearchBox())
                    SearhValues();
                    setmenu(false)
                    enableScroll()
                  }}
                >
                   Explore rooms
                </button>
              
            </Box>
          </Box>
          <Box
            className="menu_right"
            style={{ minHeight: `${window.innerHeight}px` }}
          >
            <Box className="menu_right_span">
              <IconButton
                onClick={() => {
                  setmenu(false);
                  enableScroll();
                }}
              >
                <XLg color="white" size={18} />{" "}
              </IconButton>
            </Box>
          </Box>
        </Box>
      ) : null}

      <Box
        className="roomType-s"
        style={{ minHeight: `${window.innerHeight}px` }}
      >
          <Box sx={styles.dasktopFilterContainer}>
           <Box sx={styles.searchItem}>
               <Label sx={styles.label}>Room type</Label>
               <RoomType onchange={setRoomType} value={roomType}/>
           </Box>
           <HorizontalDivider/>

           <Box sx={styles.searchItem} onClick={handleCalenderModal}>
        <Label sx={styles.label}>CheckIn</Label>
        <Label sx={styles.title}>
              {formatDate(date.startDate)}
              <KeyboardArrowDownIcon color={'action'} /> 
        </Label>       
      </Box>
      <Box sx={styles.searchItem} onClick={handleCalenderModal}>
        <Label sx={styles.label}>CheckOut</Label>
        <Label sx={styles.title}>
              {formatDate(date.endDate)}
              <KeyboardArrowDownIcon color={'action'} /> 
        </Label>       
      </Box>
           
           <HorizontalDivider/>
          
           <Box sx={styles.searchItem} >
      <Label sx={styles.label}>Guests</Label>
        <Box sx={styles.guestWrapper}>
          <IconButton sx={styles.guestSelector} onClick={() => handleOptionBtn("minus")}>
            <FaCaretLeft color={ColorTheme.button.dark} />
          </IconButton>
          <span>{options}</span>
          <IconButton sx={styles.guestSelector} onClick={() => handleOptionBtn("plus")}>
            <FaCaretRight color={ColorTheme.button.dark} />
          </IconButton>
        </Box>
      </Box>
      

<AppButton onClick={ SearhValues} label={"Explore rooms"}/>

         
          </Box>
      

        <Box className="result-box">
          {searchroombox && searchroombox.data ? (
            searchroombox.data.map((data, index) => {
              return (
                <Box key={index}>
                  <Room
                    data={data}
                    onClick={()=>navigate(
                      `/room/payment/${data._id}/${date.startDate}/${date.endDate}`
                    )}
                  />
                  
                </Box>
              );
            })
          ) : (
            <p
              style={{
                fontFamily: "Roboto condensed",
                fontSize: "15px",
                marginTop: "15px",
              }}
            >
              No rooms available
            </p>
          )}
        </Box>
      </Box>
      <Footer />
    </Container>
   

  
  );
};

export default SearchResult;


const styles={
  container:{

  },
  dasktopFilterContainer:(theme)=>({
    borderRadius:5,
    borderWidth:1,
    padding:3,
    gap:2,
    display:'flex',
    flexDirection:'column',
    width:260,
    [theme.breakpoints.down('md')]: {
      display:'none'
    },

  }),
  label:{
    fontFamily: "Manrope",
    fontWeight: '700',
    color:ColorTheme.text.label,
   
  },
  title:{
    cursor:'pointer',
    fontFamily: "Manrope",
    fontWeight: '700'

  },
  searchItem:{

  },
  guestSelector:{
    width:'20px',
    height:'20px',
    padding:0
    },
  guestWrapper:{
    display:'flex',
    flexDirection:'row',
    gap:1,
    alignItems:'center',
    marginLeft:-1
  },
  searchBtn: {
    backgroundColor: ColorTheme.button.dark,
    borderRadius: '5px',
    color: 'white',
    padding: '10px',
    fontWeight: 'normal',
    marginTop:10
  },
}