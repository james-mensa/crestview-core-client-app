import { useEffect } from 'react';
import { Button } from '../../Button';
import { Box } from '@mui/material';
import { DateRangerPicker } from '../DateRangerPicker';
export const ModalDateRangerPicker = ({ value, onChange,show,handleClose }) => {

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
    <Box  sx={styles.container} onClick={handleClose} >
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
     <DateRangerPicker/>

      <Box sx={styles.calenderAction}>
        <div>
        <Button label={"Done"} onClick={handleClose}/>
        </div>
     
      </Box>
  
     </div>
  
    </Box>
  );
};

const styles = {
  container:(theme)=>({
    top: 0,
    left: 0,
    display: 'flex',
    position:'fixed',
    width: '100% ',
    height: '100vh',
    backgroundColor: 'rgba(29, 30, 31,0.4)',
    zIndex: 10000,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'rgba(29, 30, 31,0.6)',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'rgba(29, 30, 31,0.4)',
    },  
}),
calenderAction:(theme)=>({
  width: '100%',
  padding: '10px 20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'flex-end',
  justifyItems: 'flex-end',
  backgroundColor: 'white',
  borderTopWidth: '1px',
  borderTopStyle: 'solid'
  
})
};
