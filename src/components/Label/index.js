import { Typography } from "@mui/material"

export const Label=({children,...props})=>{
    return(
        <Typography {...props}>{children}</Typography>
    )
}