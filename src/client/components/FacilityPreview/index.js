import { Box,} from "@mui/material"
import { Label } from "../../../packages/component/Label"
import SeeMore from "../SeeMore"

import { HorizontalDivider } from "../Divider"
import { ImageSlider } from "../../../packages/component/RoomImageSlider/PreviewSlider"

export const FacilityPreview=({data})=>{
    return(
        <Box sx={styles.container}>
            <Box sx={styles.card}><ImageSlider images={data.images}/></Box>
            <Box sx={styles.contentContainer}>
                <Label sx={styles.header}>{data.name}</Label>
                <SeeMore text={data.description} maxLength={150} />
                <HorizontalDivider/>
            </Box>
        </Box>
    )
}



const styles={

    container:(theme)=>({
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.up('md')]: {
            width:'95%',
            justifyContent:'space-between'
          },
    }),
    card:(theme)=>({
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'transparent',
            width:'100%',
            height:'280px',
          },
    }),
    contentContainer:{

    }
    ,header:(theme)=>({
        fontWeight:'600',
        [theme.breakpoints.up('sm')]: {
         fontSize:25
          },
    })
,layout:{
    marginTop:3,
    marginBottom:3
},
amenitiesLabel:{
    fontSize:14
}
}