import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Box, Button, IconButton, Stack} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from "react-router-dom";
import { BaseCalender } from "../BaseCalender";
import { Label } from "../Label";
import { ColorTheme } from "../style/ColorTheme";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { RoomType } from "../RoomType";
import { formatDate } from "../utils/common";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { Filter } from "../Filter";
export const SmallScreen = () => {
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
    navigate(`/rooms/results/${date.startDate}/${date.endDate}/${roomType}/${options}`
    )
  }


  const [filter,setFilter]=useState({
    rooms:1,
    adults:1,
    children:0
  })
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const handleFilter=()=>{
    setIsFilterVisible(!isFilterVisible);
  }
  return (
    <Box sx={styles.container}>
         <BaseCalender onChange={setDate} value={date} show={isCalenderModalOpen} handleClose={handleCalenderModal}/>

    
      <Box sx={styles.searchItemType}>
      <Label sx={styles.roomTypeLabel}>Room type</Label>
        <RoomType onchange={setRoomType} value={roomType}/>
      </Box>
      <Box sx={styles.searchItem} onClick={handleCalenderModal}>
        <Label sx={styles.label}>Checkin</Label>
        <Label sx={styles.title}>
              {formatDate(date.startDate)} <ArrowRightAltIcon  color="action"/> {formatDate(date.endDate)}
              <KeyboardArrowDownIcon color={'action'} sx={styles.dateArrow}/> 
        </Label>       
      
      </Box>

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

    
        <Button
          sx={styles.searchBtn}
          type="button"
          onClick={() => {
            SearhValues()
          }}
        >
          Search
        </Button>
   
    </Box>
  );
};



const styles={
    container:{
        display: 'flex',
        flexDirection: 'column',
        width:'90%',
        alignItems: 'center',
        borderRadius: '5px',
        gap:2,
        padding:'0px 15px',
        backgroundColor: 'transparent',
        
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

  },
  searchBtn:(theme)=>( {
    fontFamily: "Manrope",
    fontWeight: '600',
    backgroundColor: ColorTheme.grey[100],
    borderRadius: 3,
    color: ColorTheme.button.dark,
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
      padding:1,
      width:'100%',
    },
    [theme.breakpoints.up('sm')]: {
      width:'60%',
      padding:2,
    },  
  
  }),
  searchItemType:(theme)=>({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:ColorTheme.background.light,
    borderRadius:'15px',
    borderWidth:'1px',
    borderColor:ColorTheme.grey[100], 


    
    overFlow:'hidden',
    [theme.breakpoints.down('sm')]: {
      padding:1,
      width:'100%',

    },
    [theme.breakpoints.up('sm')]: {
      width:'60%',
      padding:2,
    },  
}),
  searchItem:(theme)=>({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:ColorTheme.background.light,
    borderRadius:'15px',
    borderWidth:'1px',
    borderColor:ColorTheme.grey[100], 
    
    overFlow:'hidden',
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      padding:'10px 20px',

    },
    [theme.breakpoints.up('sm')]: {
      width:'60%',
      padding:2,
    },
  
    
}),
dateArrow:{
  marginLeft:1
}

}

