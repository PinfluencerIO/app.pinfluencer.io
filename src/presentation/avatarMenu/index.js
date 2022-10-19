import LoginIcon from "@mui/icons-material/Login";
import { Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { InitialsAvatar } from "../../components/layout/header/InitialsAvatar";

export default function AvatarMenu({ user, signin, signout }) {
  const nav = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event, setting) => {
    setAnchorElUser(null);
    setting && setting.function && setting.function();
  };

  const settings = {
    authenticated: [
      {
        key: "profile",
        label: "Profile",
        function: () => {
          nav("Profile");
        },
      },
      { key: "signout", label: "Sign Out", function: signout },
    ],
    unauthenticated: [{ key: "signin", label: "Sign In", function: signin }],
  };

  function determineTooltip() {
    if (user && "custom:usertype" in user) {
      return "Profile";
    }
    if (user && !("custom:usertype" in user)) {
      return "Sign Out";
    }

    return "Sign In";
  }

  function menuForUserType() {
    if (user && "custom:usertype" in user) {
      return settings.authenticated;
    }
    if (user)
      // only return sign out for users that haven't completed onboarding
      return [
        settings.authenticated.find((setting) => setting.key === "signout"),
      ];
    return settings.unauthenticated;
  }
  return (
    <Box>
      <Tooltip title={determineTooltip()}>
        {user ? (
          <IconButton onClick={handleOpenUserMenu}>
            <InitialsAvatar user={user} />
          </IconButton>
        ) : (
          <IconButton onClick={() => signin()}>
            <LoginIcon />
          </IconButton>
        )}
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {menuForUserType().map((setting) => (
          <MenuItem
            key={setting.key}
            onClick={(event) => handleCloseUserMenu(event, setting)}
          >
            <Box textAlign="center">{setting.label}</Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
