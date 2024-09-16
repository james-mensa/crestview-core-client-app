import { Button as BaseButton } from "@mui/material"
import { ColorTheme } from "../style/ColorTheme"

export const Button=({onClick,label})=>{
    return <BaseButton onClick={onClick} sx={styles.button}>{label}</BaseButton>
}


const styles={
    button:{
        width:'auto',
        backgroundColor:'#1668e3',
        color:'white',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: ColorTheme.button.main,
            color: 'white',
        },
        borderRadius:'20px'

    }
}