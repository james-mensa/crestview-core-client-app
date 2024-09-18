import React, { useEffect } from 'react';

import Room from '../Room/index';
import { useDispatch, useSelector } from "react-redux";
import { GetAllRoomTypes } from '../../../store/actions/datacollection';
import SkeletonLoadingCards from '../../skeletonLoading/SkeletonLoadingCards';
import { showCoursesm } from '../../utils/reuseable';
import { Typography } from '@mui/material';
import RoomSkeleton from '../Room/skeleton';

function Rooms() {
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
            <h3 className='header-style'> Featured rooms and rate.</h3>
            <Typography sx={styles.subtitle} className='header-style'>
                Discover Your Perfect Stay: Explore Our Top-Rated Rooms and Exclusive Rates for Unforgettable Comfort!
            </Typography>
            <div className='align-grid'>
                {room_types && room_types.data ? (
                    room_types.data.map((item, index) => (
                        <div key={index}>
                            <Room data={item} /> 
                        </div>
                    ))
                ) : (
                    // Render loading skeletons
                    loadingSkeletons.map((_, index) => (
                        <div key={index}>
                            <RoomSkeleton />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
export default Rooms

const styles={
    subtitle:{
        fontFamily: 'Manrope',
    }
}