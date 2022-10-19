import { Avatar, Box, IconButton, MenuItem } from "@mui/material";
import Menu from "@mui/material/Menu";
import React from "react";

export const Dev = () => {
  return (
    <IconMenu
      icon={<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>}
      items={[
        {
          label: "first",
          key: 1,
          action: () => {
            console.log("f1 called");
          },
        },
        {
          label: "second",
          key: 2,
          action: () => {
            console.log("f2 called");
          },
        },
        {
          label: "third",
          key: 3,
          action: () => {
            console.log("f3 called");
          },
        },
      ]}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        marginTop: 4,
      }}
    />
  );
};

const IconMenu = ({
  icon,
  items,
  clickHandlerOverride,
  anchorOrigin,
  transformOrigin,
  sx,
}) => {
  const [anchorElement, setAnchorElement] = React.useState(null);
  const handleClose = () => {
    setAnchorElement(null);
  };
  const handleClick = (event) => {
    if (clickHandlerOverride) clickHandlerOverride();
    else setAnchorElement(event.currentTarget);
  };
  const open = Boolean(anchorElement);
  return (
    <Box margin="0 auto">
      <IconButton onClick={handleClick}>{icon}</IconButton>
      <Menu
        sx={sx}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorEl={anchorElement}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {items.map((item) => (
          <MenuItem
            key={item.key}
            onClick={(event) => {
              handleClose();
              item.action(event);
            }}
          >
            <Box textAlign="center">{item.label}</Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
