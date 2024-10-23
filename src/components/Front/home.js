import React, { useEffect, useState } from "react";

import WhatWeDo from "./whatwedo";
import Testimones from "./testimonies";
import Footer from "./footer.js";
import MobileTopNav from "../utils/mobilenav";
import MenuNav from "./menunav";

import PageBase from "../PageBase.js";
import { DesktopSearch, MobileSearch } from "../Search/index.js";
import { lazyLoad } from "../../libs/viewHelpers.js";
import Rooms from "../../common-ui/Rooms";

const Home = () => {
  const [showmennu, setmenu] = useState(false);
  const showmenu=true
  useEffect(()=>{
    window.addEventListener("scroll",lazyLoad())
   
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
            <MobileTopNav setmenu={setmenu} showmenu={showmenu}/>
            <div className="mobileboxs">
              <MobileSearch />
            </div>
          </div>
        </div>
      </div>

<PageBase>
<Rooms />

<WhatWeDo />
</PageBase>
{/* <Attention /> */}
   
      <Testimones />

<Footer /> 
    </div>
  );
};

export default Home;
