import { Box, Grid, Stack } from "@mui/material"
import { ImageSlider } from "../RoomImageSlider/PreviewSlider"
import { Label } from "../Label"
import SeeMore from "../SeeMore"
import { IconAvater } from "../IconAvater"
import { HorizontalDivider } from "../Divider"

export const RoomPreview=({data})=>{
    return(
        <Box sx={styles.container}>
            <Box sx={styles.card}>
<ImageSlider images={data.pictures}/>
            </Box>

<Box sx={styles.contentContainer}>
    <Label sx={styles.header}>
        {data.name}
    </Label>
    <SeeMore text={data.description} maxLength={200} component={<RenderAmenities data={data.amenities}/>}/>
    <HorizontalDivider/>
</Box>
        </Box>
    )
}

const RenderAmenities=({data})=>{
    return(
    <Grid container spacing={2} sx={styles.layout}>

        {
            data.map((_data,index)=>{
                return(
                    <Grid item xs={8} sm={4} md={4} key={index}>
                        <Stack direction={"row"} alignItems={"center"} spacing={1}>
                            <IconAvater path={_data.icon}/>
                            <Label sx={styles.amenitiesLabel}>{_data.name}</Label>
                        </Stack>
                       
                    </Grid>
                )
            })
        }
    </Grid>
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
            backgroundColor: 'white',
            width:'100%',
            height:'370px',
          },
    }),
    contentContainer:{

    }
    ,header:(theme)=>({
        fontWeight:'700',
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