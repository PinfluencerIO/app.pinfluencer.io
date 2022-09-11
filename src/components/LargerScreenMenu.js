import styled from "@emotion/styled";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { LinkedToolTip } from "./LinkedToolTip";

export const LargerScreenMenu = ({ navItems }) => {
  const MenuLink = styled(NavLink)(({ theme }) => ({
    color: theme.palette.primary.main,
    textDecoration: "none",
    margin: "0 16px",
    fontWeight: "700",
    "&:hover": {
      textDecoration: "underline",
    },
    "&.active": {
      color: "green",
      fontWeight: "900",
      textDecoration: "none",
      cursor: "default",
    },
  }));

  return (
    <React.Fragment>
      <LinkedToolTip title="Home" route="/">
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
        >
          Pinfluencer
        </Typography>
      </LinkedToolTip>

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem={true}
        sx={{ mx: 3, display: { xs: "none", sm: "block" } }}
      />
      <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
        {navItems.map((page) => (
          <MenuLink key={page.toString()} to={page.toString()}>
            {page}
          </MenuLink>
        ))}
      </Box>
    </React.Fragment>
  );
};
