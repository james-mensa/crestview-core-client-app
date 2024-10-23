import React from "react";

import {Person, StarFill } from "react-bootstrap-icons";
import HotelIcon from '@mui/icons-material/Hotel';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import HvacIcon from '@mui/icons-material/Hvac';
import PersonIcon from '@mui/icons-material/Person';
import './style.scss'
import { Box } from '@mui/material';
import { ColorTheme } from "../style/ColorTheme";
import { AppButton } from "../Button";
import { Label } from "../Label";
function Room(props) {
  const data = props.data;
  console.log({ dataSource:data });


  return (
    <Box sx={styles.container} onClick={() => {}}>
      <img src={data.image} alt="" className="card-room-img"  />
        <Box sx={styles.details} className="room-description">
          <Label sx={styles.roomName}>{data.room_type}</Label>
          <Box className="row-styles">
           {
            [1,2,3].map(()=>{
              return <StarFill size={14} color={ColorTheme.info[100]} />
            })
           }
          </Box>

          <Box className="room-card-action">

<Box className="left-content">

<Box className="row-styles">
           <Box> <PersonIcon  fontSize={"small"} /> </Box>
            <Label sx={styles.indicator}>{data.capacity} Person</Label>
            <HvacIcon fontSize={"small"} />
            <Label sx={styles.indicator}>{data.aircondition ? "Air condition" : "no available"}</Label>
          </Box>
          <Box className="row-styles">
            <FreeBreakfastIcon fontSize={"small"} />
            <Label sx={styles.indicator}> {data.meals}</Label>
<HotelIcon fontSize={"small"}/>
            <Label sx={styles.indicator}>{data.mattress}</Label>
          </Box>
          {data.room_type === "Excecutive suite" ? (
            <Box className="row-styles">
              <DinnerDiningIcon fontSize={"small"}/>
              <Label sx={styles.indicator}> Access to rooftop Bar</Label>
            </Box>
          ) : null}
          
</Box>
<Box sx={styles.rightCard}>
<Label sx={styles.price}>
GH₵ {data.price} 
</Label>
<Label sx={styles.guest}>
for {1} room, {2} nights, {2} guests
</Label>
<Label sx={styles.tax}>
including taxes and fees
</Label>
      

      <AppButton onClick={props.onClick} label={'View details'}/>
</Box>


          </Box>
        

     
        </Box>
    </Box>
  );
}

export default Room;


const styles={
  container:(theme)=>({
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    borderWidth:'1px',
    borderStyle:'solid',
    backgroundColor: ColorTheme.background.light,
    display:'flex', 
    [theme.breakpoints.down('md')]: {
      flexDirection:'column',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderRadius: '10px',
    },
    margin:'10px 0',
    gap:2
  }),

roomName:{
 fontWeight:'600',
 fontSize:'20px'
  },
  cardRoomImg: {
    width: '280px',
    height: 'auto',
    objectFit: 'fill',
  },
  details:{
    display: 'flex',
    flexDirection: 'column',
    fontSize: '15px',
    width: '100%',
    padding: '10px',
    justifyContent: 'space-between',
  },
  rightCard:(theme)=>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    alignItems: 'flex-start',
    },
    
  }),
  price:{
    fontWeight:'600',
    fontSize:'20px'
  },
  guest:{
    fontSize:'14px',
    fontWeight:'600'

  },
  tax:{
   fontSize:'14px',
    fontWeight:'400'
  }
  ,
  indicator:{
    fontSize:'14px',
    fontWeight:'600'
  }
}