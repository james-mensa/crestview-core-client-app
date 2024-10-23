import React, { useEffect, useState } from "react";
import { showCoursesm } from "../../../components/utils/reuseable";
import { Footer, DesktopHeader, MobileHeader, PageBase } from "../../../layout";
import { DesktopSearch, MobileSearch } from "../../../components/Search";
import MenuNav from "../../../components/Front/menunav";
import Testimones from "../../../components/Front/testimonies";
import Rooms from "../../../common-ui/Rooms";
import Facilities from "../../../common-ui/Facilities";
export const HomePage = () => {
  const [showmennu, setmenu] = useState(false);
  const showmenu=true
  useEffect(()=>{
    window.addEventListener("scroll",showCoursesm())
   
  });


  return (
    <div className="mainLayoutb">
      <div className="desktop">
        <div
          className="front_home"
          style={{
            backgroundImage:
              `url("/assets/images/background.jpeg")`,
            minHeight: `${window.innerHeight - 200}px`,
          }}
        >
          <div
            className="imagecover"
            style={{ minHeight: `${window.innerHeight - 200}px` }}
          >
            {" "}
       <DesktopHeader/>
       <DesktopSearch />
          
          </div>
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
              `url("/assets/images/background.jpeg")`,
            minHeight: `${window.innerHeight}px`,
          }}
        >
          <div
            className="imagecover"
            style={{ minHeight: `${window.innerHeight}px` }}
          >
            {" "}
            <MobileHeader setmenu={setmenu} showmenu={showmenu}/>
            <div className="mobileboxs">
              <MobileSearch />
            </div>
          </div>
        </div>
      </div>

<PageBase>
<Rooms />

<Facilities />
</PageBase>
{/* <Attention /> */}
   
      <Testimones />

<Footer /> 
    </div>
  );
};

