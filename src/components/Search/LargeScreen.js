import React, { useState } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BaseCalender } from "../BaseCalender";
import { Divider } from "../Divider";
import { Label } from "../Label";
import { ColorTheme } from "../style/ColorTheme";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { RoomType } from "../RoomType";
import { formatDate } from "../utils/common";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export const LargeScreen = () => {
  const navigate=useNavigate();
  let currentDate =new Date(Date.now());
  const tomorrowD = new Date(currentDate);
  tomorrowD.setDate(currentDate.getDate() + 1);
  const [date, setDate] = useState(
    {
      startDate: new Date(),
      endDate: tomorrowD,
      key: "selection",
    },
  );

  const [options, setOptions] = useState(1);


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

  const [isCalenderModalOpen, setIsCalenderModalOpen] = useState(false);
  const handleCalenderModal = () => {
    console.log({date})
    setIsCalenderModalOpen(!isCalenderModalOpen);
  };


  const [roomType, setRoomType] = useState("Any Room type");
  const SearhValues = ()=>{
    navigate(`/rooms/search-results/${date.startDate}/${date.endDate}/${roomType}/${options}`
    )
  }
  return (
    <Box sx={styles.container}>
         <BaseCalender onChange={setDate} value={date} show={isCalenderModalOpen} handleClose={handleCalenderModal}/>

      
      <Box sx={styles.searchItem}>
      <Label sx={styles.roomTypeLabel}>Room type</Label>
        <RoomType onchange={setRoomType} value={roomType}/>
      </Box>
<Divider/>
      <Box sx={styles.searchItem} onClick={handleCalenderModal}>
        <Label sx={styles.label}>CheckIn</Label>
        <Label sx={styles.title}>
              {formatDate(date.startDate)}
              <KeyboardArrowDownIcon color={'action'} /> 
        </Label>       
      
      </Box>
      <Divider/>
      <Box sx={styles.searchItem} onClick={handleCalenderModal}>
        <Label sx={styles.label}>CheckOut</Label>
        <Label sx={styles.title}>
              {formatDate(date.endDate)}
              <KeyboardArrowDownIcon color={'action'} /> 
        </Label>       
      
      </Box>
      <Divider/>
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
            SearhValues()
          }}
        >
          Search
        </button>
   
    </Box>
  );
};


const styles={
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '5px',
        gap:6,
        padding:'0px 15px',
        height: '80px',
        backgroundColor: ColorTheme.background.light,
        marginBottom: '-50px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        zIndex:99
    },
    roomTypeLabel:{
      fontFamily: "Manrope",
      fontWeight: '700',
        color:ColorTheme.text.label,
   paddingLeft:1.5,    
    },
  label:{
    fontFamily: "Manrope",
    fontWeight: '700',
    color:ColorTheme.text.label,
   
  },
  title:{
    cursor:'pointer',
    fontFamily: "Manrope",
    fontWeight: '700'

  }
  ,
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
  
  },
  searchItem:{
    display: 'flex',
    flexDirection: 'column',
    
},
}

