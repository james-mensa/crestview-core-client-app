import React, { useEffect, useState } from "react";
import { showCoursesm } from "../../../components/utils/reuseable";
import { Footer, DesktopHeader, MobileHeader, PageBase } from "../../../layout";
import MenuNav from "../../../components/Front/menunav";

import Rooms from "../../../common-ui/Rooms";
import { Assets } from "../../../config/register";
import { dummyData } from "../../../dummy";

export const SuitePage = () => {
  const [showmennu, setmenu] = useState(false);
  const showmenu=true
  const suiteImages=dummyData.roomsTypeData.flatMap(room =>room.pictures)
console.log({suiteImages})
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % suiteImages.length);
  };


  return (
    <div className="mainLayoutb">
  
        <div
          className="front_home"
          style={{
            backgroundImage:
              `url(${suiteImages[currentIndex]})`,
            height: '50vh',
          }}
        >
          <div
            className="imagecover"
            style={{  height: '50vh', }}
          >
            {" "}
       <DesktopHeader/>
          
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
            `url(${suiteImages[currentIndex]})`,
            minHeight: `${window.innerHeight}px`,
          }}
        >
          <div
            className="imagecover"
            style={{ minHeight: `${window.innerHeight}px` }}
          >
            {" "}
            <MobileHeader setmenu={setmenu} showmenu={showmenu}/>
          </div>
        </div>
      </div>
<PageBase>
<Rooms />
</PageBase>
<Footer /> 
    </div>
  );
};

