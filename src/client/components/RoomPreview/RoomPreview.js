import { Box, Grid, Stack } from "@mui/material"
import { ImageSlider } from "../RoomImageSlider/PreviewSlider"
import { Label } from "../../../packages/component/Label"
import SeeMore from "../SeeMore"
import AvatarIcon from "../../../packages/AvatarIcon"
import { HorizontalDivider } from "../Divider"
import { useNavigate } from "react-router-dom"
import { RenderViewButton } from "../../../packages/component/Button"

export const RoomPreview=({data})=>{
    const navigate=useNavigate();
    const handlePageNavigate=()=>{
    //   navigate("link")
    }
    return(
        <Box sx={styles.container}>
            <Box sx={styles.card}>
<ImageSlider images={data.pictures}/>
            </Box>

<Box sx={styles.contentContainer}>
    <Label sx={styles.header}>
        {data.name}
    </Label>
    <SeeMore text={data.description} maxLength={200} component={<RenderDetails data={data.amenities}/>}/>
    <Stack direction={'row'} justifyContent={"flex-start"} width={'100%'}>
              <RenderViewButton title={"Book now"} onClick={handlePageNavigate} varient="dark"/>
             </Stack>
    <HorizontalDivider/>
</Box>
        </Box>
    )
}

const RenderDetails=({data})=>{
    return(
        <Box>
             <Grid container spacing={2} sx={styles.layout}>
            {
                data.map((_data,index)=>{
                    return(
                        <Grid item xs={8} sm={4} md={4} key={index}>
                            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                <AvatarIcon icon={_data.icon}/>
                                <Label sx={styles.amenitiesLabel}>{_data.name}</Label>
                            </Stack>
                        
                        </Grid>
                    )
                })
            }
             </Grid>

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
            backgroundColor: 'white',
            width:'100%',
            height:'370px',
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