import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BaseCalender } from "../BaseCalender";
import { Divider } from "../Divider";
import { Label } from "../Label";
import { ColorTheme } from "../style/ColorTheme";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { RoomType } from "../RoomType";
import { formatDate } from "../utils/common";
import { Filter } from "../Filter";
import { formatDateShort, serializeFilter } from "../../libs/common";
export const LargeScreen = ({showType=false}) => {
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
  const [filter,setFilter]=useState({
    rooms:1,
    adults:2,
    children:0
  })

  const [isCalenderModalOpen, setIsCalenderModalOpen] = useState(false);
  const handleCalenderModal = () => {

    setIsCalenderModalOpen(!isCalenderModalOpen);
  };


  const [roomType, setRoomType] = useState("Any Room type");
  const SearhValues = ()=>{
    const userSelection={
      checkOut:formatDateShort(date.endDate),
      checkIn:formatDateShort(date.startDate),
      ...filter,
      ...(showType && { type: roomType }),

    }
    const filterString = serializeFilter(userSelection)
    navigate(`/rooms/results/${filterString}`
    )
  }

 
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const handleFilter=()=>{
    setIsFilterVisible(!isFilterVisible);
  }
  return (
    <Box sx={styles.container}>
         <BaseCalender onChange={setDate} value={date} show={isCalenderModalOpen} handleClose={handleCalenderModal}/>

      {
        showType && 
      <Box sx={styles.searchItem}>
      <Label sx={styles.roomTypeLabel}>Room type</Label>
        <RoomType onchange={setRoomType} value={roomType}/>
      </Box>
      }
{  showType && <Divider/> }
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
        <Box sx={styles.guestWrapper} onClick={handleFilter}>
       <Stack direction={'row'} alignItems={"center"} spacing={1} >
        <Label  sx={styles.title}>{`${filter.adults + filter.children} Guests,`}</Label>
       </Stack>
       <Stack direction={'row'} alignItems={"center"} spacing={1}>
       <Label sx={styles.title}>{`${filter.rooms} Room${filter.rooms >1 ?'s':''}`}</Label>
       </Stack>
        </Box>
      <Filter value={filter} setValues={setFilter} isVisible={isFilterVisible} onClose={handleFilter}/>
      </Box>

    
        <button
          style={styles.searchBtn}
          type="button"
          onClick={SearhValues}
        >
          Explore rooms
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
        justifyContent:'space-between',
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
    marginLeft:-1,
    width:'170px',
    cursor:'pointer',
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

