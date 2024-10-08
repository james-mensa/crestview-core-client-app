import React, { useEffect } from 'react';

import Room from '../Room/index';
import { useDispatch, useSelector } from "react-redux";
import { GetAllRoomTypes } from '../../../store/actions/datacollection';
import SkeletonLoadingCards from '../../skeletonLoading/SkeletonLoadingCards';
import { showCoursesm } from '../../utils/reuseable';
import { Box, Stack, Typography } from '@mui/material';
import RoomSkeleton from '../Room/skeleton';
import { useNavigate } from 'react-router-dom';
import { Label } from '../../Label';
import { HorizontalDivider } from '../../Divider';

function Rooms() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetAllRoomTypes());
    }, [dispatch]);
  
    const room_types = useSelector((item) => item.roomtypes);

    useEffect(()=>{
        window.addEventListener("scroll",showCoursesm())
       
      });
      const loadingSkeletons = Array.from({ length: 4 }); // Number of skeletons to show while loading

      return (
        <div className='roomType' id='roomsCat'>
            <Label sx={styles.headerStyle}> Our Suits</Label>
            <Label sx={styles.subtitle} className='header-style'>
                Discover Your Perfect Stay: Explore Our Top-Rated Rooms and Exclusive Rates for Unforgettable Comfort!
            </Label>
            <Stack 
            direction={"column"}
            spacing={2.5}
            sx={styles.list}
            >
                {room_types && room_types.data ? (
                    room_types.data.map((item, index) => (
                        <Stack 
                        spacing={2.5}
                        direction={"column"}
                        key={index}>
                            <Room 
                            data={item}
                            onClick={()=> navigate(`/rooms/results/undefined/undefined/${item.room_type}/1`)}
                             /> 
                             {
                                index !==room_types.data.length-1 &&
                                <HorizontalDivider/>
                             }
                             
                        </Stack>
                    ))
                ) : (
                    // Render loading skeletons
                    loadingSkeletons.map((_, index) => (
                        <div key={index}>
                            <RoomSkeleton />
                        </div>
                    ))
                )}
            </Stack>
        </div>
    );
}
export default Rooms

const styles={
    headerStyle:{
fontWeight:'700',
fontSize:30,
width:'95%'

    },
    subtitle:{
      marginBottom:3,
      width:'95%'
    },
    list:{
width:'95%',
justifyContent:"center",
    }
}