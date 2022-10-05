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
import { useLocation } from "react-router";
import { LinkedToolTip } from "../../displayTypes/LinkedToolTip";
import { AvatarMenu } from "./AvatarMenu";
import { HorizontalNavigation } from "./HorizontalNavigation";
import { OnboardingHorizontalNavigation } from "./OnboardingHorizontalNavigation";

//TODO md and beyond change padding and margin outside of design, fix this to requirements
export const Header = (props) => {
  const theme = useTheme();
  const location = useLocation();
  const { isOnboarded, userType, isAuthenticated } = props;

  return (
    <ElevationScroll {...props}>
      <AppBar component="nav" sx={{}}>
        <Toolbar
          sx={{
            display: "flex",
            margin: "auto",
            maxWidth: theme.breakpoints.values.lg,
            width: "100%",
          }}
        >
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
            location.pathname.toLowerCase().includes("profile") ? (
              ""
            ) : (
              <HorizontalNavigation userType={userType} />
            )
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
