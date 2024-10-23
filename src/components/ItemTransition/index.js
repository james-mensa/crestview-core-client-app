import { Box, Stack } from '@mui/material';
import './styles.css';
import React, { useState } from 'react';
import { Label } from '../Label';

const ItemTransition = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            title:"Exceptional \nfood and drink",
            description:"From sourcing fresh ingredients to the inventiveness of our chefs to the range of options across different cuisines, we make every meal a profound pleasure."
        },
        {
            title:"Family fun",
            description:"We create extraordinary family experiences. Our fully supervised kids clubs allow kids to learn, have fun and make friends while you unwind."
        },
        {
            title:"A world of sports \n and activity",
            description:"Chill out with yoga, raise your heart rate in our gyms, stretch your legs on the golf course or take to the air on a kite surf. You set your limits... if you have them."
        },
        {
            title:"World class \nspa and wellness",
            description:"From beauty treatments to saunas, steam rooms and spa baths to massages and reflexology: get pampered and feel wonderful in exactly the way you want."
        },
        {
            title:"Unforgettable \ndestinations",
            description:"Ideally situated in stunning mountain scenery, in areas of natural beauty, on golden beaches, and along idyllic coastlines, our carefully curated resorts make the most of their setting."
        },
        {
            title:"Spectacular \nentertainment",
            description:"Shows, spectacles and performances: from larger scale to more intimate, from music to magic, from dance to humour to regional and international culture. Discover and enjoy, then discover some more."
        }
    ]
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <Box sx={styles().container}>

        <Box sx={styles().itemWrapper}>
          {items.map((item, index) => {
            const position = index - currentIndex;
            const distanceFromCurrent = Math.abs(index - currentIndex);
            const isCurrent = index === currentIndex;
            
            return (
              <Stack
                key={index}
                className={`item ${isCurrent ? 'current' : ''}`}
                sx={styles(position,isCurrent,distanceFromCurrent).item}
                gap={1}

              >
                <Label sx={styles(position,isCurrent,distanceFromCurrent).title}>
                {item.title.split('\n').map((line, lineIndex) => (
                                    <Label sx={styles(position,isCurrent,distanceFromCurrent).title} key={lineIndex}>{line}</Label>
                                ))}
                    </Label>
                <Label sx={styles(position,isCurrent,distanceFromCurrent).description}>{item.description}</Label>
                
            
        
              </Stack>
            );
          })}
        </Box>
        <Stack>
        <button className="nav-button" onClick={handlePrev}>
          Prev
        </button>
        
        <button style={{textAlign:'center'}} className="nav-button" onClick={handleNext}>
          Next
        </button>
        </Stack>

      </Box>
    );
};

export default ItemTransition;


const styles=(position,isCurrent,distanceFromCurrent)=>{
    return{

        container:(theme)=>({

        }),
            itemWrapper:(theme)=>({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'rgb(235, 230, 230)',
            [theme.breakpoints.up('sm')]: {
                width: '500px',
                height:' 90vh',
            },
            [theme.breakpoints.down('sm')]: {
                width: '100vw',
                height:' 90vh',
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
                    transform: `translateY(${position * 120}px)`, // Move items left or right
                    alignItems:'center',
                },
                [theme.breakpoints.down('sm')]: {
                    width:'70%',
                    transform: `translateX(${position * 305}px)`, // Move items left or right
                    backgroundColor:isCurrent ?'red' :'green'
                },
         }),
         title:(theme)=>({
            fontWeight:'600',
            display:'flex',
            flexDirection:'column',
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
            textAlign:'center',
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