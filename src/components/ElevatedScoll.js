import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import React from "react";
import { FullMenuBar } from "./FullMenuBar";
import { HamburgerMenu } from "./HamburgerMenu";
import PropTypes from "prop-types";

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
export const ElevatedScoll = (props) => {
  const { navItems, handleDrawerToggle } = props;
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          color="transparent"
          sx={{
            backdropFilter: "blur(20px)",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Toolbar>
            <HamburgerMenu handleDrawerToggle={handleDrawerToggle} />
            <FullMenuBar navItems={navItems} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* Duplicated toolbar, see mui recommendation. Basically gives space below */}
      <Toolbar />
    </React.Fragment>
  );
};
