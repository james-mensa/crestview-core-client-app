import { grey } from "@mui/material/colors"
import { Label } from "./Label"

export const ActionButton=({onClick,title,varient='light'})=>{
    const styles=buttonStyles(varient)
    return(
        <button onClick={onClick} style={styles.button}>
         <Label sx={styles.title}> {title}</Label>
        </button>
    )
  }
  const buttonStyles=(varient)=>{
    return{ 
      button:{
        backgroundColor:varient==='light'? grey[100]:grey[900],
        borderRadius:0,
        padding:'10px 20px',
        height:40,
      
    },

    title:{
    fontWeight:'600',
    color:varient==='light'? grey[800]:grey[100],
  
    }
  }
  
  }
  