import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { GetAllRoomTypes } from '../services/actions/datacollection';
import { Label } from '../components/Label';
import { Box, Grid, } from '@mui/material';
import { lazyLoad } from '../libs/viewHelpers';
import { roomsTypeData } from '../dummy';
import  RoomPreview  from '../components/RoomPreview';
import { CardSlider } from '../components/Slider/CardSlider';

function Rooms() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetAllRoomTypes());
    }, [dispatch]);
  
    useEffect(()=>{ window.addEventListener("scroll",lazyLoad()) });
      const loadingSkeletons = Array.from({ length: 4 }); // Number of skeletons to show while loading
      const getCards= roomsTypeData.map((data,index)=>{
        return( <RoomPreview data={data}/> )
    })
      
    return (
        <div className='roomType' id='roomsCat'>
            <Label sx={styles.headerStyle}> Our Suits</Label>
            <Label sx={styles.subtitle} className='header-style'>
                Discover Your Perfect Stay: Explore Our Top-Rated Rooms and Exclusive Rates for Unforgettable Comfort!
            </Label>
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
                        )})
                    }
                </Grid>
             </Box>
                <Box sx={styles.mobileWrapper}><CardSlider cards={getCards}/></Box>
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

    headerStyle:(theme)=>({
        fontWeight:'600',
        fontSize:30,
        width:'95%',
        [theme.breakpoints.up('sm')]: {
            fontSize:30,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:22,
        }
        }),
    
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