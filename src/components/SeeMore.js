import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { Label } from './Label';

const SeeMore = ({ text,maxLength=100 ,component}) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleSeeMore = () => {
    setIsOpen((prev) => !prev);
  };

  // Truncate the text if it's longer than maxLength
  const displayText = isOpen ? text : `${text.slice(0, maxLength)}...`;

  return (
    <Box style={{ textAlign: 'start', marginTop: '20px' }}>
      <Label variant="body1" >
        {displayText}
      </Label>
      {isOpen && component}
      <IconButton variant="contained" sx={{marginLeft:-1}}  color="primary" onClick={toggleSeeMore}>
        <Label sx={styles.toggler}>{isOpen ? 'see less':'see more'}</Label>
      </IconButton>
    </Box>
  );
};

export default SeeMore;


const styles={
    label:{
        fontSize:16,
        fontWeight:500
    },
    toggler:{
        fontWeight:700,color:'#2f3e5e'
    }
}