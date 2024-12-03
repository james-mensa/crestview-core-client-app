import { useEffect } from 'react';
import './BaseCalender.css';
import { DateRange } from 'react-date-range';

import { Box } from '@mui/material';
import { Button } from '../../../packages/component/Button';
// import { DateRangerPicker } from '../../../packages/component/calender';

export const BaseCalender = ({ value, onChange,show,handleClose }) => {

  // Disable scrolling when the calendar is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  if (!show) {
    return null;
  }

 

  const handleWrapperClick = (e) => {
    // Prevent click event from propagating to the parent container
    e.stopPropagation();
  };

  return (
    <Box className="calender-container" sx={styles.container} onClick={handleClose} >
     <div className='calender-wrapper' onClick={handleWrapperClick}> 
    {/**
     *      <DateRange
        editableDateInputs
        onChange={(item) => onChange(item.selection)}
        moveRangeOnFirstSelection={false}
        ranges={[value]}
        className="calender"
        minDate={new Date()}
      />
     */}
     {/* <DateRangerPicker/> */}

      <div className='calender-close'>
        <div>
        <Button label={"Done"} onClick={handleClose}/>
        </div>
     
      </div>
  
     </div>
  
    </Box>
  );
};

const styles = {
  container:(theme)=>({
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'rgba(29, 30, 31,0.6)',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'rgba(29, 30, 31,0.4)',
    },  
}),
};
