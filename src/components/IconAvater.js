import { ColorTheme } from "./style/ColorTheme"


export const IconAvater=({path})=>{
    return(
<img src={path} alt="avater" style={styles.img}/>
    )
}


const styles={
    img:{
width:40,
height:40,borderRadius:30,
// backgroundColor:ColorTheme.background.light
    }
}