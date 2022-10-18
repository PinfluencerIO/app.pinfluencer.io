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
import { LinkedToolTip } from "../../components/displayTypes/LinkedToolTip";
import { AvatarMenu } from "../../components/layout/header/AvatarMenu";
import { HorizontalNavigation } from "../../components/layout/header/HorizontalNavigation";
import { OnboardingHorizontalNavigation } from "../../components/layout/header/OnboardingHorizontalNavigation";

export default function Header(props) {
  const theme = useTheme();
  const location = useLocation();
  const { isOnboarded, userType, isAuthenticated } = props;

  return (
    <ElevationScroll {...props}>
      <AppBar role="navigation" component="nav">
        <Toolbar
          sx={{
            display: "flex",
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
        {getNav(isAuthenticated, isOnboarded, userType, location)}
      </AppBar>
    </ElevationScroll>
  );
}

function getNav(isAuthenticated, isOnboarded, userType, location) {
  if (!isAuthenticated) return;

  if (isOnboarded) {
    return getNavForOnboardedUsers(userType, location);
  }

  return <OnboardingHorizontalNavigation />;
}

function getNavForOnboardedUsers(userType, location) {
  if (!location.pathname.toLowerCase().includes("profile")) {
    return <HorizontalNavigation userType={userType} />;
  }
}

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
