import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";

const EllipsisTooltip = ({ label, labelColor, text, fontSize = "1rem" }) => {
  return (
    <Tooltip title={text}>
      <Box display="flex">
        <Typography
          sx={{
            display: {
              xs: "none",
              sm: "block",
              color: labelColor,
              marginRight: "4px",

              fontSize,
            },
          }}
        >
          {label}:
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Tooltip>
  );
};

export default EllipsisTooltip;
