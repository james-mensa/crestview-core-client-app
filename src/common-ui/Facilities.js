import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { GetAllRoomTypes } from '../services/actions/datacollection';
import { Label } from '../components/Label';
import { Box, Grid, } from '@mui/material';
import { lazyLoad } from '../libs/viewHelpers';
import { facilities } from '../dummy';
import { CardSlider } from '../components/Slider/CardSlider';
import { FacilityPreview } from '../components/FacilityPreview';
import ItemTransition from '../components/ItemTransition';

const Facilities=()=> {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetAllRoomTypes());
    }, [dispatch]);
  
    useEffect(()=>{ window.addEventListener("scroll",lazyLoad()) });
      const loadingSkeletons = Array.from({ length: 4 }); // Number of skeletons to show while loading
      const getCards= facilities.map((data,index)=>{
        return( <FacilityPreview data={data}/> )
    })
      
    return (
        <div className='roomType' id='roomsCat'>
            <Label sx={styles.headerStyle}>  Special offers and Facilities .</Label>
            <Label sx={styles.subtitle} className='header-style'>Embrace the Perfect Blend of Modern Comfort and Natural Serenity in Our Exquisite Spaces.</Label>
            <Box sx={styles.gridContainer}>
             <Box sx={styles.desktopWrapper}>
                <Grid container spacing={2} sx={styles.layout}>
                    {
                    facilities.map((data,index)=>{
                        return(
                            <Grid 
                            item xs={11} sm={11} md={4} key={index}
                            >
                            <FacilityPreview data={data}/>
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
export default Facilities

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