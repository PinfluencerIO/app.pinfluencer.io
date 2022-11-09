import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";

const IconMenu = ({
  icon,
  items,
  clickHandlerOverride,
  anchorOrigin,
  transformOrigin,
  sx,
  name = "Menu action",
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
    <Box>
      <IconButton onClick={handleClick} aria-label={name}>
        {icon}
      </IconButton>
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

export default IconMenu;
