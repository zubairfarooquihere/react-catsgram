import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

import classes from "./RouteLayout.module.scss";

function RouteLayout() {
  const [activeTab, setActiveTab] = useState("");

  const layoutFunc = (gotClass) => {
    setActiveTab(gotClass === 'message-active' ? "message-active" : '');
    //setActiveTab("message-active");
  }

  return (
    <div className={classes.RouteLayout}>
      <div className={`${classes.navLocation} ${classes[activeTab]}`}>
        <Navigation layoutFunc={layoutFunc} />
      </div>
      <div className={`${classes.outletLocation} ${classes[activeTab]}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default RouteLayout;
