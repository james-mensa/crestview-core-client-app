import React, { useEffect, useState } from "react";
import { showCoursesm } from "../../../components/utils/reuseable";
import { Footer, DesktopHeader, MobileHeader, PageBase } from "../../../layout";
import MenuNav from "../../../components/Front/menunav";

import Rooms from "../../../common-ui/Rooms";
import { Box } from "@mui/material";
import { Label } from "../../../../packages/component/Label";
import { useSuiteState } from "../../../../hooks/useSuiteTypes";
export const SuitePage = () => {
  const [showmennu, setmenu] = useState(false);
  const [images, setImages] = useState([]);
  const {suiteList}=useSuiteState()

  useEffect(()=>{
    setImages(suiteList.flatMap(item =>item.images))
  },[suiteList])
  const showmenu=true
  useEffect(()=>{
    window.addEventListener("scroll",showCoursesm())
   
  });


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  return (
    <div className="mainLayoutb">
  
        <div
          className="desktop front_home"
          style={{
            backgroundImage:
              `url(${images[currentIndex]})`,
            height: '50vh',
          }}
        >
          <div
            className="imagecover"
            style={{  height: '50vh' }}
          >
            {" "}
       <DesktopHeader/>
       <Box sx={styles.overlay}>
              <Label sx={styles.title}>Our Suite</Label>
            </Box>
          </div>
        </div>
    

      {showmennu ? (
        <div className="mobile">
          <MenuNav setmenu={setmenu} />
        </div>
      ) : null}

      <div className="mobile">
        <div
          className="front_home"
          style={{
            backgroundImage:
            `url(${images[currentIndex]})`,
            height: `50vh`,
          }}
        >
          <Box
            className="imagecover"
            style={{height: `50vh` }}
          >
            {" "}
            <MobileHeader setmenu={setmenu} showmenu={showmenu}/>
            <Box sx={styles.overlay}>
              <Label sx={styles.title}>Our Suite</Label>
            </Box>
          </Box>
        </div>
      </div>
<PageBase>
<Rooms />
</PageBase>
<Footer /> 
    </div>
  );
};

const styles={
  overlay:{
height:'40vh',
display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
  },

title:(theme)=>({
  fontWeight:'600',
  color:'white',
  [theme.breakpoints.up('sm')]: {
    fontSize:50

},
[theme.breakpoints.down('sm')]: {
  fontSize:30
}


  })
}
