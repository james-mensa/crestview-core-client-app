import { Avatar, Button as BaseButton ,CircularProgress} from "@mui/material"
import { ColorTheme } from "../style/ColorTheme"
import { Label } from "../../../packages/component/Label"
import { blue, grey } from "@mui/material/colors"
import "./button.css"
export const Button=({onClick,label})=>{
    return <BaseButton onClick={onClick} sx={styles.button}>{label}</BaseButton>
}



export const AppButton=({onClick,label})=>{
    return (
        <button
        style={styles.appButton}
       type="button"
       onClick={onClick}
     >
        
       <Label sx={styles.label}> {label}</Label>
     </button>
    )
}


export const InfoButton=({onClick,label})=>{
    return (
        <button
        style={styles.infoButton}
       type="button"
       onClick={onClick}
     >
       <Label sx={styles.label}> {label}</Label>
     </button>
    )
}



export const AuthButton=({onClick,label,loading})=>{
    return (
        <button
        style={styles.infoButton}
       type="button"
       onClick={onClick}
     >
          {loading ? 
          <CircularProgress size={20} sx={{color:ColorTheme.background[150]}}/>
            :
       <Label sx={styles.label}> {label}</Label>
          }
     </button>
    )
}







export const PlainButton = ({ title, onClick, varient='light' }) => {
  const bstyles =plainButtonStyle(varient)
  return (
    <button sx={bstyles.button} onClick={onClick} className="plain-button">
      <Label sx={styles.label}> {title}</Label>
    </button>
  );
};


const plainButtonStyle=(varient)=>{

return {
button:{
height:300
},
label:{
  color:varient==="light" ?'white' :grey[900]
}
}
}

export const ProviderButton=({onClick,label,icon,loading})=>{
    return (
        <button
        style={styles.providerButton}
       type="button"
       onClick={onClick}
     >
        
          {loading ? 
          <CircularProgress size={20} />
            :
       <>
        <Avatar alt="image" src={icon} sx={{ width: 25, height: 25, marginRight: 1 }} />
      <Label sx={styles.providerText}> {label}</Label>
       </>     
      
          }
     </button>
    )
}


export const RenderViewButton=({onClick,title,varient='light'})=>{
  const styles=buttonStyles(varient)
  return(
      <button onClick={onClick} style={styles.button}>
       <Label sx={styles.title}> {title}</Label>
      </button>
  )
}

export const MobileButton=({onClick,title,varient='light'})=>{
  const styles=buttonStyles(varient)
  return(
      <button onClick={onClick} style={styles.smallButton}>
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
      marginTop: 20
  },
  smallButton:{
    backgroundColor:varient==='light'? grey[100]:grey[900],
    borderRadius:0,
    padding:'5px 10px',
  },
  title:{
  fontWeight:'600',
  color:varient==='light'? grey[800]:grey[100],

  }
}

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

    },
    appButton:{
       
            backgroundColor: ColorTheme.button.dark,
            borderRadius: '5px',
            color: 'white',
            padding: '10px',
            marginTop:10
         
    },
    infoButton:{
        backgroundColor: blue[700],
        borderRadius: '5px',
        color: 'white',
        padding: '10px',
        marginTop:10
    },

    providerButton:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderColor:  blue[300],
        borderRadius: 8,
        padding: "5px 15px",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 22px 70px 4px",
        textTransform: "none",
        borderWidth: '1px',
        borderStyle: "solid",
        width:'150px',
        cursor:'pointer'
    },
    providerText:{
        fontWeight:'600',
        fontSize:'15px',
          cursor:'pointer'
    },
    label:{
        fontWeight: '600',
        fontSize:'16px',
        color:ColorTheme.text.light[100]
    },



    pageButton: (theme) => ({
        width: "100%",
        height: "40px",
        backgroundColor: 'transparent',
        borderColor: theme.palette.mode === 'dark' ? blue[300] : blue[300],
        borderRadius: 4,
        padding: "5px 15px",
        boxShadow: "rgba(0, 0, 0, 0.26) 0px 22px 70px 4px",
        textTransform: "none",
        borderWidth: '1px',
        borderStyle: "solid"
      }),
      pblabel: (theme) => ({
        fontSize: 13,
        fontWeight: 600,
        // color: theme.palette.mode === "dark" ? grey[100] : blue[900],
      }),
}




