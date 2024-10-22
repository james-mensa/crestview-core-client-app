import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetAllRoomTypes } from '../../../services/actions/datacollection';
import { Label } from '../../../components/Label';
import { Box, Grid, Stack } from '@mui/material';
import Room from '../../../components/Room';
import { HorizontalDivider } from '../../../components/Divider';
import RoomSkeleton from '../../../components/Room/skeleton';
import { lazyLoad } from '../../../libs/viewHelpers';
import RoomPreview from '../../../components/RoomPreview';
import { roomsTypeData } from '../../../dummy';
import { CardSlider } from '../../../components/Slider/CardSlider';
function Rooms() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetAllRoomTypes());
    }, [dispatch]);
  
    const room_types = useSelector((item) => item.roomtypes);

    useEffect(()=>{
        window.addEventListener("scroll",lazyLoad())
       
      });
      const loadingSkeletons = Array.from({ length: 4 }); // Number of skeletons to show while loading

      const getCards= roomsTypeData.map((data,index)=>{
        return(
    
            <RoomPreview data={data}/>
        )
    })
      return (
        <div className='roomType' id='roomsCat'>
            <Label sx={styles.headerStyle}> Our Suits</Label>
            <Label sx={styles.subtitle} className='header-style'>
                Discover Your Perfect Stay: Explore Our Top-Rated Rooms and Exclusive Rates for Unforgettable Comfort!
            </Label>
            {/* <Stack 
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
            </Stack> */}

<Box sx={styles.gridContainer}>
    <Box sx={styles.desktopWrapper}>
    <Grid container spacing={2} sx={styles.layout}>
    {
        roomsTypeData.map((data,index)=>{
            return(
                <Grid 
                item xs={11} sm={11} md={6} key={index}
                >
                <RoomPreview data={data}/>
                </Grid>
            )
        })
    }
  <Grid item xs={8}>
 
 </Grid>
</Grid>
    </Box>

<Box sx={styles.mobileWrapper}>
<CardSlider
cards={getCards}
/>
</Box>

</Box>

        </div>
    );
}
export default Rooms

const styles={
    desktopWrapper:(theme)=>({

        [theme.breakpoints.up('sm')]: {
            display:'flex'
        },
        [theme.breakpoints.down('sm')]: {
display:'none'
        }
    }),
    mobileWrapper:(theme)=>({
        [theme.breakpoints.up('sm')]: {
            display:'none'
        },
        [theme.breakpoints.down('sm')]: {
display:'flex'
        }
    }),

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
    },
    gridContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        width:'100%',
    }
}