import React from "react";


const PageBase = (props) => {
  return (
<div className="main-content">
{props.children}
    </div>
  );
};

export default PageBase;
