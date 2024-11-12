import { Typography } from "@mui/material"

export const Label=({font,children,...props})=>{
    const styles=getStyles(font)
    return(
        <Typography  {...props}
         sx={[ styles.label,...(Array.isArray(props.sx) ? props.sx : [props.sx])] }
         >{children}</Typography>
    )
}
const getStyles=(font)=>{
return{   
     label:{
            fontFamily: "Clash Grotesk",
            fontWeight:font==="bold"? 700 :font==="semibold" ? 600: 400,
    }
}
}