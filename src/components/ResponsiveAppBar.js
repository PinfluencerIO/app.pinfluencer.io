import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import UserContext from "../context/UserContext";
import { InitialsAvatar } from "./InitialsAvatar";
import LogoHomeLink from "../components/LogoHomeLink";
import { useTheme } from "@mui/material";
import { Button } from "./Button";

const ResponsiveAppBar = () => {
  const { user, signin, signout } = React.useContext(UserContext);

  const settings = {
    authenticated: [
      { key: "signout", label: "Sign Out", function: signout },
      { key: "profile", label: "Profile", function: null },
    ],
    unauthenticated: [{ key: "signin", label: "Sign In", function: signin }],
  };

  const pages = {
    authenticated: {
      brand: ["Dashboard", "Campaigns", "Collaborations"],
      influencer: ["Dashboard", "Collaborations"],
    },
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    console.log("handleCloseNavMenu");
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    setting.function();
  };
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.pinfluencerGreen.contrastText,
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              pt: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <LogoHomeLink />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pagesForUserType().map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Box textAlign="center">{page}</Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              mr: 2,
              pt: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <LogoHomeLink />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pagesForUserType().map((page) => (
              <Button key={page} onClick={handleCloseNavMenu}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={user ? "Profile and Messages" : "Sign in"}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <InitialsAvatar user={user} />
              </IconButton>
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
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Box textAlign="center">{setting.label}</Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

  function menuForUserType() {
    if (user && "custom:usertype" in user) return settings.authenticated;
    if (user)
      return [
        settings.authenticated.find((setting) => setting.key === "signout"),
      ];
    return settings.unauthenticated;
  }

  function pagesForUserType() {
    if (user && "custom:usertype" in user)
      return pages.authenticated[user["custom:usertype"]];
    return [];
  }
};
export default ResponsiveAppBar;
