import { ColorTheme } from "../../../style/ColorTheme"

export const Divider=()=>{
    return(<div style={styles.divider}/>)
}

export const HorizontalDivider=()=>{
    return(<div style={styles.horizonalDivider}/>)
}
const styles={
    divider:{
        width:'1px',
        height:'40px',
        borderRadius:'10px',backgroundColor:ColorTheme.divider.main
    },
    horizonalDivider:{
        width:'100%',
        height:'1px',
        borderRadius:'10px',backgroundColor:ColorTheme.divider.main
    }
}