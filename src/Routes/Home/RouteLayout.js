import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

import classes from "./RouteLayout.module.scss";

function RouteLayout() {
  return (
    <div className={classes.RouteLayout}>
      <div className={classes.navLocation}>
        <Navigation />
      </div>
      <div className={classes.outletLocation}>
        <Outlet />
      </div>
    </div>
  );
}

export default RouteLayout;
