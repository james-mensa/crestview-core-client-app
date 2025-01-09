import { grey } from "@mui/material/colors"
import { Label } from "./Label"
import { CircularProgress } from "@mui/material"

export const ActionButton=({onClick,title,varient='light',loading})=>{
    const styles=buttonStyles(varient)
    return(
        <button onClick={onClick} style={styles.button}>
          {loading ? <CircularProgress size={14} />
          : <Label sx={styles.title}> {title}</Label> }  
        </button>
    )
  }
  const buttonStyles=(varient)=>{
    return{ 
      button:{
        backgroundColor:varient==='light'? grey[100]:varient==='inactive'?'transparent':varient==='active'? grey[300]: grey[900],
        borderRadius:0,
        padding:'10px 20px',
        height:40,
        minWidth:120
      
    },

    title:{
    fontWeight:'600',
    color:varient==='light'? grey[800]:varient==='inactive'? grey[600]:varient==='active'? grey[600]:grey[100],
  
    }
  }
  
  }
  