import PropTypes from "prop-types";

import React from "react";

import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";

import { TopMenuBar } from "./TopMenuBar";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
export const ElevatedAppBar = ({ navItems, handleDrawerToggle }) => {
  return (
    <ElevationScroll>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: (theme) => theme.palette.common.white,
          borderColor: "divider",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <TopMenuBar
            navItems={navItems}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
