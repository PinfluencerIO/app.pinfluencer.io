import { Box, Link, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        bottom: 0,
        height: "auto",
        position: "fixed",
        top: "auto",
        padding: "20px",
        textAlign: "left",
        margin: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        width: (theme) => theme.drawerWidth,
        "& span": {
          fontSize: "0.75rem",
          fontWeight: 400,
          letterSpacing: "0.025em",
          color: (theme) => theme.palette.grey[600],
          mr: 1,
          cursor: "pointer",
        },
        "& a": {
          textDecoration: "none",
          cursor: "pointer",
        },
        "& a:hover": {
          textDecoration: (theme) => "1px underline " + theme.palette.grey[600],
          textUnderlineOffset: 1,
        },
      }}
    >
      <Link>
        <Typography variant="span">Terms</Typography>
      </Link>
      <Link>
        <Typography variant="span">Privacy</Typography>
      </Link>
      <Link>
        <Typography variant="span">About</Typography>
      </Link>
      <Box>
        <Typography variant="span">&copy; 2022 Pinfluencer</Typography>
      </Box>
    </Box>
  );
};
