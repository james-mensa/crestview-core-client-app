import React from "react";
import './style.scss'
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
function RoomSkeleton() {

  return (
    <Box className="Roomcard layoutspacv " onClick={() => {}}>
      <Box  sx={styles.img} alt="" className="card-room-img  animate-pulse" />
        <Box sx={styles.description}  className="room-description  animate-pulse">
          <Box sx={styles.header}/>
          <Box sx={styles.price} className="row-styles  animate-pulse"/>
          <Box sx={styles.details} className="room-card-detail  animate-pulse"/>
      
          <div className="room-card-action">
<Box sx={styles.itemsLayout} className="left-content  animate-pulse">

<div className="row-styles  animate-pulse">
            <Box sx={styles.itemIcon}/>
            <Box style={styles.items} />
            <Box sx={styles.itemIcon}/>
            <Box style={styles.items} />
          </div>
          <div className="row-styles">
          <Box sx={styles.itemIcon}/>
            <Box style={styles.itemsLarge} />
            <Box sx={styles.itemIcon}/>
            <Box style={styles.items} />
          </div>
    
 
          
</Box>
<Box className="animate-pulse" sx={styles.button}
        
          />
        

          </div>
        

     
        </Box>
 
   
     
    </Box>
  );
}

export default RoomSkeleton;


const styles={
    description:{
        display:'flex',
        flexDirection:'column',
        gap:0.5,
    },
    img:{
        backgroundColor:grey[300]
    },
    header:{
        width:100,
        backgroundColor:grey[300],
        height:20

    },
    price:{
        width:200,
        backgroundColor:grey[300],
        height:20
    },
    details:{
        width:'96%',
        backgroundColor:grey[300],
        height:70
    },
    itemIcon:{
        width:20,
        backgroundColor:grey[300],
        height:20
    },
    items:{
        width:100,
        backgroundColor:grey[300],
        height:20
    },

    itemsLarge:{
        width:140,
        backgroundColor:grey[300],
        height:20
    },
    itemsLayout:{
        display:'flex',
        flexDirection:'column',
        gap:0.3,
    },
    button:{
        width:140,
        backgroundColor:grey[300],
        height:40 ,
        borderRadius:1
    }
}