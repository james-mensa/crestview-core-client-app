import { ColorTheme } from "../style/ColorTheme"

export const Divider=()=>{
    return(<div style={styles.divider}/>)
}

const styles={
    divider:{
        width:'1px',
        height:'40px',
        borderRadius:'10px',backgroundColor:ColorTheme.divider.main
    }
}