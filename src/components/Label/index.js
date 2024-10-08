import { Typography } from "@mui/material"
import { ColorTheme } from "../style/ColorTheme"

export const Label=({children,...props})=>{
    return(
        <Typography  {...props}
         sx={[...(Array.isArray(props.sx) ? props.sx : [props.sx]), styles.label]}
         >{children}</Typography>
    )
}


const styles={
    label:{
       
            fontFamily: "Manrope",
        
    }
}