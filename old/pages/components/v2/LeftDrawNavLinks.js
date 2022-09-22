import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export const LeftDrawNavLinks = ({ pages }) => {
  const nav = useNavigate();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: (theme) => theme.drawerWidth,
        flexShrink: 0,

        [`& .MuiDrawer-paper`]: {
          width: (theme) => theme.drawerWidth,
          boxSizing: "border-box",
          borderRight: 0,
        },
        display: { xs: "none", sm: "block", md: "block" },
        mr: 3,
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", mt: 1 }}>
        <List>
          {pages.map((page) => (
            <ListItem
              key={page.label}
              disablePadding
              sx={{ border: "0px solid" }}
            >
              <ListItemButton
                selected={
                  location.pathname
                    .toLowerCase()
                    .includes(page.path.toLowerCase())
                    ? true
                    : false
                }
                onClick={() => nav(page.path)}
                sx={{
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                  width: "100%",
                }}
              >
                <ListItemIcon sx={{ minWidth: 30 }}>{page.icon}</ListItemIcon>
                <ListItemText primary={page.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
