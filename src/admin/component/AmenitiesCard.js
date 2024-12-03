
import { Box, IconButton } from "@mui/material"
import { PropTypes } from 'prop-types';
import { Label } from "../../packages/component/Label";
import { Close  } from '@mui/icons-material';  
export const AmenitiesCard=({title,onClick})=>{
    return(
      <Box sx={styles.container}>
  <Label>{title}</Label>
{
    onClick &&
    <IconButton onClick={onClick} sx={styles.closeBtn}>
    <Close fontSize="small" />
 </IconButton>
}
         
      </Box>
    )
  }


  const styles={

    container:{
        position:'relative',
        backgroundColor:'rgba(14, 21, 156,0.1)',
        display:'flex',
        flexDirection:'row',
        padding:'5px 10px',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:10,
  

    }
    ,

    closeBtn:{
        position: 'absolute',
        width:23,height:23,
        top: -5,
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
    }
  }


  AmenitiesCard.prototype={
    title:PropTypes.string.isRequired,
    onClick:PropTypes.func
  }