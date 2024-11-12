import { Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { ColorTheme } from '../style/ColorTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSwipeable } from 'react-swipeable';

// CardSlider component
export const CardSlider = ({ cards, autoPlay = true,}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleGestureNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handleGesturePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  // Swipe handlers using react-swipeable
  const handlers = useSwipeable({
    onSwipedLeft: handleGestureNext,
    onSwipedRight: handleGesturePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Optional: to allow mouse swipe as well
  });

  return (
    <Box sx={styles.sliderContainer} {...handlers}>
      <Box sx={{ ...styles.slider, transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <Box key={index} sx={styles.slide}>
            <Box sx={styles.card}>{card}</Box>
          </Box>
        ))}
      </Box>
      {/* Indicators */}
      <Box sx={styles.indicatorContainer}>
        {cards.map((_, index) => (
          <Box 
            key={index} 
            sx={{ 
              ...styles.indicator, 
              backgroundColor: currentIndex === index ? ColorTheme.dark : ColorTheme.background[150] 
            }} 
          />
        ))}
      </Box>
    </Box>
  );
};

const styles = {
  sliderContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '100vw',
  },
  slider: {
    display: 'flex',
    width:'90%',
    transition: 'transform 0.5s ease',
  },
  slide: {
    minWidth: '100%',
    maxWidth:'100%',
    boxSizing: 'border-box',
    padding:'0px 20px'
  },
  card: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },


  indicatorContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '10px',
    width: '100%',
  },
  indicator: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    margin: '0 5px',
    transition: 'background-color 0.3s',
    backgroundColor:'red'
  },
};
