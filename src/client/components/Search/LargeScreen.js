import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Divider } from "../Divider";
import { Label } from "../../../packages/component/Label";

import { RoomType } from "../RoomType";
import { Filter } from "../Filter";
import { formatDateShort, serializeFilter } from "../../libs/common";
import { ColorTheme } from "../../../style/ColorTheme";
import dayjs from "dayjs";
import { XLDateRangerPicker } from "../../../packages/component/calender/XLDateRangerPicker";

const initialRange= {
  rangeStart: dayjs(),
  rangeEnd: dayjs().add(1,'day'),
  focusDate:null
};

export const LargeScreen = ({showType=false}) => {
  const navigate=useNavigate();
  let currentDate =new Date(Date.now());
  const tomorrowD = new Date(currentDate);
  tomorrowD.setDate(currentDate.getDate() + 1);

  const [dateRange, updateDateRange] =React.useState(initialRange);
  const [filter,setFilter]=useState({
    rooms:1,
    adults:2,
    children:0
  })

  const [roomType, setRoomType] = useState("Any Room type");
  const SearhValues = ()=>{
    const userSelection={
      checkOut:formatDateShort(dateRange.rangeStart),
      checkIn:formatDateShort(dateRange.rangeEnd),
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

      {
        showType && 
      <Box sx={styles.searchItem}>
      <Label sx={styles.roomTypeLabel}>Room type</Label>
        <RoomType onchange={setRoomType} value={roomType}/>
      </Box>
      }
     { showType && <Divider/> }
          <XLDateRangerPicker value={dateRange} label={dateRange.rangeStart} title={"CheckIn"} handleOnchange={updateDateRange}/>
          <Divider/>
          <XLDateRangerPicker value={dateRange} label={dateRange.rangeEnd} title={"CheckOut"} handleOnchange={updateDateRange} isCheckout={true}/>
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
      fontWeight: '600',
        color:ColorTheme.text.label,
   paddingLeft:1.5,    
    },
  label:{
    fontFamily: "Manrope",
    fontWeight: '600',
    color:ColorTheme.text.label,
  },
  title:{
    cursor:'pointer',
    fontFamily: "Manrope",
    fontWeight: '600'

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

