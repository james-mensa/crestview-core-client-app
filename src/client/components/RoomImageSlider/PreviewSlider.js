import { Box, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ColorTheme } from '../style/ColorTheme';
// ImageSlider component
export const ImageSlider = ({ images, autoPlay = true, autoPlayInterval = 50000, controller=true,nextOnclickCallback,prevOnClickCallBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval]);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
   if(nextOnclickCallback){ nextOnclickCallback()}
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    if(prevOnClickCallBack){prevOnClickCallBack()}
  };

  return (
    <Box style={styles.sliderContainer}>
      <Box style={{ ...styles.slider, transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Box key={index} style={styles.slide}><img src={image} alt={`Slide ${index}`} style={styles.image} /></Box>
        ))}
      </Box>
    { controller && <IconButton onClick={handlePrev} style={styles.prevButton}><ArrowBackIosIcon/></IconButton> }
    { controller &&<IconButton onClick={handleNext} style={styles.nextButton}><ArrowForwardIosIcon/></IconButton>}
    </Box>
  );
};

const styles = {
  sliderContainer: {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    overflow: 'hidden',
  },
  slider: {
    display: 'flex',
    transition: 'transform 0.5s ease',
  },
  slide: {
    minWidth: '100%',
    boxSizing: 'border-box',
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'block',
  },
  prevButton: {
    position: 'absolute',
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    backgroundColor: ColorTheme.dark[550],
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    paddingLeft:'15px'
    ,
    width: '40px',
    height: '40px',
  },
  nextButton: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: ColorTheme.dark[550],
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
  },
  buttonWrapper:{
    
  }
};

