import { Box, MenuItem, Select } from "@mui/material"
import { Label } from "../Label"
import { ColorTheme } from "../style/ColorTheme"

export const RoomType=({onchange,value})=>{
    return(
    
    
                <Select
        sx={styles.container}
        name="type"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={(data) => onchange(data.target.value)}
      >
        {
        contents.map((data,index)=>{
            return(
                <MenuItem
                key={index}
                className="roomtype"
                value={data.value}
                style={styles.label}
              >
              {data.label}
              </MenuItem>
            )
        })
    }   
      </Select>
     
    
    )
}

const styles={
    layout:{
        display:'flex',
        flexDirection:"column",
    },
    title:{
        fontSize:'14px',
        color:ColorTheme.text.label
    },
container:{
    width: "205px",
    height: "40px",
    fontFamily: "Manrope",
    fontWeight: '600',
    color: "rgb(6, 8, 29)",
    borderWidth:0,
    boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0,
       
     } 


},
label:{
    fontSize: "14px",
    fontFamily: "Roboto condensed",

  }
}

const contents=[
    {value:"Any Room type",label:"Any room"},
    {value:"family room",label:"family room"},
    {value:"standard suite room",label:"standard suite room"},
    {value:"excecutive suite",label:"excecutive suite"},
    {value:"low budget Room",label:"low budget Room"},
]