import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLocation, useNavigate } from "react-router";

export const NavItems = ({ navItems }) => {
  const location = useLocation();
  const nav = useNavigate();
  const matches = useMediaQuery("(min-width:415px)");

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none", md: "none" },
        overflow: "hidden",
        height: 30,
        ml: -2,
        mt: 1,
        "&::after": {
          content: '""',
          display: !matches ? "flex" : "none",
          width: 40,
          height: 40,
          right: 0,
          position: "absolute",
          marginLeft: "auto",
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .7) 40%, #fff 70%)",
        },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
            background: "blue",
          },
        }}
      >
        {navItems.map((page) => (
          <ListItem
            key={page.label}
            disablePadding
            sx={{
              top: -8,
              height: 28,
              borderRadius: 25,
            }}
          >
            <ListItemButton
              onClick={() => nav(page.path)}
              sx={{
                border: "0px solid",
                "&:hover": {
                  borderRadius: "25px",
                  backgroundColor: "transparent",
                  color: (theme) => theme.palette.active.main,
                },
              }}
            >
              <ListItemText
                primary={page.label}
                sx={{
                  color: (theme) => theme.palette.common.black,
                  whiteSpace: "nowrap",
                  borderBottomColor: (theme) => theme.palette.active.main,
                  borderBottomStyle: location.pathname
                    .toLowerCase()
                    .includes(page.path.toLowerCase())
                    ? "solid"
                    : "none",
                  marginTop: 1,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
