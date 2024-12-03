import { Box, Stack } from '@mui/material';
import './styles.css';
import React, { useEffect, useState } from 'react';
import { Label } from '../../../packages/component/Label';
import { dummyData } from '../../../dummy';
import { ImageSlider } from '../RoomImageSlider/PreviewSlider';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const ItemTransition = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
const itemsList=dummyData.itemsList 
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? itemsList.length - 1 : prevIndex - 1));
    };
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === itemsList.length - 1 ? 0 : prevIndex + 1));
    };

  const images=itemsList.map((item) =>item.image);
  const navigate=useNavigate();
  const handlePageNavigate=()=>{
    navigate('/suite')
  }
    return (
      <Box sx={styles().container} id={"about_us_div"}>
        <Box sx={styles().layout}>
            <Box>
                <Label sx={styles().header}>Welcome to  Crestview Lodge, </Label>
                <Label sx={styles().header}> We're all in on choice, quality and extraordinary experiences.</Label>
                <Label  sx={styles().subHeader}>The ALL Inclusive Collection. All in. All for you. </Label>
            </Box>
            
            <ImageSlider autoPlayInterval={10000} images={images} nextOnclickCallback={handleNext} prevOnClickCallBack={handlePrev}/>
            <Box sx={styles().desktopButton}>
            <RenderViewButton title={"View all suite"} onClick={handlePageNavigate}/>
            </Box>
        </Box>
        <Box sx={styles().itemWrapper}>
          {itemsList.map((item, index) => {
            const position = index - currentIndex;
            const distanceFromCurrent = Math.abs(index - currentIndex);
            const isCurrent = index === currentIndex;
            
            return (
              <Stack
                key={index} className={`item ${isCurrent ? 'current' : ''}`} sx={styles(position,isCurrent,distanceFromCurrent).item} gap={1} >
                <Box sx={styles(position,isCurrent,distanceFromCurrent).title}>
                {item.title.split('\n').map((line, lineIndex) => (
                  <Label sx={styles(position,isCurrent,distanceFromCurrent).title} key={lineIndex}>{line}</Label>
                ))}
                 </Box>
                <Label sx={styles(position,isCurrent,distanceFromCurrent).description}>{item.description}</Label>
              </Stack>
            );
          })}
        </Box>

        <Box sx={styles().mobileButton}>
   <RenderViewButton title={"View all suite"} onClick={handlePageNavigate}/>
   </Box>
      </Box>
    );
};

export default ItemTransition;


const RenderViewButton=({onClick,title})=>{
    return(
        <button onClick={onClick} style={buttonStyles.button}>
         <Label sx={{fontWeight:'600'}}> {title}</Label>
        </button>
    )
}
const buttonStyles={
button:{
        backgroundColor: grey[100],
        borderRadius:0,
        padding:'10px 20px',
        marginTop: 20
    },
 
}
const styles=(position,isCurrent,distanceFromCurrent)=>{
    return{

        desktopButton:(theme)=>({
            marginBottom:2,
            [theme.breakpoints.down('sm')]: {
                    display:'none'
            },
        }),
        mobileButton:(theme)=>({
            display:'flex',
            flexDirection:'row',
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            margin:'20px 0',
            [theme.breakpoints.up('sm')]: {
              display:'none',

            },

        }),
        container:(theme)=>({
            marginTop:-2.5,
            display:"flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            background: 'rgb(7,1,36)',
            background: 'linear-gradient(90deg, rgba(7,1,36,1) 10%, rgba(3,12,37,1) 50%)',
            [theme.breakpoints.up('sm')]: {
                flexDirection: "row",

            },
            [theme.breakpoints.down('sm')]: {
       
                flexDirection: 'column',
            },


        }),
        layout:(theme)=>({
            [theme.breakpoints.up('sm')]: {
                width: '600px',
                marginTop:10,
            },
            [theme.breakpoints.down('sm')]: {
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding :2
            },

        }),
        header:(theme)=>({
            color:grey[500],
            [theme.breakpoints.up('sm')]: {
                fontSize:'25px',
                fontWeight:'500',       
            },
            [theme.breakpoints.down('sm')]: {
                fontSize:'20px',
                fontWeight:'600'
            },

        }),
        subHeader:(theme)=>({
            color:grey[100],
            [theme.breakpoints.up('sm')]: {
                fontSize:'25px',
                fontWeight:'400',
                marginBottom:2
            },
            [theme.breakpoints.down('sm')]: {
                fontSize:'18px',
                fontWeight:'400',
                margin:'10px 0'
            },

        }),
        itemWrapper:(theme)=>({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            [theme.breakpoints.up('sm')]: {
                width: '500px',
            },
            [theme.breakpoints.down('sm')]: {
                width: '100vw',
                height:'180px',
                flexDirection: 'row',
            },

        }),
        item:(theme)=>({
                color: isCurrent ? 'red' : 'black',
                opacity: isCurrent ? 1 : `${1 - distanceFromCurrent * 0.3}`,
                position: 'absolute',
                transition: 'transform 0.5s ease, opacity 0.5s ease, font-size 0.5s ease', 
                display:'flex',
                flexDirection:'column',
                [theme.breakpoints.up('sm')]: {
                    transform: `translateY(${position * 120}px)`, 
                    alignItems:'center',
                },
                [theme.breakpoints.down('sm')]: {
                    width:'70%',
                    transform: `translateX(${position * 305}px)`,
                },
         }),
         title:(theme)=>({
            fontWeight:'600',
            display:'flex',
            transition: 'transform 0.3s ease, opacity 0.5s ease, font-size 0.5s ease', 
            flexDirection:'column',
            color:grey[200],
            [theme.breakpoints.up('sm')]: {
                fontSize: isCurrent ? '50px' : '20px',
                justifyContent:'center',
                alignItems:'center',
                lineHeight:isCurrent ? '45px' : '18px',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: isCurrent ? '25px' : '20px',
                justifyContent:'center',
                alignItems:'center',
                lineHeight:isCurrent ? '24px' : '18px',
            },
         }),
         description:(theme)=>({
            display:'flex',
            transition: 'transform 0.3s ease, opacity 0.5s ease, font-size 0.5s ease', 
            textAlign:'center',
            color:grey[300],
            [theme.breakpoints.up('sm')]: {
                fontSize: isCurrent ? '18px' : '15px',
                display:isCurrent ? 'flex':'none',
                lineHeight:'17px'
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: isCurrent ? '13px' : '13px',
            
            },
         }),
    }


 
}