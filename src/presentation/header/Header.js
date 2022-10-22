import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

import LoginIcon from "@mui/icons-material/Login";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { HorizontalNavigation } from "../../components/layout/header/HorizontalNavigation";
import { InitialsAvatar } from "../../components/layout/header/InitialsAvatar";
import { OnboardingHorizontalNavigation } from "../../components/layout/header/OnboardingHorizontalNavigation";
import IconMenu from "../iconMenu/IconMenu";
import LinkedToolTip from "../tooltipLink/TooltipLink";

export default function Header(props) {
  const nav = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  const { isOnboarded, userType, isAuthenticated, user, signin, signout } =
    props;

  function menuForUserType() {
    if (userType) {
      return [
        {
          key: "profile",
          label: "Profile",
          action: () => {
            nav("Profile");
          },
        },
        { key: "signout", label: "Sign Out", action: signout },
      ];
    }
    if (user) {
      // only return sign out for users that haven't completed onboarding
      return [{ key: "signout", label: "Sign Out", action: signout }];
    }
    return [{ key: "signin", label: "Sign In", action: signin }];
  }

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
          <IconMenu
            icon={user ? <InitialsAvatar user={user} /> : <LoginIcon />}
            clickHandlerOverride={user ? undefined : signin}
            items={menuForUserType()}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{ marginTop: 4 }}
            name={user ? undefined : "Sign in"}
          />
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
  const noMenuRoutes = ["profile", "proposal"];
  let showMenu = true;
  noMenuRoutes.forEach((route) => {
    if (location.pathname.toLowerCase().includes(route) == true) {
      showMenu = false;
    }
  });

  return showMenu && <HorizontalNavigation userType={userType} />;
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
