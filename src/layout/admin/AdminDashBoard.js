import { Box, IconButton } from "@mui/material"

import { Label } from "../../components/Label";
import { blue, grey, red } from "@mui/material/colors";
import { usePathname } from "../../hooks/usePathname";
import { getNavContent } from "./config";
import { useNavigate } from "react-router-dom";
import { Assets } from "../../config/register";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export const AdminDashboard = ({children})=>{
    const navItems=getNavContent().filter((item)=>item.show)
    return(
        <Box sx={styles.container}>
            <Box sx={styles.topNav}>
                <Box sx={styles.topNavLeft}>
                    <img
              alt=""
              src={Assets.crestview}
              style={styles.logoImg}
            />
                </Box>
                <Box sx={styles.topNavRight}>
                    <AlertCard/>
                </Box>
                {/* <IconButton sx={styles.topNavMobileButton}></IconButton> */}
            </Box>
            <Box sx={styles.content}>
                <Box sx={styles.contentNav}>
                    {
                        navItems.map((item,index)=>(
                            <NavItem key={index} icon={item.icon} title={item.title}  path={item.path}/>
                        ))
                    }
                </Box>
                <Box sx={styles.contentBody}>
                {children}
                </Box>
            </Box>
            
        </Box>
    )
}


const NavItem=({icon,title,path})=>{
    const navigate=useNavigate()
    const currentPath=usePathname();
    const isActive=currentPath===path;
    const styles=itemStyles(isActive)
    const handleOnClick=()=>{
        navigate(path)
    }
    return(
        <Box sx={styles.container} onClick={handleOnClick}>
      <Label sx={styles.itemLabel}> {icon}  </Label>   <Label sx={styles.itemLabel}>{title}</Label>
        </Box>
    )
}
const itemStyles=(isActive)=>{
    return{
        container: {
            display:'flex',
            flexDirection:'row',
            backgroundColor:isActive ? grey[200]:'transparent',
            borderRadius:1,
            padding:'5px 10px',
            gap:1.5,
            alignItems: 'center',
            cursor:'pointer',
            transition: 'background-color 0.3s ease',
            '&:hover': {
                backgroundColor: blue[50],
                color: blue[500],
            },
        },
        itemLabel:{
            fontSize:15,
            fontWeight:'500',
            color:isActive ? grey[900]:grey[600],
        }
    }
}



const AlertCard=()=>{
    const styles=alertStyles()
    return(
        <Box sx={styles.container}>
            <NotificationsNoneIcon/>
            <Label sx={styles.alertIndicator}>4</Label>
        </Box>
    )
}
const alertStyles=()=>{
    return{
        container:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            backgroundColor:grey[50],
            borderRadius:3,
            padding:0.5,
            cursor:'pointer',
             userSelect: 'none'
        },
        alertIndicator:{
            backgroundColor:red[500],
            color:grey[50],
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:20,
            height:20,
            position:'absolute',
            marginTop:-1,
            marginLeft:2,
            borderRadius:3,
            fontSize:13
        }
    }
}

const styles={
    container:{

        width:'100%',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        userSelect: 'none'
    },
    topNav:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    width:'100%',
    height:'60px',
    backgroundColor:'blue',
    padding:'5px 20px ',
    alignItems: 'center',

    },
    content:{
        width:'100%',
        height:'calc(100vh - 60px)',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',

    },
    contentNav:{
        width:'270px',
        height:'100%',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        gap:2,
        padding:2,
        borderRightWidth:1,
        borderRightStyles:'dashed',
        borderRightColor:grey[400]

    },
    contentBody:{
        width:'calc(100% - 270px)',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        gap:10,
        padding:10,
        overflowY:'auto',
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch',

    }
    ,
    topNavLeft:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    logoImg:{
        width:'auto',
        height:30,
    },
    topNavRight:{

    }
}