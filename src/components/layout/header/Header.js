import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

import React from "react";
import { LinkedToolTip } from "../../displayTypes/LinkedToolTip";
import { AvatarMenu } from "./AvatarMenu";
import { HorizontalNavigation } from "./HorizontalNavigation";
import { OnboardingHorizontalNavigation } from "./OnboardingHorizontalNavigation";

export const Header = (props) => {
  const theme = useTheme();
  const { isOnboarded, userType, isAuthenticated } = props;

  return (
    <ElevationScroll {...props}>
      <AppBar component="nav">
        <Toolbar sx={{ display: "flex" }}>
          <LinkedToolTip
            title="Home"
            route="/"
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
          >
            <Typography variant="h6" component="div">
              Pinfluencer
            </Typography>
          </LinkedToolTip>
          <Box flex={1}></Box> {/**GapBox*/}
          <AvatarMenu />
        </Toolbar>
        {isAuthenticated &&
          (isOnboarded ? (
            <HorizontalNavigation userType={userType} />
          ) : (
            <OnboardingHorizontalNavigation />
          ))}
      </AppBar>
    </ElevationScroll>
  );
};

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    sx: {
      backgroundColor: "rgba(255,255,255,0.96)",
      borderBottom: (theme) =>
        trigger ? "" : "1px solid " + theme.palette.divider,
      color: (theme) => theme.palette.primary.main,
    },
    elevation: trigger ? 1 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
